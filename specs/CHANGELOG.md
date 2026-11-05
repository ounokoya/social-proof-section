# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [1.0.1] — 2026-11-05

Correctif issu des vérifications automatiques de Frontend Mentor (`specs/analyse/2026-11-05-rapport-fm.md`).

### Fixed
- Les listes « Ratings » et « Testimonials » sont nommées par un titre `h2` masqué (`aria-labelledby`) au lieu d'`aria-label`, refusé sur `<ul>` (R1).
- Test de garde « Règles FM — aria-label » ; test « Règles FM — CSS » (vert).

## [1.0.0] — 2026-11-05

Première version (SDL-FM 1.5.0, remise à niveau du profil, lot 1).

### Added
- Titre, accroche, 3 notes de 5 étoiles décoratives (Q-A3), 3 témoignages en figure + blockquote + figcaption (Q-B1), photos décoratives.
- Colonne centrée de 540 px au plus jusqu'à 1023 px (Q-B2, tablette G3-5) ; disposition desktop en escalier dès 1024 px, resserrée jusqu'à 1024 px (ADR-0006) ; motifs de fond mobile et desktop.
- League Spartan servie avec le site par Fontsource (ADR-0004).
- Couleurs AA pour l'accroche et « Verified Buyer » (Q-A1, Q-A2) ; liens de l'attribution soulignés sauf au survol, contour de focus (G3-1).
- Tests : 18 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (3,26 % ; 5,54 % pour un seuil de 7,3 %, G3-2).

### Fixed
- Fond de page blanc déclaré sous les motifs (E1, Phase 8).
