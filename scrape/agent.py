import os
from dotenv import load_dotenv
from openai import OpenAI 

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

try:
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are assisting the user in helping find topics relating to politics in their local area."},
            {"role": "user", "content": "Tell me about local politics in Nashville, TN."},
        ],
        max_tokens=150,
    )

    generated_text = response.choices[0].message.content.strip()
    print(generated_text)

except Exception as e:
    print(f"An error occurred: {e}")