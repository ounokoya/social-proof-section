# ADR-0005 : Étoiles et photos en `img` décoratives, motifs en fond CSS ; pas de JavaScript

## Statut
Accepté (2026-11-05) — application des décisions G2 (Q-A3) et G3 (G3-3).

## Contexte
Les étoiles (15) et les photos (3) sont décoratives : le texte « Rated 5 Stars in … » et le nom du client portent l'information (A2, A3). Les 4 motifs (haut et bas, desktop et mobile) n'ont aucun sens. La page est statique.

## Options
| Élément | Choisie | Écartée |
|---|---|---|
| Étoiles | `img` de `icon-star.svg`, `alt=""`, 17 × 16 déclarés | SVG en ligne × 15 (HTML lourd) ; fond CSS répété (les étoiles ne se comptent plus, S8) |
| Photos | `img`, `alt=""`, 40 × 40 déclarés | `background-image` (pas de chargement vérifiable, S9) |
| Motifs | `background-image` sur la page, changés à 1024 px | `img` décoratives (balisage sans contenu) ; `picture` (inutile pour un décor) |

## Décision
- Étoiles et photos : `img` des fichiers du starter, `alt=""`, `width` et `height` déclarés ; photos rondes, sans contour (G3-3).
- Motifs : deux images de fond CSS sur la page, en haut à gauche et en bas (à droite dès 1024 px), versions mobile puis desktop dès 1024 px.
- `src/main.js` n'importe que la feuille de style.

## Conséquences
- Les lecteurs d'écran ne lisent que le texte ; aucun décalage de mise en page au chargement des images.
