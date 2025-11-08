import os
from dotenv import load_dotenv
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

