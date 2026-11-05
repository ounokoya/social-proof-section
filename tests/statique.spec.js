import { test, expect } from '@playwright/test'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { HtmlValidate } from 'html-validate'
import { ESLint } from 'eslint'

// Spec §7 — S14 à S16 : validateur W3C Nu et règles des vérifications automatiques de FM ;
// fitness functions des ADR-0003 et ADR-0004

const root = (path) => new URL(`../${path}`, import.meta.url)
const vnu = root('node_modules/vnu-jar/build/dist/vnu.jar').pathname
const COLOR = /#[0-9a-f]{3,8}\b|\brgba?\(|\bhsla?\(/i

test('S14 — le HTML servi passe le validateur W3C Nu sans erreur', async ({ request }) => {
  const html = await (await request.get('./')).text()
  let output = ''
  try {
    execFileSync('java', ['-jar', vnu, '--errors-only', '--format', 'text', '-'], { input: html, encoding: 'utf8', stdio: 'pipe' })
  } catch (error) {
    output = `${error.stdout}${error.stderr}`
  }
  expect(output).toBe('')
})

// Préréglage recommandé, sans les règles de style que FM n'applique pas ; aucune exception (les règles de FM s'imposent)
test('S15 — Règles FM : html-validate sans erreur sur le HTML servi', async ({ request }) => {
  const html = await (await request.get('./')).text()
  const validator = new HtmlValidate({
    extends: ['html-validate:recommended'],
    rules: { 'doctype-style': 'off', 'void-style': 'off' },
  })
  const report = await validator.validateString(html)
  const errors = report.results.flatMap((r) => r.messages).map((m) => `${m.line}:${m.column} ${m.ruleId} — ${m.message}`)
  expect(errors).toEqual([])
})

// FM passe tout le JavaScript du dépôt (code et tests) à eslint : préréglage recommandé (eslint.config.js)
test('S16 — Règles FM : eslint sans erreur dans le JavaScript du dépôt', async () => {
  const eslint = new ESLint({ cwd: new URL('..', import.meta.url).pathname })
  const results = await eslint.lintFiles(['src', 'tests', '*.js'])
  const errors = results.flatMap((r) => r.messages.map((m) => `${r.filePath.split('/').slice(-2).join('/')}:${m.line} ${m.ruleId} — ${m.message}`))
  expect(errors).toEqual([])
})

test('ADR-0003 — aucune couleur écrite en dur hors des tokens', () => {
  const sources = {
    'index.html': readFileSync(root('index.html'), 'utf8'),
    // les tokens sont des propriétés personnalisées (--…) : seules leurs valeurs portent des couleurs
    'src/style.css (hors tokens)': readFileSync(root('src/style.css'), 'utf8').replace(/--[\w-]+\s*:[^;]+;/g, ''),
  }
  expect(Object.entries(sources).filter(([, text]) => COLOR.test(text)).map(([file]) => file)).toEqual([])
})

test('ADR-0004 — rien n\'est chargé hors du domaine ; League Spartan 400, 500 et 700 se chargent', async ({ page, baseURL }) => {
  const outside = []
  page.on('request', (r) => { if (new URL(r.url()).origin !== new URL(baseURL).origin) outside.push(r.url()) })
  await page.goto('./')
  // load() télécharge la graisse même si aucun texte ne l'utilise encore ; [] si la police n'est pas déclarée
  const weights = await page.evaluate(async () => {
    const found = []
    for (const w of ['400', '500', '700']) if ((await document.fonts.load(`${w} 16px "League Spartan"`)).length) found.push(w)
    return found
  })
  expect(weights).toEqual(['400', '500', '700'])
  expect(outside).toEqual([])
})

// Règle FM vue sur les solutions précédentes (SDL-FM Phase 6) : les longueurs écrites à la main sont en rem
test('Règles FM — aucune longueur en px écrite à la main (src/style.css, valeurs arbitraires du HTML)', () => {
  const css = readFileSync(root('src/style.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')
  const html = readFileSync(root('index.html'), 'utf8')
  const arbitrary = [...html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter((c) => /\[[^\]]*\d+(\.\d+)?px/.test(c))
  expect(css.match(/\b\d+(\.\d+)?px\b/g) ?? []).toEqual([])
  expect(arbitrary).toEqual([])
})
