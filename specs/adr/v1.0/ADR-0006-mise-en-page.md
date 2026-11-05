# ADR-0006 : Colonne centrée jusqu'à 1023 px, grille desktop en escalier

## Statut
Accepté (2026-11-05) — application des décisions G2 (Q-B2) et G3 (G3-5).

## Contexte
En mobile et tablette, tout est empilé dans une colonne de 540 px au plus (S2, S3). En desktop, le titre et l'accroche sont à gauche, les notes à droite décalées en escalier (48 px de plus vers la droite à chaque note), les témoignages côte à côte décalés de 16 px vers le bas à chaque carte (S1). Entre 1024 et 1439 px, la même disposition doit se resserrer sans chevauchement (S4).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Flux en colonne puis grille dès 1024 px ; escaliers par marges (notes) et décalages verticaux (témoignages) (choisie)** | Une seule structure HTML ; l'ordre de lecture reste celui du texte ; les escaliers ne prennent pas de place en plus dans la grille | Les décalages sont des valeurs de la maquette, à garder en tokens |
| Positions absolues | Pixel exact à 1440 | Casse entre 1024 et 1439 px ; chevauchements |

## Décision
- `main` : largeur maximale de 1110 px (desktop) ou 540 px (colonne), centré, marges de 24 px.
- Dès 1024 px : une grille à 2 colonnes pour le haut (titre et accroche ; notes), puis une rangée de 3 témoignages de largeur égale.
- Escaliers : les notes 2 et 3 sont poussées de 48 et 97 px vers la droite (largeur réduite d'autant si la place manque) ; les témoignages 2 et 3 descendent de 16 et 32 px.
- Le pied de page suit les témoignages, centré.

## Conséquences
- À 1440 × 800, positions de la maquette (S1) ; à 1024 px, les mêmes blocs se resserrent (S4).
