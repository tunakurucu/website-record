import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPeoplePower } from "../lib/api";
import { AIBriefCard } from "../components/AIBriefCard";
import { CandidateCard } from "../components/CandidateCard";
import { EventCard } from "../components/EventCard";
import { VotingCard } from "../components/VotingCard";
import Loading from "../components/Loading";


export default function Results() {
const [sp] = useSearchParams();
const topic = sp.get("topic") ?? "";
const city = sp.get("city") ?? (import.meta.env.VITE_CITY || "Nashville");
const state = sp.get("state") ?? (import.meta.env.VITE_STATE || "TN");


const { data, isLoading, error } = useQuery({
queryKey: ["brief", topic, city, state],
queryFn: () => fetchPeoplePower({ topic, city, state }),
enabled: !!topic,
});


if (isLoading) return <Loading label="Loading your brief" />;
if (error || !data) return <div className="card text-red-600">Sorry, something went wrong.</div>;


return (
<div className="space-y-6">
<AIBriefCard brief={data.brief} />


<section className="space-y-3">
<h2 className="text-xl font-semibold">Candidates</h2>
{data.candidates.map((c) => (
<CandidateCard key={c.id} candidate={c} />
))}
</section>


<section className="space-y-3">
<h2 className="text-xl font-semibold">Get involved</h2>
{data.events.length === 0 ? (
<p className="text-sm text-gray-600">No events found yet.</p>
) : (
data.events.map((e) => <EventCard key={e.id} event={e} />)
)}
</section>


<VotingCard voting={data.voting} />
</div>
);
}