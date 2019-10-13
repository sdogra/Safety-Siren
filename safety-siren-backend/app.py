from flask import Flask
from flask import render_template
from flask_cors import CORS, cross_origin

# Creates our Flask application.
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# Causes the website to rerender whenever you save your file
app.config["DEBUG"] = True

# Needed for sessions to work properly. Do not worry about this.
app.config["SECRET_KEY"] = "?L=?0{yk-?t??>"
