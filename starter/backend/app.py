import os
from flask import Flask
from flask_cors import CORS
from movies import movies_api

app = Flask(__name__)
CORS(app)
app.register_blueprint(movies_api)
