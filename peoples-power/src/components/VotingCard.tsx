import { VotingInfo } from "../lib/types";


export function VotingCard({ voting }: { voting: VotingInfo }) {
return (
<article className="card">
<h2 className="mb-2 text-xl font-semibold text-title">Voting info</h2>
{voting.deadline ? (
<p className="text-sm text-body">
Registration deadline: {new Date(voting.deadline).toLocaleDateString()}
</p>
) : null}
<div className="mt-3 flex gap-3">
<a className="btn btn-primary" href={voting.registerUrl} target="_blank" rel="noreferrer">
Check registration
</a>
<a className="btn btn-outline" href={voting.pollingLookupUrl} target="_blank" rel="noreferrer">
Find polling place
</a>
</div>
{voting.notes ? <p className="mt-2 text-xs text-muted">{voting.notes}</p> : null}
</article>
);
}