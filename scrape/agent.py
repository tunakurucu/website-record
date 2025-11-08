from google import genai
from dotenv import load_dotenv
<<<<<<< HEAD
import google.generativeai as genai

load_dotenv()

# Set the API key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Generate content
response = genai.generateText(
    model="gemini-2.5-flash",
    prompt="Tell me a fun fact about space."
)

print(response.text)

=======
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Write a story about a magic backpack."
)

print(response.text)
>>>>>>> refs/remotes/origin/main
