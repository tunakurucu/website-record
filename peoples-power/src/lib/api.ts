import { PeoplePowerResponse, TopicQuery } from "./types";


const BASE = import.meta.env.VITE_API_BASE ?? "";


// Toggle this to true to use local mock data during the hackathon
const USE_MOCK = !BASE;


export async function fetchPeoplePower(q: TopicQuery): Promise<PeoplePowerResponse> {
if (USE_MOCK) return mockPeoplePower(q);


const params = new URLSearchParams({
topic: q.topic,
city: q.city,
state: q.state,
});
const res = await fetch(`${BASE}/v1/brief?${params.toString()}`);
if (!res.ok) throw new Error("Failed to load data");
return res.json();
}


async function mockPeoplePower(q: TopicQuery): Promise<PeoplePowerResponse> {
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