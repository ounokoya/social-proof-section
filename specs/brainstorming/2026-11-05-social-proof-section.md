# 2026-11-05 — Brainstorming : Social proof section

> SDL-FM 1.5.0, Pré-dev 1 et 2. Challenge Newbie gratuit, **commencé sur FM et pas encore soumis** (+10 points à la soumission). Il fait partie du lot 1 de la remise à niveau du profil.

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape C).
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3) par lot, puis donne son accord avant la publication et la soumission.
- **Méthode :** SDL-FM 1.5.0 complète.
- **Prérequis :** fichier Penpot « FM Newbie », une page par challenge (choix de Koya).

## Import (Phase 0)

- Starter gratuit : archive GitHub publique `frontendmentorio/social-proof-section (master)`, celle que télécharge le bouton « Download starter » de FM. Le fichier Figma n'a pas été pris.
- Le starter est copié tel quel ; `AGENTS.md` et `CLAUDE.md` sont rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM).

## Analyse validée (G2, 2026-11-05)

Koya : « Je valide (G2) » pour le lot 1. Analyse : `specs/visuel/social-proof-section-analyse.png`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| Q-A1 | Paragraphe à 3,83:1 | hsl(303, 10%, 47%), 4,7:1 |
| Q-A2 | « Verified Buyer » à 4,30:1 | hsl(333, 80%, 70%), 4,7:1 |
| Q-A3 | Étoiles à 2,65:1 | Décoratives (aria-hidden), le texte porte l'information |
| Q-B1 | Sémantique | h1, deux listes, témoignages en figure + blockquote + figcaption |
| Q-B2 | Pas de tablette, desktop en 1110 px | Disposition mobile centrée (540 px max) jusqu'à 1023 px, desktop fluide dès 1024 px |

## Maquette validée (G3, 2026-11-05)

Koya : « Je valide (G3) » pour le lot 1. Maquette : `specs/visuel/penpot/maquette.md`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| G3-1 | Attribution FM (absente des images) | Gardée en pied de page : 11 px, liens `#3E52A3` soulignés ; survol : soulignement retiré ; focus : contour 2 px `#3E52A3` décalé de 2 px |
| G3-2 | Seuils visuels | Desktop 5 % ; mobile 7,3 % (écart de 6,32 % dû au dessin des lettres fines) |
| G3-3 | Photos | Sans contour, comme l'image FM |
| G3-4 | Note « Reviews » (mobile) | Centrée, comme les deux autres (l'image FM la décale de 4 px) |
| G3-5 | Tablette (Q-B2) | Disposition mobile dans une colonne de 540 px centrée |
