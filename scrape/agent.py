from newsapi import NewsApiClient
from newsplease import NewsPlease
from dotenv import load_dotenv
import os

load_dotenv()
NEWS_API = os.getenv("NEWS_API")


def req(request_q, lan=None, country=None):


    # Init
    newsapi = NewsApiClient(api_key=NEWS_API)

    # /v2/top-headlines
    # top_headlines = newsapi.get_top_headlines(q=request_q,
    #                                         language='en',
    #                                         country='us')

    # /v2/everything
    all_articles = newsapi.get_everything(q=request_q,
                                        language='en',
                                        sort_by='relevancy')
    
    print(all_articles)

    articles = all_articles['articles']
    urls = [a['url'] for a in articles]

    news = NewsPlease.from_urls(urls, request_args={"timeout": 6})
    print(news)



if "__main__" == __name__:
    req(request_q="New York")