from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

# Google Cloud API 
import os
from google.cloud import vision
from google.protobuf import field_mask_pb2 as field_mask
from google.cloud import storage

# Utility
import requests
import shutil
from uuid import uuid4
import csv

# Search
from search import *

app = Flask(__name__)
CORS(app)

PROJECT_ID = 'dubhacks-292818'
LOCATION_ID = 'us-east1'
PRODUCT_SET_ID = 'product_set'
PRODUCT_CATEGORY = 'apparel-v2'
IMAGE_BUCKET = 'dubhacks-ref-images'
VISION_BUCKET = 'dubhacks-vision-bucket'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'content/dubhacks-292818-f5faadd48adf.json'
os.environ['PROJECT_ID'] = PROJECT_ID
os.environ['LOCATION_ID'] = LOCATION_ID


@app.route("/")
def test():
	return "Flask API is running correctly"

@app.route("/imageSearch", methods=["GET"])
def getImageSearches():
	image_uri = request.args.get('uri')
	search_results = get_similar_products_uri(PROJECT_ID, LOCATION_ID, PRODUCT_SET_ID, 'apparel-v2', image_uri, '')
	print(search_results)
	search_results = jsonify(search_results)
	print("API RESULTS")
	print(search_results)
	return search_results

@app.route("/textSearch", methods=["GET"])
def getTextSearches():
	return "SUCCESS"
