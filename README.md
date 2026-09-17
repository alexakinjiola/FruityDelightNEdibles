# Fruity Delights N Edibles — Website

Official website for **Fruity Delights & Edibles**, built with React, Vite, Tailwind CSS v4
and Framer Motion.

## What's inside

- **React Router** — real multi-page navigation: Home, About, Menu, Gallery, Contact
- **Framer Motion** — animated hero, scroll-triggered reveals, page transitions, animated
  mobile nav, animated menu detail modal, animated FAQ accordion, animated photo lightbox
- **Clickable menu** — tap any menu item to open a detail modal (description, highlights,
  flavour options, "best for") with a dedicated **"Order on WhatsApp"** button that opens
  WhatsApp with a pre-filled message naming that specific item
- **Quick Order tool** (Contact page) — tick items, add your name/note, and it builds a
  WhatsApp message for you automatically
- **Fully responsive** — designed mobile-first, tested at phone/tablet/desktop widths

## Getting started

```bash
npm install
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build     # production build → outputs to /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/          brand logo + photography
  components/      Navbar, Footer, MenuCard, MenuModal, QuickOrderForm, FaqAccordion, etc.
  context/         MenuModalContext — shared state for the menu detail modal
  data/            menu.js — all site copy: menu items, values, FAQs, locations
  pages/           Home, About, Menu, Gallery, Contact, NotFound
  App.jsx          routes + shared layout
  main.jsx         entry point
```

## Editing content

Almost everything text-based lives in **`src/data/menu.js`** — menu items, flavours,
descriptions, core values, health benefits, locations, and FAQs. Update it there and it
flows through the whole site automatically (menu cards, modal details, WhatsApp messages).

The WhatsApp number lives in the same file as `WHATSAPP_NUMBER` — update it in one place to
change it everywhere on the site.

## Deploying

`npm run build` produces a static `/dist` folder that can be deployed to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc). Since this is a single-page app with client-side
routing, make sure your host redirects all unmatched routes to `/index.html`.

---
Built for Fruity Delights N Edibles — "Bringing Relish to Your Tastebuds."
