# Blessed Hair Studio

Official two-location website for Blessed Hair Studio in Gloucester City and Westville, New Jersey.

## Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Static export for Netlify

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

The production build is exported to `out/`.

## Netlify

The included `netlify.toml` runs `npm run build` and publishes `out/`. No Next.js runtime plugin is required.

## Business content

Locations, phones, booking URLs, services, navigation and portfolio content are centralized in `src/config/site.ts`.
