import { PeoplePowerResponse, TopicQuery } from "./types";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";

const USE_MOCK = true;


export async function fetchPeoplePower(q) {
  if (USE_MOCK) return mockPeoplePower(q);

  return new Promise<PeoplePowerResponse>((resolve, reject) => {
    const scriptPath = path.join("scrape", "agent.py");
    const pythonProcess = spawn("python", [scriptPath, q.topic]);

    let output = "";

    pythonProcess.stdout.on("data", (res) => {
      output += res.toString(); // accumulate chunks
    });

    pythonProcess.stderr.on("data", (res) => {
      console.error(`stderr: ${res}`);
    });

    pythonProcess.on("close", (code) => {
      try {
        const filePath = "response.json"
        const raw = fs.readFileSync(filePath, "utf-8")
        const json = JSON.parse(raw);

        resolve({
          brief: {
            topic: q.topic,
            summary: json.summary,
            keyPoints: json.keyPoints,
            sources: json.sources,
          },
          candidates: json.candidates,
          plans: json.plans,
          events: json.events,
        });
      } catch (err) {
        reject(err);
      }
    });

    pythonProcess.on("error", reject);
  });
}



async function mockPeoplePower(q) {
const topic = q.topic || "affordable housing";
return {
    brief: {
    topic,
    summary:
    `Nashville has seen rising ${topic} challenges with increased demand and limited supply. Recent proposals include zoning changes, incentives for mixed income developments, and public-private partnerships.`,
    keyPoints: [
    "City council considered inclusionary zoning pilots",
    "Nonprofits expanding housing vouchers",
    "Transit oriented development tied to affordability targets",
    ],
    sources: [
    {
    title: "Metro Council advances housing package",
    url: "https://example.com/housing",
    outlet: "Local News",
    publishedAt: new Date().toISOString(),
    },
    {
    title: "Nashville affordability report",
    url: "https://example.com/report",
    outlet: "Civic Lab",
    publishedAt: new Date().toISOString(),
    },
    ],
    },
    candidates: [
    {
    id: "c1",
    name: "Alex Rivera",
    party: "Nonpartisan",
    photoUrl: "https://placehold.co/96x96",
    stanceTag: "Supports",
    pastActions: [
    {
    text: "Sponsored a pilot for inclusionary zoning in 2023",
    sources: [
    { title: "Pilot approved", url: "https://example.com/pilot", outlet: "City Desk", publishedAt: new Date().toISOString() },
    ],
    },
    ],
    plans: [
    {
    text: "Expand affordable housing initiatives",
    sources: [
    {
    title: "Housing initiatives report",
    url: "https://example.com/housing-initiatives",
    outlet: "City News",
    publishedAt: new Date().toISOString(),
    },
    ],
    },
    ],
    },
    ],
    events: [
    {
    id: "e1",
    title: "Affordable Housing Rally",
    startsAt: new Date().toISOString(),
    venue: "City Hall",
    address: "123 Main St, Nashville, TN",
    type: "Rally",
    link: "https://example.com/rally",
    },
    ],
    voting: {
    registerUrl: "https://example.com/register",
    deadline: new Date().toISOString(),
    pollingLookupUrl: "https://example.com/polling",
    notes: "Bring a valid ID to vote.",
    },
};
}