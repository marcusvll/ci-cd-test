# python-service/app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_python():
    return jsonify(message="Olá do meu serviço Python!"), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) # Porta 5000 para Python
