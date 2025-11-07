export const fmtDateTime = (iso?: string) =>
iso ? new Date(iso).toLocaleString() : "";