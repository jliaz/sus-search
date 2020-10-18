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
PRODUCT_SET_ID = 'product_set'
PRODUCT_CATEGORY = 'apparel-v2'
IMAGE_BUCKET = 'dubhacks-ref-images'
VISION_BUCKET = 'dubhacks-vision-bucket'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'content/dubhacks-292818-2f87e46570da.json' # TODO
os.environ['PROJECT_ID'] = PROJECT_ID
os.environ['LOCATION_ID'] = LOCATION_ID

def detect_labels_uri(uri):
    """Detects labels in the file located in Google Cloud Storage or on the
    Web."""
    client = vision.ImageAnnotatorClient()
    image = vision.Image()
    image.source.image_uri = uri

    response = client.label_detection(image=image)
    labels = response.label_annotations

    # for label in labels:
    #     print(label.description)
    print(response.error)
    if response.error.message:
        raise Exception(
            '{}'+uri+'\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))
    return [label.description for label in labels]

def get_reference_image_uri(
        project_id, location, product_id):
    """List all images in a product.
    Args:
        project_id: Id of the project.
        location: A compute region name.
        product_id: Id of the product.
    """
    client = vision.ProductSearchClient()

    # Get the full path of the product.
    product_path = client.product_path(
        project=project_id, location=location, product=product_id)

    # List all the reference images available in the product.
    reference_images = client.list_reference_images(parent=product_path)

    # Display the reference image information.
    for image in reference_images:
      return image.uri
    #     print('Reference image name: {}'.format(image.name))
    #     print('Reference image id: {}'.format(image.name.split('/')[-1]))
    #     print('Reference image uri: {}'.format(image.uri))
    #     print('Reference image bounding polygons: {}'.format(
    #         image.bounding_polys))


def get_image_metadata(bucket_name, blob_name):
    """Prints out a blob's metadata."""
    # bucket_name = 'your-bucket-name'
    # blob_name = 'your-object-name'

    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.get_blob(blob_name)

    return blob.metadata



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
        product_id = product.name.split('/')[-1]
        image_uri = get_reference_image_uri(PROJECT_ID, LOCATION_ID, product_id)
        blob_name = image_uri.split('/')[-1]
        meta = get_image_metadata(IMAGE_BUCKET, blob_name)
        print("Product Info: ", meta)
        output.append(meta)
   	
    
    return output
    
def get_similar_products_file(
        project_id, location, product_set_id, product_category,
        file_path, filter):
    """Search similar products to image.
    Args:
        project_id: Id of the project.
        location: A compute region name.
        product_set_id: Id of the product set.
        product_category: Category of the product.
        file_path: Local file path of the image to be searched.
        filter: Condition to be applied on the labels.
        Example for filter: (color = red OR color = blue) AND style = kids
        It will search on all products with the following labels:
        color:red AND style:kids
        color:blue AND style:kids
    """
    # product_search_client is needed only for its helper methods.
    product_search_client = vision.ProductSearchClient()
    image_annotator_client = vision.ImageAnnotatorClient()

    # Read the image as a stream of bytes.
    with open(file_path, 'rb') as image_file:
        content = image_file.read()

    # Create annotate image request along with product search feature.
    image = vision.Image(content=content)

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
        product_id = product.name.split('/')[-1]
        image_uri = get_reference_image_uri(PROJECT_ID, LOCATION_ID, product_id)
        blob_name = image_uri.split('/')[-1]
        meta = get_image_metadata(IMAGE_BUCKET, blob_name)
        print("Product Info: ", meta)
        output.append(meta)


    return output

