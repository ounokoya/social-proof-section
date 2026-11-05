# Soumission Frontend Mentor

> SDL-FM 1.5.0 Phase 13. Textes préparés pour le formulaire « Submit solution » du challenge. La soumission est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi.

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | Social proof section: Tailwind v4 staggered layout & semantic quotes (68) |
| Repository URL | https://github.com/ounokoya/social-proof-section |
| Live site URL | https://ounokoya.github.io/social-proof-section/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |

Challenge Newbie : +10 points. Pas de crédit de rapport IA ce mois-ci : les vérifications automatiques gratuites suffisent pour viser 0 remarque.

## What are you most proud of, and what would you do differently next time?

I'm most proud of the staggered desktop layout built without absolute positioning: the ratings move right with margins and the testimonials move down with offsets, so the reading order stays the text order and the same layout tightens between 1024 and 1440 px without overlaps (a test checks every pair of blocks). Each testimonial is a `figure` with its `blockquote` and `figcaption`, and the 31 Playwright tests pass on the live site.

Next time, I'd measure the design's lines in the browser before setting any widths: the mobile paragraph wrapped one word early because its third line is 328 px wide in Chromium for a 327 px column.

## What challenges did you encounter, and how did you overcome them?

- **Line breaks**: I widened the mobile paragraph by 1 px on each side instead of touching letter spacing, and `text-rendering: geometricPrecision` keeps glyph widths unrounded, so the lines break where the design breaks them.
- **Contrast**: the paragraph (3.83:1) and "Verified Buyer" (4.30:1) were slightly too light; `hsl(303, 10%, 47%)` and `hsl(333, 80%, 70%)` reach 4.7:1 with nearly the same colours.
- **Decorative images**: the stars and the photos have `alt=""`, since "Rated 5 Stars in …" and the customer's name carry the information.

## What specific areas of your project would you like help with?

1. Are `figure`, `blockquote` and `figcaption` the right markup for these testimonials, or would you use something else?
2. The two lists are named "Ratings" and "Testimonials" with `aria-label`, as there is no visible heading for them. Is that helpful for screen-reader users?
3. The staggered offsets are fixed values from the design (48 and 97 px, 16 and 32 px). Would you scale them between 1024 and 1440 px?
