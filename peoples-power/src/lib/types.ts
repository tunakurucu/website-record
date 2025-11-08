export type TopicQuery = { topic: string; city: string; state: string };


export type Source = {
title: string;
url: string;
outlet: string;
publishedAt: string; // ISO
};


export type AIBrief = {
topic: string;
summary: string;
keyPoints: string[];
sources: Source[];
};


export type CandidateRecord = {
id: string;
name: string;
photoUrl?: string;
party?: string;
pastActions: { text: string; sources: Source[] }[];
plans: { text: string; sources: Source[] }[];
stanceTag: "Supports" | "Opposes" | "Mixed" | "Unknown";
};


export type CivicEvent = {
id: string;
title: string;
startsAt: string; // ISO
venue?: string;
address?: string;
distanceMiles?: number;
type: "Debate" | "Rally" | "TownHall" | "Volunteer" | "Other";
link?: string;
};


export type VotingInfo = {
registerUrl: string;
deadline?: string; // ISO
pollingLookupUrl: string;
notes?: string;
};


export type PeoplePowerResponse = {
brief: AIBrief;
candidates: CandidateRecord[];
events: CivicEvent[];
voting: VotingInfo;
};

