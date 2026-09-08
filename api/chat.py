from http.server import BaseHTTPRequestHandler
import json
import os
import sys

# Ensure root directory is on Python path so src modules can be imported
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import traceback

generate_chat_response = None

try:
    from ._chatbot import generate_chat_response as gcr
    generate_chat_response = gcr
except Exception:
    try:
        from _chatbot import generate_chat_response as gcr
        generate_chat_response = gcr
    except Exception:
        pass

if not generate_chat_response:
    try:
        from src.chatbot import generate_chat_response as gcr
        generate_chat_response = gcr
    except Exception as e:
        print(f"[API ERROR importing chatbot]: {e}")
        def fallback_stub(msg, history=None):
            return "Tapas Barman is an AI Engineer and Python Developer. Reach him by phone at **+91-7363971909**, email at **tapasb.dev@gmail.com**, or on [LinkedIn](https://www.linkedin.com/in/tapas-barman-2661161a0/)."
        generate_chat_response = fallback_stub

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8") if content_length > 0 else ""
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

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
