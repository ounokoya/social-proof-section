# Spec — Social proof section

> SDL-FM 1.5.0 Phase 4 (remise à niveau, lot 1). Sources : analyse validée (G2) `specs/visuel/social-proof-section-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-social-proof-section.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

Une section de preuve sociale pour une boutique : un titre et une accroche, trois notes de 5 étoiles obtenues sur des sites d'avis, puis trois témoignages de clients. La page est statique : seuls les liens du pied de page sont interactifs.

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Titre | « 10,000+ of our users love our products. » | `h1` |
| Accroche | « We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services. » | `p` |
| Notes | 3 éléments : 5 étoiles décoratives (`icon-star.svg`) + « Rated 5 Stars in Reviews », « … in Report Guru », « … in BestTech » | `ul` nommée « Ratings », un `li` par note (Q-B1) |
| Témoignages | 3 éléments : photo (`image-colton.jpg`, `image-irene.jpg`, `image-anne.jpg`), nom, « Verified Buyer », citation (texte de l'image FM, guillemets compris) | `ul` nommée « Testimonials » ; chaque `li` contient une `figure` : `blockquote` pour la citation, `figcaption` pour la photo, le nom et « Verified Buyer » (Q-B1) |
| Motifs de fond | `bg-pattern-top-*`, `bg-pattern-bottom-*` (desktop et mobile) | décoratifs |
| Pied de page (G3-1) | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

Citations :
- Colton Smith : « “ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ” »
- Irene Roberts : « “ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.” »
- Anne Wallace : « “ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ” »

La page a pour titre « Frontend Mentor | Social proof section » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`). Valeurs dérivées retenues (G2) :

| Token | Valeur | Usage |
|---|---|---|
| Paragraphe | `hsl(303, 10%, 47%)` (`#846C83`) | accroche (Q-A1, 4,7:1) |
| Verified Buyer | `hsl(333, 80%, 70%)` (`#F075AC`) | « Verified Buyer » (Q-A2, 4,7:1) |
| Lien de l'attribution | `hsl(228, 45%, 44%)` (`#3E52A3`) | couleur du starter (G3-1) |

## 4. Responsive

| Largeur | Disposition |
|---|---|
| < 1024 px (mobile et tablette, Q-B2) | Une colonne centrée, 540 px au plus, marges de 24 px : titre et accroche centrés, notes empilées (étoiles au-dessus du texte, centrées), témoignages empilés. Motifs en haut à gauche et en bas. |
| ≥ 1024 px (desktop) | Titre et accroche à gauche, notes à droite en escalier ; dessous, les 3 témoignages côte à côte, en escalier. Motifs en haut à gauche et en bas à droite. Entre 1024 et 1439 px, la même disposition se resserre. |

Positions de la maquette, à 1 px près :

| Élément | 1440 × 800 | 375 × 1530 | 768 (proposition) |
|---|---|---|---|
| Titre | x 165 | — | — |
| Notes | 445 × 56 en (735, 145), (783, 217), (832, 289) | 327 × 78 à x 24, y 340, 434, 528 | 540 × 78 à x 114, y 260, 354, 448 |
| Témoignages | 350 × 234 en (165, 434), (545, 450), (925, 466) | 327 × 248 à x 24, y 655, 919, 1183 | 540 × 206 à x 114, y 575, 801, 1027 |

Le pied de page ne déplace aucun de ces éléments : centré sous les témoignages.

La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal ni chevauchement.

## 5. États et interactions

| Élément | Normal | Survol | Focus clavier |
|---|---|---|---|
| Liens du pied de page | soulignés, `#3E52A3` | soulignement retiré | contour 2 px `#3E52A3`, décalé de 2 px |

Rien d'autre n'est interactif ; la page n'a aucune animation.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Un seul `h1` : le titre. |
| A2 | Les étoiles sont décoratives (Q-A3) : ignorées par les lecteurs d'écran ; le texte « Rated 5 Stars in … » porte l'information. |
| A3 | Les photos sont décoratives (`alt=""`) : le nom est écrit à côté. |
| A4 | Chaque témoignage est une figure : la citation (`blockquote`) et sa légende (nom, « Verified Buyer ») sont reliées. |
| A5 | Contraste AA (4,5:1) pour tous les textes, avec les couleurs dérivées de G2 (§3). |
| A6 | Focus visible sur les liens : contour de 2 px au moins. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Titre | heading (niveau 1) | « 10,000+ of our users love our products. » |
| Notes | list | « Ratings » ; un `listitem` par note |
| Témoignages | list | « Testimonials » ; un `listitem` par témoignage, qui contient une figure |
| Témoignage | figure | commence par le nom du client (ex. « Colton Smith ») |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 800   Then titre à x 165 ; notes 445 × 56 en (735, 145), (783, 217), (832, 289) ;
                       témoignages 350 × 234 en (165, 434), (545, 450), (925, 466)
S2  Given 375 × 1530   Then notes 327 × 78 à x 24, y 340, 434, 528 ; témoignages 327 × 248 à x 24, y 655, 919, 1183 ;
                       titre et accroche centrés
S3  Given 768          Then notes 540 × 78 à x 114, y 260, 354, 448 ; témoignages 540 × 206 à x 114, y 575, 801, 1027
S4  Given 1023 px      Then disposition en colonne (témoignages empilés) ; given 1024 et 1280 px  Then les 3 témoignages
                       côte à côte, sans chevauchement entre le titre, l'accroche, les notes et les témoignages
S5  Given 320, 767, 768, 1023, 1024, 1440 px  Then pas de défilement horizontal
S6  Given 1440 × 800 et 375 × 1530  Then le pied de page est sous les témoignages, centré

Contenu
S7  Given la page  Then le titre (h1), l'accroche, les 3 notes et les 3 témoignages (nom, « Verified Buyer », citation) de §2
S8  Given la liste « Ratings »  Then 15 étoiles, aucune exposée aux lecteurs d'écran
S9  Given la liste « Testimonials »  Then 3 photos chargées, aucune exposée aux lecteurs d'écran ;
                       chaque figure est nommée par son client
S10 Given la page  Then l'accroche est en #846C83 et « Verified Buyer » en #F075AC (couleurs AA de G2)

Interactions
S11 Given la page  When j'appuie sur Tab deux fois  Then « Frontend Mentor » puis « Koya Esdras » reçoivent le focus,
                   chacun avec un contour de 2 px au moins
S12 Given un lien du pied de page  When je le survole  Then son soulignement disparaît

Accessibilité et règles FM
S13 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S14 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S15 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S16 Given le JavaScript du dépôt (code, tests, configuration)  Then eslint au réglage de FM : aucune erreur

Visuel (seuils calibrés en Phase 3, G3-2)
S17 1440 × 800 vs desktop.jpg ≤ 5,0 %
S18 375 × 1530 vs mobile.jpg ≤ 7,3 %
```
