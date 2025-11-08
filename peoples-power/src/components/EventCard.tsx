import { CivicEvent } from "../lib/types";
import { fmtDateTime } from "../lib/format";


export function EventCard({ event }: { event: CivicEvent }) {
return (
<article className="card flex items-start justify-between">
<div>
<div className="text-sm text-muted">{fmtDateTime(event.startsAt)}</div>
<h3 className="font-semibold text-title">{event.title}</h3>
<p className="text-sm text-muted">
{event.venue ?? ""} {event.address ? `· ${event.address}` : ""}
{event.distanceMiles ? ` · ${event.distanceMiles.toFixed(1)} mi` : ""}
</p>
</div>
{event.link ? (
<a className="btn btn-primary shadow-[0_8px_24px_rgba(59,130,246,0.25)]" href={event.link} target="_blank" rel="noreferrer">
Details
</a>
) : null}
</article>
);
}