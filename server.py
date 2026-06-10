import os
import json
import urllib.request
import urllib.error
from http.server import HTTPServer, SimpleHTTPRequestHandler
from openai import OpenAI

# the newest OpenAI model is "gpt-5" which was released August 7, 2025.
# do not change this unless explicitly requested by the user
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

VITE_PORT = 8000


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/__mockup/"):
            self._proxy_to_vite()
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == "/api/chat":
            self._handle_chat()
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def _proxy_to_vite(self):
        target = f"http://localhost:{VITE_PORT}{self.path}"
        try:
            req = urllib.request.Request(target, headers={"Host": f"localhost:{VITE_PORT}"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                self.send_response(resp.status)
                for key, val in resp.headers.items():
                    if key.lower() not in ("transfer-encoding", "connection"):
                        self.send_header(key, val)
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(resp.read())
        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            self.end_headers()
            self.wfile.write(e.read())
        except Exception as e:
            self.send_response(502)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(f"Proxy error: {e}".encode())

    def _handle_chat(self):
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body)
            messages = data.get("messages", [])

            response = client.chat.completions.create(
                model="gpt-5",
                messages=[
                    {
                        "role": "system",
                        "content": (
                            "You are AMR AI — a smart, concise assistant built into the AMR Dashboard. "
                            "Keep replies clear and helpful. You may use markdown formatting."
                        ),
                    }
                ] + messages,
                max_completion_tokens=8192,
            )

            reply = response.choices[0].message.content or ""
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({"reply": reply}).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())

    def log_message(self, format, *args):
        print(f"[{self.address_string()}] {format % args}")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    server = HTTPServer(("0.0.0.0", port), Handler)
    print(f"Serving on http://0.0.0.0:{port}")
    server.serve_forever()
