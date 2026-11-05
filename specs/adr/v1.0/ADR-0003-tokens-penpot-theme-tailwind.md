# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 5 couleurs FM, les 2 couleurs dérivées de G2 (Q-A1, Q-A2), la couleur des liens de l'attribution (G3-1), les tailles de texte et les rayons. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-very-dark-magenta`, `--color-soft-pink`, `--color-dark-grayish-magenta`, `--color-light-grayish-magenta`, `--color-white` (valeurs `hsl()` du style-guide) |
| Dérivées G2 | `--color-paragraph` (`hsl(303, 10%, 47%)`, Q-A1), `--color-verified` (`hsl(333, 80%, 70%)`, Q-A2) |
| Attribution (G3-1) | `--color-link` (`hsl(228, 45%, 44%)`, couleur du starter) |
| League Spartan | `--font-sans` (chargement : ADR-0004) |
| Tailles de texte | `--text-title` (52 px, interligne 0,933), `--text-title-mobile` (37 px, interligne 0,865), `--text-lead` (18 px, interligne 1,389), `--text-name` (17 px), `--text-quote` (16 px, interligne 1,375) |
| Rayons | `--radius-card` (8) |

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans `index.html`, ni dans `src/style.css` hors des valeurs de tokens.
