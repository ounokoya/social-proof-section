# ADR-0004 : League Spartan par Fontsource

## Statut
Accepté (2026-11-05) — même situation et même choix que REST Countries (ADR-0004 du dépôt `rest-countries-api`, choix de Koya : Fontsource plutôt que le lien Google Fonts).

## Contexte
Le starter ne fournit **aucun fichier de police** ; le guide de style renvoie à Google Fonts (League Spartan 400, 500, 700). La maquette a été calée avec League Spartan de Google Fonts ; les tests visuels comparent des pixels (S17, S18) : la police doit être là au moment des captures.

## Options
| Option | Pour | Contre |
|---|---|---|
| **`@fontsource/league-spartan` (choisie)** | Les fichiers de Google Fonts, en woff2 découpés par alphabet, servis avec le site ; aucun appel à un tiers ; tests indépendants du réseau | Une dépendance de plus |
| Lien Google Fonts | Ce que suggère le guide ; aucune dépendance | Dépend du réseau et de Google (vie privée, captures des tests) |

## Décision
- `@fontsource/league-spartan` en dépendance d'exécution ; seules les graisses 400, 500 et 700 sont importées dans `src/style.css`.
- `font-display: swap` (valeur du paquet).

## Conséquences
- Aucun appel à un serveur de polices.
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; les graisses 400, 500 et 700 se chargent.
