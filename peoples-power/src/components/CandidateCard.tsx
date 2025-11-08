import { CandidateRecord } from "../lib/types";


const tagStyles: Record<CandidateRecord["stanceTag"], string> = {
Supports: "bg-green-100 text-green-800",
Opposes: "bg-red-100 text-red-800",
Mixed: "bg-yellow-100 text-yellow-800",
Unknown: "bg-gray-100 text-gray-800",
};


function Section({ title, items }: { title: string; items: { text: string; sources: any[] }[] }) {
return (
<div>
<h4 className="font-semibold">{title}</h4>
<ul>
{items.map((item, index) => (
<li key={index}>{item.text}</li>
))}
</ul>
</div>
);
}


export function CandidateCard({ candidate }: { candidate: CandidateRecord }) {
	const nameParts = candidate.name ? candidate.name.split(" ") : [];
	const first = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : candidate.name;
	const last = nameParts.length > 1 ? nameParts.slice(-1).join(" ") : "";

	return (
		<article className="card">
			<div className="flex items-center gap-3">
				{candidate.photoUrl ? (
					<img
						src={candidate.photoUrl}
						alt={candidate.name}
						className="h-12 w-12 rounded-full object-cover"
					/>
				) : null}
				<div className="flex-1">
					  <div className="flex items-center justify-between gap-3">
						<h3 className="font-semibold">
							{nameParts.length > 1 ? (
								<>
									{first}
									<br />
									{last}
								</>
							) : (
								candidate.name
							)}
						</h3>
						<span className={`badge ${tagStyles[candidate.stanceTag]}`}>{candidate.stanceTag}</span>
					</div>
					{candidate.party ? <p className="text-sm text-gray-500 mt-1">{candidate.party}</p> : null}
				</div>
			</div>


<div className="mt-3 grid gap-3 md:grid-cols-2">
<Section title="Past actions:" items={candidate.pastActions} />
<Section title="Plans for Nashville:" items={candidate.plans} />
</div>
</article>
);
}