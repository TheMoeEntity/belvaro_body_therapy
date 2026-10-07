# Belvaro Body Therapy

Marketing site for Belvaro Body Therapy, a mobile massage practice. Built with
Next.js (App Router), TypeScript and Tailwind CSS v4 from the Stitch design
"Soma & Serenity".

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/site.ts`: business details (Instagram, WhatsApp, hours, deposit, location). Edit here first.
- `src/components/sections/`: one file per page section. Service types live in `services.tsx`, policies in `booking.tsx`.
- `src/app/globals.css`: design tokens (colours, type scale, spacing) from the Stitch design system.
- `public/images/`: photography (stock imagery from the Stitch design).
- `src/components/logo.tsx`: placeholder mark until the real logo file is supplied.

## Booking

There's no online booking or price list on the site by design. Clients book by
Instagram DM (preferred) or WhatsApp, and the price list is sent on request.
All booking buttons link to `site.instagram.dm` or `site.whatsapp.href`.

New icons must be added to `iconNames` in `src/components/icon.tsx`; the icon
font is subset to that list.
