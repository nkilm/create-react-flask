from flask import Flask
from flask_restful import Api
from flask_cors import CORS 
from api.helloworld_api import helloworld

app = Flask(__name__)
CORS(app) 
api = Api(app)

@app.route("/", defaults={'path':''})
def home(path):
    return {"info": "Hello! React-Flask Template by Nikhil Mohite - www.github.com/nkilm"}

api.add_resource(helloworld)

if __name__ == "__main__":
    app.run(debug=True,port=6060)