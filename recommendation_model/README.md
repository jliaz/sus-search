# Important pieces of notebook

These are the two sections of the notebook that provide the core functionality for setting up the recommendations.

## Scraping to Products Pipeline

This section lists the functions and steps used to transform the scraped products stored in `recommendations.csv` to an indexed Product Set within Google Cloud Vision.

For each product, we download then upload the reference image to Google Cloud Storage and then initiate a bulk import of products in Google Cloud Vision pointing to those reference images.

Each product's information such as name, price, brand, etc. are stored as metadata in the file on Google Cloud Storage.

## Google Vision API Python SDK - Search Images

This section provides functions to search for images and return the metadata associated with that image, giving the product information we need to display to the user.
