# Manvi Infratech – Interior Design Website (React + Vite + Tailwind)

## Run locally
```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```
Requires Node 18+.

## What to edit (almost everything is in `src/data/site.js`)
| Change | Where |
|---|---|
| Logo | Replace `src/assets/logo.png` (and `public/favicon.png`) |
| Phone / WhatsApp / email / address / hours | `company` in `src/data/site.js` – buttons appear automatically when filled |
| Google Map | `company.mapsEmbedUrl` (Google Maps > Share > Embed a map > copy the `src`) |
| Images | Put files in `public/images/`, then set e.g. `image: '/images/kitchen1.jpg'` in `hero`, `about`, `gallery` |
| Services | `services` array – add/remove rows (icons from lucide-react) |
| Gallery | `gallery` + `galleryCategories` |
| Reviews | `testimonials` array: `{ name, rating, text, source }` – real reviews only |
| Colors | `tailwind.config.js` → `colors` (navy/red come from the logo) |
| Fonts | `index.html` Google Fonts link + `tailwind.config.js` → `fontFamily` |
| Page title / description | `index.html` |

## Placeholders to replace
Phone, WhatsApp, email, address, hours, map embed, all images (hero, about, 9 gallery tiles), reviews, social links, About-section copy.
# Manvi-Infratech
