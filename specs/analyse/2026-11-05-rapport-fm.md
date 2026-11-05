# 2026-11-05 — Rapport FM : Social proof section

> SDL-FM 1.5.0 Phase 13. Solution : https://www.frontendmentor.io/solutions/social-proof-section-tailwind-v4-staggered-layout-and-semantic-quotes-WV--E9iokR (v1.0.0). Pas de rapport IA (aucun crédit ce mois-ci) ; vérifications automatiques gratuites : **1 remarque** (Accessibility 0, HTML 1, CSS 0, JavaScript 0).

| # | Remarque FM | Verdict | Correctif |
|---|---|---|---|
| R1 | HTML, accessibilité (erreur, 2 occurrences) : « "aria-label" cannot be used on this element » sur `<ul aria-label="Ratings">` et `<ul aria-label="Testimonials">` | ✅ Juste, et déjà écrit dans la méthode (Phase 6 : `aria-label` seulement sur un élément interactif ou un repère, sinon `aria-labelledby`) ; html-validate 11 en local l'accepte sur `<ul>`, l'outil de FM non | Un `h2` masqué « Ratings » / « Testimonials » nomme chaque liste par `aria-labelledby` ; test « Règles FM — aria-label » (rouge avant) |

## Suite donnée : v1.0.1 (2026-11-05)

- Test : commit `test` (rouge sur la v1.0.0) ; correctif : commit `fix(a11y)` ; 33 / 33 en local.
- Aucun changement visuel : pas de « Regenerate screenshot ».

## Regénération du rapport

| Date | Version relue par FM | Résultat |
|---|---|---|
| 2026-11-05 | v1.0.0 (soumission) | 1 remarque (R1) |
| 2026-11-05 | v1.0.1 | Publiée et déployée (accord de Koya), 33 / 33 en ligne ; « Regenerate report » (gratuit, sans rapport IA) : **0 remarque** (Accessibility 0, HTML 0, CSS 0, JavaScript 0), relu après rechargement |
| plus tard | v1.0.1 | Rapport IA avec un crédit ou Pro (étape F du plan) |
