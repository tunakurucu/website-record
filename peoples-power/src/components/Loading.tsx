export default function Loading({ label = "Loading" }: { label?: string }) {
return (
<div className="space-y-3" aria-busy>
<div className="h-6 w-48 animate-pulse rounded bg-gray-200"></div>
<div className="h-24 w-full animate-pulse rounded bg-gray-200"></div>
<div className="h-6 w-64 animate-pulse rounded bg-gray-200"></div>
<div className="text-sm text-gray-600">{label}...</div>
</div>
);
}