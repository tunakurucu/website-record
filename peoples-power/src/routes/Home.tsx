import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "/img folder/pp.png";


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
<div className="mx-auto max-w-xl p-6 text-gray-100">
<header className="mb-8 text-center">
<img src={logo} alt="People's Power Logo" className="mx-auto h-16 w-auto mb-4" />
<p className="text-sm text-white">
One of the best ways to support your community is to vote.
</p>
<p className="text-sm text-white">
An even better way is to vote informed.
</p>
</header>


<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
<label className="block text-sm font-medium">What's on your mind today?</label>
<input
  {...register("topic")}
  className="w-full rounded-xl bg-[#1e293b] border border-[#334155] text-gray-200 placeholder-gray-500 p-3 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 outline-none"
  placeholder="Try: affordable housing"
/>
<button className="w-full glow-btn rounded-xl px-5 py-3 font-semibold mb-4">Get Informed</button>
</form>


<div className="mt-8 text-center">
  <div className="inline-flex items-center justify-center mb-4">
    <span className="text-lg font-semibold text-gray-200">Trending Topics</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 text-yellow-400 ml-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L4.5 12h7.5l-1.5 7.5L19.5 12h-7.5l1.5-7.5z"
      />
    </svg>
  </div>
  <div className="flex justify-center flex-wrap gap-2">
    {quick.map((q) => (
      <button
        key={q}
        onClick={() => nav(`/r?topic=${encodeURIComponent(q)}&city=Nashville&state=TN`)}
        className="rounded-full bg-[#1e293b] text-gray-200 border border-[#334155] px-4 py-2 text-sm hover:bg-[#334155] hover:text-white transition"
      >
        {q}
      </button>
    ))}
  </div>
</div>
</div>
);
}