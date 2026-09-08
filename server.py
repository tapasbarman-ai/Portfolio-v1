import os
import json
from http.server import HTTPServer, SimpleHTTPRequestHandler
from src.chatbot import generate_chat_response

class PortfolioHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/api/chat":
            try:
                content_length = int(self.headers.get("Content-Length", 0))
                body = self.rfile.read(content_length).decode("utf-8")
                data = json.loads(body) if body else {}
                
                user_msg = data.get("message", "").strip()
                history = data.get("history", [])
                
                if not user_msg:
                    res_bytes = json.dumps({"error": "Empty message"}).encode("utf-8")
                    self.send_response(400)
                else:
                    response_text = generate_chat_response(user_msg, history=history)
                    res_bytes = json.dumps({"response": response_text}).encode("utf-8")
                    self.send_response(200)

                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.send_header("Content-Length", str(len(res_bytes)))
                self.end_headers()
                self.wfile.write(res_bytes)
            except Exception as e:
                err_bytes = json.dumps({"error": str(e)}).encode("utf-8")
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.send_header("Content-Length", str(len(err_bytes)))
                self.end_headers()
                self.wfile.write(err_bytes)
        else:
            self.send_error(404, "Not Found")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    server = HTTPServer(("0.0.0.0", port), PortfolioHandler)
    print(f"Server running on http://localhost:{port}")
    server.serve_forever()
