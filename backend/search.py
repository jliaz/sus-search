import os
from google.cloud import vision
from google.protobuf import field_mask_pb2 as field_mask
from google.cloud import storage
from google.colab import auth
from google.protobuf.json_format import MessageToJson

import requests # to get image from the web
import shutil # to save it locally
from uuid import uuid4
import csv

# environment variables
PROJECT_ID = 'dubhacks-292818'
LOCATION_ID = 'us-east1'
PRODUCT_SET_ID = 'recommendations'
PRODUCT_CATEGORY = 'apparel-v2'
IMAGE_BUCKET = 'dubhacks-images-bucket'
VISION_BUCKET = 'dubhacks-vision-bucket'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '/content/dubhacks-a3a38c1cfcb3.json' # TODO
os.environ['PROJECT_ID'] = PROJECT_ID
os.environ['LOCATION_ID'] = LOCATION_ID


def convert(labelsStr):
  """
  Converts protobuf format of product labels returned by Vision API
  into a dictionary of key-value pairs
  """
  labelObj = {}
  labelsStr = ' '.join(labelsStr.strip()[1:-1].split('\n'))
  for label in labelsStr.split(','):
    key = label.split(' value: ')[0].split('key: ')[1].strip().strip('"')
    value = label.split(' value: ')[1].strip().strip('"')
    labelObj[key] = value
  return labelObj


def get_similar_products_uri(
        project_id, location, product_set_id, product_category,
        image_uri, filter):
    """Search similar products to image.
    Args:
        project_id: Id of the project.
        location: A compute region name.
        product_set_id: Id of the product set.
        product_category: Category of the product.
        image_uri: Cloud Storage location of image to be searched.
        filter: Condition to be applied on the labels.
        Example for filter: (color = red OR color = blue) AND style = kids
        It will search on all products with the following labels:
        color:red AND style:kids
        color:blue AND style:kids
    """
    # product_search_client is needed only for its helper methods.
    product_search_client = vision.ProductSearchClient()
    image_annotator_client = vision.ImageAnnotatorClient()

    # Create annotate image request along with product search feature.
    image_source = vision.ImageSource(image_uri=image_uri)
    image = vision.Image(source=image_source)

    # product search specific parameters
    product_set_path = product_search_client.product_set_path(
        project=project_id, location=location,
        product_set=product_set_id)
    product_search_params = vision.ProductSearchParams(
        product_set=product_set_path,
        product_categories=[product_category],
        filter=filter)
    image_context = vision.ImageContext(
        product_search_params=product_search_params)

    # Search products similar to the image.
    response = image_annotator_client.product_search(
        image, image_context=image_context)

    index_time = response.product_search_results.index_time
    print('Product set index time: ')
    print(index_time)

    results = response.product_search_results.results

    print('Search results:')
    output = []
    for result in results:
        product = result.product

        print('Score(Confidence): {}'.format(result.score))
        print('Image name: {}'.format(result.image))

        print('Product name: {}'.format(product.name))
        print('Product display name: {}'.format(
            product.display_name))
        print('Product description: {}'.format(product.description))
        # labels.append(str(product.product_labels))
        labels = convert(str(product.product_labels))
        print('Product labels:'.format(labels))
        for key,val in labels.items():
          print(f'{key}: {val}')
        print()
        output.append(labels)
   	
    
    return output
    



