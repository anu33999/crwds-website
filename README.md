# Cheyutha Rural Women's Development Society (CRWDS) — website design concept

A demo redesign prepared by **Kreatif Atelier** to pitch to CRWDS (crwds.1ngo.in).
React + TypeScript + Vite + Tailwind CSS v4. Uses the same colour system as the Agape concept.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5200
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## What's real vs. demo

- **From crwds.1ngo.in (confirm before launch):** history (1987, seven founders, Public Societies Act), vision and
  mission, 10 mandals, all programme descriptions, figures (30 women tailors, 50 youth, 40 mobile-repair trainees,
  30% water/energy savings, 350+ at the cultural programme), Mounika's case study, activity stories, board and team
  names, partners named, 80G/12A status (certificate links point to the PDFs on the current site), bank name/branch/
  masked account/IFSC as shown there, contact details, and the photos.
- **Demo / placeholder (labelled in the UI):** donation checkout, forms and newsletter (nothing is sent or stored),
  donation amounts and impact examples, cause progress bars, wish-list items and prices, annual report and other
  documents, expense breakdown, and policy text.

## Where to change things

- Content: `src/data/site.ts`
- Design tokens and button styles: `src/styles.css`
- Payment integration point: `src/lib/payments.ts`
- Photos: `public/images/`
