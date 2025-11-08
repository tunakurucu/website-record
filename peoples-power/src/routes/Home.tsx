import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../../img folder/pp.png";


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
<header className="mb-8 text-center">
<img src={logo} alt="People's Power Logo" className="mx-auto h-16 w-auto mb-4" />
<p className="text-sm text-gray-600">
One of the best ways to support your community is to vote.
</p>
<p className="text-sm text-gray-600">
An even better way is to vote informed.
</p>
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
</div>
);
}