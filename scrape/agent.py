from google import genai
from dotenv import load_dotenv
import dataAgro
import json
import os
import sys

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))



def shineAI(req): 
    #dataAgro.req(req)
    uploaded_file = client.files.upload(file="training.txt")
    response = client.models.generate_content(
    model="gemini-2.0-flash", contents=["Read this file and return a JSON object with relating fields: summary, keyPoints, sources, candidates, plans, and events.", uploaded_file])
    
    try:
        # Parse Gemini's response as JSON
        raw = response.text.strip()
        raw = raw.split("```json")[-1]
        raw = raw.split("```")[0].strip()

        parsed = json.loads(raw)

        # Save to a JSON file
        with open("../peoples-power/training.json", "w", encoding="utf-8") as f:
            json.dump(parsed, f, ensure_ascii=False, indent=2)

        print("✅ JSON saved to training.json")
    except Exception as e:
        print("❌ Failed to parse JSON:", e)
        print("Raw response:", raw)


if __name__ == "__main__":
    shineAI(sys.argv[1] if len(sys.argv) > 1 else "Nashville")
