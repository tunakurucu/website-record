import { AIBrief } from "../lib/types";


export function AIBriefCard({ brief }: { brief: AIBrief }) {
return (
<article className="card" aria-live="polite">
<h2 className="mb-2 text-xl font-semibold">So that you are more informed</h2>
<p className="text-gray-800">{brief.summary}</p>
{brief.keyPoints?.length ? (
<ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
{brief.keyPoints.map((k, i) => (
<li key={i}>{k}</li>
))}
</ul>
) : null}
<details className="mt-3">
<summary className="cursor-pointer text-sm text-blue-700">View sources</summary>
<ul className="mt-2 space-y-1 text-sm">
{brief.sources.map((s) => (
<li key={s.url}>
<a className="underline" href={s.url} target="_blank" rel="noreferrer">
{s.title}
</a>
<span className="text-gray-500"> — {s.outlet}</span>
</li>
))}
</ul>
</details>
</article>
);
}