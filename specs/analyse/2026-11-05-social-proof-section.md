# 2026-11-05 — Rapport d'exécution : Social proof section

> SDL-FM 1.5.0, Phases 7 et 8. Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `sp-preview`, `http://localhost:4196/social-proof-section/`), page affichée (`document.visibilityState` = `visible`).

## 1. Tests automatiques (Phase 7)

`npm test` : **31 réussis sur 31** (25 s).

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S6 (1440, 375, 768, 1023, 1024, 1280 ; 320 à 1440 sans défilement horizontal ; pied de page) ; E1 (fond déclaré) | ✅ 15 / 15 |
| Contenu | S7 à S10 (titre, notes, témoignages, 15 étoiles décoratives, 3 photos chargées, couleurs AA de G2) | ✅ 4 / 4 |
| Interactions | S11, S12 (clavier, liens) | ✅ 2 / 2 |
| Accessibilité | S13 : axe-core à 375 et 1440 px, aucune violation sérieuse ou critique | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S14 (W3C Nu), S15 (html-validate au réglage de FM), S16 (eslint), longueurs en rem ; fitness ADR-0003 et ADR-0004 | ✅ 6 / 6 |
| Visuel | S17, S18 | ✅ 2 / 2 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 800 | `desktop.jpg` | 3,26 % | 5,0 % | 3,46 % |
| Mobile 375 × 1530 | `mobile.jpg` | 5,54 % | 7,3 % (G3-2) | 6,32 % |

Contrôle rouge fait avant le code (Phase 4) : 25 échecs pour la bonne raison sur le starter, 2 tests de garde (W3C, eslint) ; fitness functions : 2 échecs attendus.

## 2. Parcours réel (Phase 8)

| Étape | 320 px | 375 px | 1024 px | 1440 px |
|---|---|---|---|---|
| Disposition | ✅ pas de défilement horizontal ; citations sans débordement | ✅ colonne centrée, page de 1531 px | ✅ même disposition resserrée : notes de 445 px, témoignages de 300 px, rien ne se chevauche | ✅ notes en (735, 145), (783, 217), (832, 289) ; témoignages en (165, 434), (545, 450), (925, 466) |
| Premier affichage | — | ✅ 18 images sur 18 chargées ; 3 fichiers de police seulement (League Spartan latin 400, 500, 700) | — | ✅ |
| Clavier, liens | — | — | — | ✅ (S11, S12 vérifiés aussi par les tests) |

Pas de prototype à comparer : la page n'a aucun élément interactif en dehors de l'attribution (maquette).

## 3. Écarts relevés et suites

| # | Écart | Suite |
|---|---|---|
| E1 | Même cause que pour le Results summary : sans fond déclaré, un navigateur en thème sombre peut montrer son propre fond sous la page | Corrigé : fond blanc déclaré sous les motifs ; test E1 (thème sombre émulé), rouge avant le correctif |

Constats de la construction (Phase 6), sans écart restant :
- Accroche mobile sur 329 px au lieu de 327 : sa 3e ligne mesure 328 px dans Chromium (règle de la Phase 6 : on cale la largeur du bloc, jamais l'espacement des lettres).
- `text-rendering: geometricPrecision` : largeurs de lettres non arrondies au pixel, lignes coupées comme sur l'image FM.
- Comparaisons visuelles avec `--disable-lcd-text` (texte lissé en gris, comme les images FM).
- Tablette (G3-5) : cartes de 206 px espacées de 20 px dès 768 px.

## 4. Verdict

Conforme à la spec et à la maquette validée (G3). Prêt pour la Phase 9 (README).
