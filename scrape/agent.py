from google import genai
from dotenv import load_dotenv
import dataAgro
import os
import sys

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))



def shineAI(req): 
    dataAgro.req(req)
    uploaded_file = client.files.upload(file="training.txt")
    response = client.models.generate_content(
    model="gemini-2.0-flash", contents=["Read this file and take it in and analyze it, give me a yes in response if you could do it", uploaded_file])
    print(response.text)
shineAI()


if "__main__" == __name__:
    shineAI(sys.argv[1])