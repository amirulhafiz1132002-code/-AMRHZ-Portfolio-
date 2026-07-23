#!/usr/bin/env bash
set -euo pipefail

# Simple local test harness:
# - serves the repo root on port 8000
# - requests each page and verifies the loader overlay exists

PORT=8000
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

python3 -m http.server "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
echo "Started HTTP server (PID $SERVER_PID) on http://localhost:$PORT"

# wait for server
for i in {1..20}; do
  if curl -s "http://localhost:$PORT/" >/dev/null 2>&1; then
    break
  fi
  sleep 0.2
done

PAGES=(index.html landing.html analytics.html ap1-console.html amrhz-ai-space.html about.html)
FAIL=0
for p in "${PAGES[@]}"; do
  printf "Checking %s ... " "$p"
  OUT=$(curl -s "http://localhost:$PORT/$p" || true)
  if echo "$OUT" | grep -q 'id="loader-overlay"'; then
    echo "OK (loader found)"
  else
    echo "MISSING loader"
    FAIL=1
  fi
done

kill $SERVER_PID >/dev/null 2>&1 || true

if [ $FAIL -eq 0 ]; then
  echo "All pages passed checks"
  exit 0
else
  echo "One or more checks failed"
  exit 2
fi
