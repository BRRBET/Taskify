import requests
from bs4 import BeautifulSoup

url = "https://hereford123.cc/?fbclid=IwY2xjawHNraVleHRuA2FlbQIxMQABHUjFw0CJLNOmxBHVU-5usLTIrfI-uywI0egImMv8yDy7NqMBsUfjoxqbjw_aem_n3vBgzDQkWNDiNauCIuzzg#/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
print(soup.prettify())
