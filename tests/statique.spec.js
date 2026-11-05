import { test, expect } from '@playwright/test'
import { execFileSync } from 'node:child_process'
import { HtmlValidate } from 'html-validate'
import { ESLint } from 'eslint'

// Spec §7 — S14 à S16 : validateur W3C Nu et règles des vérifications automatiques de FM

const root = (path) => new URL(`../${path}`, import.meta.url)
const vnu = root('node_modules/vnu-jar/build/dist/vnu.jar').pathname

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
