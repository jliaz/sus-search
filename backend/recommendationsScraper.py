from bs4 import BeautifulSoup as bs
import csv
import os
import requests


def test(imageLinks, prices, productLinks, productNames, companies, link):
    page = requests.get(link)
    soup = bs(page.text, 'html.parser')

    products = soup.find(name="div", attrs={"class": "product-grid product-grid--browse"})
    for product in products.find_all(name="div", attrs={"class": "product-grid__cell"}):
        a = product.find(name="a")
        if a["href"][1:6] != "pages" and product.find(name="h2", attrs={"class": "product-summary__name"}) != None:
            productLinks.append("https://www.thereformation.com" + a["href"])
            imageLinks.append(a.find(name="img")["data-src"])
            productNames.append(product.find(name="h2", attrs={"class": "product-summary__name"}).text.strip())
            print(productNames[-1])
            prices.append(product.find(name="p", attrs={"class": "product-prices__price"}).find(name="span").text.strip())
            companies.append("The Reformation")


def storymfg(imageLinks, prices, productLinks, productNames, companies, link):
    page = requests.get(link)
    soup = bs(page.text, 'html.parser')

    for product in soup.find_all(name="div", attrs={"class": "item"}):
        a = product.find(name="a")
        productLinks.append("https://www.storymfg.com" + a["href"])
        imageLinks.append("https:" + a.find(name="img")["data-src"].replace("{width}", "900"))
        productNames.append(a.find_all(name="p")[0].text)
        prices.append(a.find(name="p", attrs={"class": "color--primary-meta m0 font-size__basic"}).text.strip())
        companies.append("Story mfg")


def tuckerman(imageLinks, prices, productLinks, productNames, companies, link):
    page = requests.get(link)
    soup = bs(page.text, 'html.parser')

    for product in soup.find_all(name='div', attrs={"class": "product-wrap"}):
        productLinks.append("https://www.tuckerman.co" + product.find(name="a")["href"])
        imageLinks.append("https:" + product.find(name="img")["src"])
        productNames.append(product.find(name="span", attrs={"class": "title"}).text)
        prices.append(product.find(name="span", attrs={"class": "money"}).text)
        companies.append("Tuckerman & Co")

def ethicalsilkcompany(imageLinks, prices, productLinks, productNames, companies, link):
    page = requests.get(link)
    soup = bs(page.text, 'html.parser')

    productList = soup.find(name="div", attrs={"id": "productList"})
    for a in productList.find_all(name="a"):
        productLinks.append("https:/" + a["href"])
        imageLinks.append(a.find(name="img")["data-src"])
        prices.append(a.find(name="span", attrs={"class": "sqs-money-native"}).text)
        productNames.append(a.find(name="div", attrs={"class": "product-title"}).text)
        companies.append("The Ethical Silk Company")


def kotn(imageLinks, prices, productLinks, productNames, companies, link):
    page = requests.get(link)
    soup = bs(page.text, 'html.parser')

    for productDiv in soup.find_all(name="div", attrs={"class": "bc-sf-filter-product-item"}):
        for innerDiv in productDiv.find_all(name="div", attrs={"class": "bc-sf-filter-product-item-inner"}):
            companies.append("Kotn")
            productNames.append(innerDiv.find_all(name="a")[1].text)
            productLinks.append("https://shop.kotn.com/" + innerDiv.find(name="a")["href"])
            imageLinks.append("https:" + innerDiv.find("img")["data-src"])
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
                    imageLinks.append("https:" + img["data-src"])
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
    kotn(imageLinks, prices, productLinks, productNames, companies, 'https://shop.kotn.com/collections/mens')
    kotn(imageLinks, prices, productLinks, productNames, companies, 'https://shop.kotn.com/collections/womens')
    ethicalsilkcompany(imageLinks, prices, productLinks, productNames, companies, 'https://www.theethicalsilkcompany.com/shop')
    tuckerman(imageLinks, prices, productLinks, productNames, companies, 'https://www.tuckerman.co/collections/mens-shirts')
    tuckerman(imageLinks, prices, productLinks, productNames, companies, 'https://www.tuckerman.co/collections/womens-shirts')
    storymfg(imageLinks, prices, productLinks, productNames, companies, 'https://www.storymfg.com/collections/shop-all')
    test(imageLinks, prices, productLinks, productNames, companies, 'https://www.thereformation.com/categories/all-clothing')

    # create table
    # for i in range(0, len(imageLinks)):
        #print(productNames[i], prices[i], imageLinks[i], productLinks[i], companies[i])
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

