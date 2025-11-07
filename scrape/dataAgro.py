from newsapi import NewsApiClient
from bs4 import BeautifulSoup
import requests
from dotenv import load_dotenv
from serpapi import GoogleSearch

import os

load_dotenv()
NEWS_API = os.getenv("NEWS_API")
GOOG_API = os.getenv("GOOG_API")

def find_keys(obj, target_key):
    results = []

    def _search(element, path=""):
        if isinstance(element, dict):
            for k, v in element.items():
                new_path = f"{path}.{k}" if path else k
                if k == target_key:
                    results.append(v)
                _search(v, new_path)
        elif isinstance(element, list):
            for i, item in enumerate(element):
                _search(item, f"{path}[{i}]")

    _search(obj)
    return results


def goog_req(request_q, ip_dat=None):
    location = ""
    if ip_dat:
        location = f'{ip_dat.get("city")}, {ip_dat.get("country")}'
    search = GoogleSearch({
    "q": request_q, 
    "hl": "en",
    "gl": "us",
    "google_domain": "google.com",
    "location": location,
    "api_key": GOOG_API
  })
    goog_res = search.get_dict()
    print(goog_res)

    return find_keys(goog_res, 'link')

def req(request_q, lan="", country=""):
    
    ip = requests.get(f"https://ipinfo.io/json")
    ip_dat = ip.json()
    untrace = False
    if not ("country" in ip_dat or "city" in ip_dat):
        untrace = True

    #country or lan == None use the user's IP
    if not untrace and country == "":
        country = ip_dat['country']
        resp = requests.get(f"https://restcountries.com/v3.1/name/{country}")


    # Init
    newsapi = NewsApiClient(api_key=NEWS_API)

    # /v2/top-headlines
    # top_headlines = newsapi.get_top_headlines(q=request_q,
    #                                         language='en',
    #                                         country='us')

    # /v2/everything
    if lan == "":
        lan = 'en'
    all_articles = newsapi.get_everything(q=request_q,
                                        language=lan,
                                        sort_by='relevancy')
    
    print(all_articles)


    articles = all_articles['articles']
    if not untrace:
        urls = [a['url'] for a in articles] + goog_req(request_q, ip_dat)
    else:
        urls = [a['url'] for a in articles]
    
    with open("training.txt", 'a') as file:
        for url in urls:
            try:
                resp = requests.get(url,  timeout=15)
            except:
                print("timeout")
            soup = BeautifulSoup(resp.text, "lxml")
            try:
                file.write(str({"content": soup.get_text()}))
            except:
                print("writing error")
            print("running")

req("New York")

def txtParse()