#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Starting Final Project Setup..."

# =========================
# 📁 1. Normalize Filenames (lowercase, remove spaces)
# =========================
echo "📁 Normalizing filenames (lowercase + remove spaces)..."

# Specific safe renames (if present)
mapfile -t specific < <(printf "%s\n" "Index.html" "Analytics.html" "Landing.html" "Styles.css" "Script.js" "landing page.html")
for f in "${specific[@]}"; do
  if [ -f "$f" ]; then
    target=$(printf "%s" "$f" | tr '[:upper:]' '[:lower:]' | sed 's/ //g')
    if [ "$f" != "$target" ]; then
      echo "Renaming: $f -> $target"
      git mv -f -- "$f" "$target" 2>/dev/null || mv -f -- "$f" "$target"
    fi
  fi
done

# Generic rule: find files with spaces or uppercase letters and normalize
echo "🔁 Scanning repository for other files to normalize..."
IFS=$'\n'
for file in $(find . -type f ! -path './.git/*' ! -path './node_modules/*' ! -path './artifacts/*' -print); do
  # skip the script itself until we've finished
  [ "$file" = "./scripts/finalize_setup.sh" ] && continue
  base=$(basename -- "$file")
  dir=$(dirname -- "$file")
  newbase=$(printf "%s" "$base" | tr '[:upper:]' '[:lower:]' | sed 's/ //g')
  if [ "$base" != "$newbase" ]; then
    src="$dir/$base"
    dst="$dir/$newbase"
    echo "Renaming: $src -> $dst"
    git mv -f -- "$src" "$dst" 2>/dev/null || mv -f -- "$src" "$dst"
  fi
done
unset IFS

echo "✅ Filenames normalized"

# =========================
# 🔗 2. Check Required Files
# =========================
echo "🔍 Checking required files..."

files=(index.html analytics.html landing.html)
missing=0
for file in "${files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "❌ Missing: $file"
    missing=1
  else
    echo "✅ Found: $file"
  fi
done

if [ $missing -ne 0 ]; then
  echo "Please create the missing files before proceeding. Exiting."
  exit 2
fi

# =========================
# 🧪 3. Start Local Server
# =========================
echo "🧪 Starting local server..."

PORT=${PORT:-8000}

if command -v python3 &> /dev/null; then
  echo "🌐 Running on http://localhost:$PORT"
  echo "(Use Ctrl-C to stop the server)"
  python3 -m http.server "$PORT"
else
  echo "❌ Python3 not installed"
  exit 3
fi

# =========================
# 🚀 4. Git Setup (Optional)
# =========================
# Note: unreachable while server is running; this section is provided for
# interactive use after the server is stopped.

echo "📦 Preparing Git (post-server: run the following manually if desired)"
echo "git add . && git commit -m \"✅ Final setup: filenames normalized, structure ready\""

echo "🚀 Done"
