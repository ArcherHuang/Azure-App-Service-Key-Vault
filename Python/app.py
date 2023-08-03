from flask import Flask
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

@app.route("/")
def hello():
    return {
        "info": "Hello World"
    }

@app.route("/secret")
def secret():
    return {
        "DB_CONNECTION_STRING": os.getenv("DB_CONNECTION_STRING")
    }

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)