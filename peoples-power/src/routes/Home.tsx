import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function Home() {
const nav = useNavigate();
const { register, handleSubmit } = useForm<{ topic: string }>();


function onSubmit({ topic }: { topic: string }) {
const t = topic.trim();
if (!t) return;
const city = import.meta.env.VITE_CITY || "Nashville";
const state = import.meta.env.VITE_STATE || "TN";
nav(`/r?topic=${encodeURIComponent(t)}&city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`);
}


const quick = ["Housing", "Public transit", "Public safety", "Education", "Environment"];


return (
<div className="mx-auto max-w-xl">
<header className="mb-8">
<h1 className="text-3xl font-semibold">People's Power</h1>
<p className="text-sm text-gray-600">Turn your concern into informed local action.</p>
</header>


<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
<label className="block text-sm font-medium">What's on your mind today?</label>
<input {...register("topic")} className="input" placeholder="Try: affordable housing" />
<button className="btn btn-primary w-full">Get briefed</button>
</form>


<div className="mt-4 flex flex-wrap gap-2">
{quick.map((q) => (
<button
key={q}
onClick={() => onSubmit({ topic: q })}
className="btn btn-outline rounded-full"
>
{q}
</button>
))}
</div>


<section className="mt-10 space-y-2 text-sm text-gray-600">
<p>Built for AI powered civic engagement with transparency and accessible design.</p>
<p>Source links for every claim. Privacy first.</p>
</section>
</div>
);
}