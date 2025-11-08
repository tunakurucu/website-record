import { CivicEvent } from "../lib/types";
import { fmtDateTime } from "../lib/format";


export function EventCard({ event }: { event: CivicEvent }) {
	const isOrg = event.type === "Organization" || !!event.contact;

	return (
		<article className="card flex items-start justify-between">
			<div>
				<div className="text-sm text-muted">{fmtDateTime(event.startsAt)}</div>
				<h3 className="font-semibold text-title">{event.title}</h3>
				<p className="text-sm text-muted">
					{event.venue ?? ""} {event.address ? `· ${event.address}` : ""}
					{event.distanceMiles ? ` · ${event.distanceMiles.toFixed(1)} mi` : ""}
				</p>
				{isOrg && event.description ? (
					<p className="mt-2 text-sm">{event.description}</p>
				) : null}
			</div>

			<div className="flex flex-col items-end gap-2">
				{/* Organization contact button(s) take precedence */}
				{isOrg && event.contact ? (
					<div className="flex gap-2">
						{event.contact.website ? (
							<a
								className="btn btn-outline"
								href={event.contact.website}
								target="_blank"
								rel="noreferrer"
							>
								Contact
							</a>
						) : null}

						{event.contact.email && !event.contact.website ? (
							<a className="btn btn-outline" href={`mailto:${event.contact.email}`}>
								Email
							</a>
						) : null}
					</div>
				) : null}

				{/* Keep existing Details button for events with links */}
				{event.link ? (
					<a
						className="btn btn-primary shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
						href={event.link}
						target="_blank"
						rel="noreferrer"
					>
						Details
					</a>
				) : null}
			</div>
		</article>
	);
}