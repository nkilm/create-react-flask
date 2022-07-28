from importlib import resources
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

# This is one resource
# You can add more resources(more classes!) and each will have it's own methods(GET, POST, PUT, etc)
class helloworld(Resource):
    def get(self):
        return {"message":"Hello World!"}

api.add_resource(helloworld, '/helloworld')