from bs4 import BeautifulSoup
import requests
import json

url = 'http://jasminevout.com/web-projects/furnish/'
response = requests.get(url, timeout=5)
content = BeautifulSoup(response.content, "html.parser")

productArr = []
for product in content.findAll('article', attrs={"class":"product-container"}):
  productObject = {
    "title": product.find('h3', attrs={"class":"product-title"}).text,
    "brand": product.find('p', attrs={"class":"product-brand"}).text,
    "cost": product.find('div', attrs={"class":"product-cost"}).text,
    "tags": product.find('div', attrs={"class":"product-tags"}).text,
    "image": product.find('img')['src']
  }
  productArr.append(productObject)
with open('productData.json', 'w') as outfile:
  json.dump(productArr, outfile)