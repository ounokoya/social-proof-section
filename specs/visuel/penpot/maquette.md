# Maquette Penpot — Social proof section

> SDL-FM 1.5.0 Phase 3 (remise à niveau, lot 1). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « Social proof ». **Validée (G3, 2026-11-05)** avec les propositions : attribution FM en pied de page, seuils 5 % (desktop) et 7,3 % (mobile), photos sans contour, « Rated 5 Stars in Reviews » centré, tablette en colonne de 540 px.
> Décisions G2 appliquées : paragraphe `#846C83` (Q-A1), « Verified Buyer » `#F075AC` (Q-A2), étoiles décoratives (Q-A3), sémantique h1, listes, figure + blockquote + figcaption (Q-B1, noms des calques), disposition mobile centrée jusqu'à 1023 px (Q-B2).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, ses photos (adresse interne de Penpot) sont remplacées par les fichiers du starter (`media.json`), puis il est rendu dans Chromium avec **League Spartan** chargée depuis Google Fonts (400, 500, 700).

Deux particularités de Penpot avec cette police, mesurées sur les rendus :
- chaque ligne est exportée avec une largeur imposée (`textLength`) mesurée par Penpot, environ 2 % plus étroite que dans Chromium : un rendu sans cette largeur ne réduit pas l'écart (6,33 % au lieu de 6,32 % en mobile), on garde donc l'export tel quel ;
- Penpot compte l'espace de fin de ligne : il coupe un mot plus tôt et décale les lignes centrées d'une demi-espace vers la gauche. Les textes centrés du mobile et de la tablette ont donc leurs **retours à la ligne écrits en dur**, ceux de l'image FM ; le paragraphe desktop aussi. Le site, lui, laissera le navigateur couper.

## Bibliothèque

### Couleurs (groupe « Social proof »)

| Groupe | Nom | Valeur |
|---|---|---|
| FM | Very Dark Magenta (titre, notes, fond des témoignages) | `#502050` |
| FM | Soft Pink | `#EE68A4` |
| FM | Dark Grayish Magenta | `#937B92` |
| FM | Light Grayish Magenta (fond des notes) | `#F7F2F7` |
| FM | White | `#FFFFFF` |
| Dérivées G2 | Paragraphe AA (Q-A1) | `#846C83`, 4,7:1 sur blanc |
| Dérivées G2 | Verified Buyer AA (Q-A2) | `#F075AC`, 4,7:1 sur Very Dark Magenta |

Étoiles : `icon-star.svg` du starter (17 × 16, orange `#EF9546`), décoratives (Q-A3) ; le texte « Rated 5 Stars in … » porte l'information.

### Typographie (League Spartan)

| Usage | Desktop | Mobile et tablette |
|---|---|---|
| Titre (h1) | 700, 52 px, interligne 0,933, largeur 360 | 700, 37 px, interligne 0,865, centré |
| Paragraphe | 400, 18 px, interligne 1,389 | idem, centré |
| Texte des notes | 700, 17 px | idem, centré |
| Nom | 700, 17 px | idem |
| Verified Buyer | 400, 17 px | idem |
| Citation | 500, 16 px, interligne 1,375 | idem |
| Attribution | 400, 11 px | idem |

### Mesures (px)

| Élément | Desktop 1440 × 800 | Mobile 375 × 1530 |
|---|---|---|
| Motifs de fond | haut 584 × 362 à (0, 0) ; bas 1085 × 673 à (355, 127) | haut 374 × 232 à (0, 0) ; bas 375 × 503 à (0, 1027) |
| Titre | x 165, haut des capitales 118 | largeur 335 à x 20, capitales 81 |
| Paragraphe | x 165, largeur 430, capitales 292 | largeur 335 à x 20, capitales 205 |
| Notes | 445 × 56, rayon 8, à (735, 145), (783, 217), (832, 289) ; étoiles à (32, 21), tous les 25 ; texte à x 181 | 327 × 78 à x 24, y 340, 434, 528 ; étoiles centrées à y 16 ; texte centré |
| Témoignages | 350 × 234, rayon 8, à x 165 + 380 i, y 434 + 16 i | 327 × 248 à x 24, y 655 + 264 i |
| Dans un témoignage | photo 40 px à (32, 40) ; nom à x 95 (capitales 45) ; Verified Buyer (capitales 65) ; citation à x 32, largeur 286 (capitales 112) | idem, Verified Buyer à 63, citation largeur 263 |

Tablette 768 × 1320 (proposition Q-B2) : disposition mobile dans une colonne de 540 px centrée (x 114) ; titre et paragraphe sur 2 lignes ; notes 540 × 78 ; témoignages 540 × 206, tous les 226.

## Composants (`composants.png`)

| Composant | Variantes et états |
|---|---|
| Note | Desktop (étoiles à gauche) · Mobile (étoiles au-dessus, centrées) |
| Témoignage | Desktop · Mobile |
| Attribution (pied de page, absente des images FM) | Normal (11 px, liens `#3E52A3` soulignés, 7,1:1) · Survol (soulignement retiré) · Focus clavier (contour 2 px `#3E52A3` décalé de 2 px) |

Rien d'autre n'est interactif : seuls les liens de l'attribution ont des états.

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · Social proof | `desktop.jpg` | 3,46 % | 5,0 % |
| Mobile · Social proof | `mobile.jpg` | 6,32 % | 7,3 % |

Notes :
- Toutes les lignes de texte, les notes et les témoignages sont à ± 1 px de l'image (mesuré ligne par ligne).
- L'écart restant vient du dessin des lettres : sur une zone de texte seule, il est de 12 à 22 % en desktop comme en mobile (lettres fines, image JPG, autre version de League Spartan). Le mobile, plus dense en texte, monte donc à 6,3 %.
- Dans l'image FM, « Rated 5 Stars in Reviews » (mobile) est décalé de 4 px à droite du centre : la maquette le centre, comme le fera le site.
- Écran sans image FM : **Tablette · Social proof (proposition Q-B2)**.

## Prototype

Pas de parcours : la page n'a aucun élément interactif en dehors de l'attribution, dont les états sont montrés par le composant.

## Fichiers

- `desktop.png`, `mobile.png`, `tablette.png` : rendus des 3 écrans.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille), pour les 2 écrans calibrés.
- `composants.png` : les composants et leurs états (échelle 2).
