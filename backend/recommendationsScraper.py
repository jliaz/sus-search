from bs4 import BeautifulSoup as bs
import csv
import os
import requests

def kotnMen(imageLinks, prices, productLinks, productNames, companies):
    page = requests.get('https://shop.kotn.com/collections/mens-lounge?currency=CAD')
    soup = bs(page.text, 'html.parser')

    for productDiv in soup.find_all(name="div", attrs={"class": "bc-sf-filter-product-item"}):
        for innerDiv in productDiv.find_all(name="div", attrs={"class": "bc-sf-filter-product-item-inner"}):
            companies.append("Kotn")
            productNames.append(innerDiv.find_all(name="a")[1].text)
            productLinks.append("https://shop.kotn.com/" + innerDiv.find(name="a")["href"])
            imageLinks.append(innerDiv.find("img")["data-src"])
            priceElement = innerDiv.find(name="span", attrs={"class": "bc-sf-filter-product-item-regular-price"})
            if priceElement != None:
                prices.append(innerDiv.find(name="span", attrs={"class": "bc-sf-filter-product-item-regular-price"}).text)
            else:
                prices.append("No price found")


def biancaspender(imageLinks, prices, productLinks, productNames, companies):
    page = requests.get('https://biancaspender.com/collections/shop-all/')
    soup = bs(page.text, 'html.parser')
    for div in soup.find_all(name="div", attrs={"class": "o-product-thumbnail__inner"}):
        for span in div.find_all(name="span", attrs={"class": "o-product-thumbnail__price-price"}):
            companies.append("Bianca Spender")
            prices.append(span.text)
        for a in div.find_all(name="a"):
            productNames.append(a.text.strip())
            productLinks.append("https://biancaspender.com" + a["href"])
            for picture in a.find_all(name="picture"):
                for img in picture.find_all(name="img"):
                    imageLinks.append(img["data-src"])
    del imageLinks[0::2]
    del prices[0::2]
    del productLinks[0::2]
    del productNames[0::2]
    del companies[0::2]

def main():
    imageLinks = []
    prices = []
    productLinks = []
    productNames = []
    companies = []

    biancaspender(imageLinks, prices, productLinks, productNames, companies)
    kotnMen(imageLinks, prices, productLinks, productNames, companies)

    # create table
    for i in range(0, len(imageLinks)):
        imageLinks[i] = "https:" + imageLinks[i]
        print(productNames[i], prices[i], imageLinks[i], productLinks[i], companies[i])
    table = [productNames, prices, productLinks, imageLinks, companies]
    table = list(zip(*table))

    # create csv
    if os.path.exists("recommendations.csv"):
        os.remove("recommendations.csv")
    else:
        print("The file does not exist")
    with open("recommendations.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerows(table)


if __name__ == "__main__":
    main()

