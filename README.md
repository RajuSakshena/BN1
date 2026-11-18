# Bharatnomy — Concept A / Editorial Data Atlas

A light editorial research website with an interactive district-level data observatory.

## Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Recharts
- Lucide React
- React Router

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Included sections
- Overview / home
- Research programme
- Interactive data explorer
- Dataset library with CSV + README downloads
- About
- Editorial standards
- Careers

## Two interactive demonstration datasets
1. `BN-CLM-001` — District Heat Readiness Index
2. `BN-ENR-002` — District Renewable Capacity Snapshot

Both datasets have Map, Chart and Table views, a district selector, a search field in Table view, and downloadable CSV and README files.

## Data and map disclaimer
All numbers in both datasets are synthetic UI demonstration values. They are not official statistics, measurements, research results or published Bharatnomy findings. The Maharashtra map is schematic and is not a geographic boundary file. Replace the sample data and schematic map with verified source data and GIS boundaries before public release.

## Branding
The header and footer use a replaceable BN monogram placeholder. Replace `BrandMark` in `src/components/Brand.tsx` and `public/brand/bn-mark.svg` when the final Bharatnomy logo is available.

## Notes
Google Fonts are loaded from fonts.googleapis.com; local system fallbacks are defined. No external image API or remote image dependency is required for the UI visuals.
