# Vanja Fitness — sajt

Next.js (App Router) + TypeScript + Tailwind CSS. Dizajn po uzoru na Harmoni template, prepravljen za Vanja Fitness (studio za žene, Sremska Mitrovica). Bez korpe i bez signup-a — svi CTA vode na Instagram DM za besplatnu probu.

## Pokretanje (lokalno)

```bash
# 1. instaliraj zavisnosti (preporuka: pnpm; radi i npm)
pnpm install        # ili: npm install

# 2. dev server (otvori http://localhost:3000)
pnpm dev            # ili: npm run dev

# 3. produkcioni build
pnpm build && pnpm start
```

## Gde se menja sadržaj

- **Linkovi, telefon, Instagram, navigacija** → `lib/site.ts`
- **Tekst sekcija** → odgovarajući fajl u `components/` (npr. cene u `Pricing.tsx`, pitanja u `Faq.tsx`)
- **Boje i fontovi** → `tailwind.config.ts` (paleta: wine / gold / cream)
- **Redosled sekcija** → `app/page.tsx`

## Slike

Hero i "O nama" trenutno koriste placeholder blokove. Zameni ih pravim
fotografijama iz studija:

1. Ubaci slike u `public/` (npr. `public/hero.jpg`, `public/vanja.jpg`).
2. U `components/Hero.tsx` i `components/About.tsx` zameni placeholder `div`
   sa `<Image src="/hero.jpg" ... />` (`import Image from "next/image"`).

## Struktura sekcija (kao Harmoni)

Hero + statistika → traka → Treninzi (3 kartice) → O nama → Benefiti →
Raspored → Članarine → Utisci → Pitanja (FAQ) → CTA → Footer.

## Hosting

Najlakše: poveži folder sa **Vercel** (besplatno za ovakav sajt) ili **Netlify**.
Oba automatski rade `next build`. Možeš dodati i svoj domen.
