from flask import Flask, request
import json

app = Flask(__name__)
white = ['http://127.0.0.1:5000']

@app.after_request
def add_cors_headers(response):
    r = request.referrer[:-1]
    if r in white:
        response.headers.add('Access-Control-Allow-Origin', r)
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Headers', 'Cache-Control')
        response.headers.add('Access-Control-Allow-Headers', 'X-Requested-With')
        response.headers.add('Access-Control-Allow-Headers', 'Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    return response


@app.route("/offre", methods=['GET'])
def offreGET():
    with open('offre.json') as f:
       data = json.load(f)
    return data

@app.route("/demande", methods=['GET'])
def demandeGET():
    with open('demande.json') as f:
       data = json.load(f)
    return data

@app.route("/offre", methods=['POST'])
def offrePOST():

    return "{}"

@app.route("/demande", methods=['POST'])
def demandePOST():
    return "hello world"

