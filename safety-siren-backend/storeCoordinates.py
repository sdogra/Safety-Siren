from app import app
from flask import render_template
from flask_cors import CORS, cross_origin
from flask import request
from firebase import firebase

@app.route('/storeCoordinates', methods=['POST'])
@cross_origin()
def persistScore():
    db_cursor = firebase.FirebaseApplication('https://safetysiren.firebaseio.com/',None)
    userData = request.get_json()
    coordinates = userData['coordinates']
    print(coordinates)
    #db_cursor.put('/coordinates','latitude',userData['coordinates']['latitude'])
    #db_cursor.put('/coordinates','longitude',userData['coordinates']['longitude'])
    return 'persisted data'