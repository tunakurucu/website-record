# People's Power

## Setup

```bash
npm i
cp .env.example .env
npm run dev
```

## Build

```bash
npm run build && npm run preview
```

## API

The app calls:

```
GET /v1/brief?topic=...&city=...&state=...
```

on `VITE_API_BASE`. A built-in mock can serve data if no API is available. See `src/lib/api.ts`.