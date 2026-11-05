import { test, expect } from '@playwright/test'
import { open, title, intro, ratings, testimonials, footer, box, near, overlap, textBox } from './helpers.js'

// Spec §4 — S1 à S6 (positions de la maquette Penpot, à 1 px près)

async function boxes(locator, count) {
  await expect(locator).toHaveCount(count)
  const out = []
  for (let i = 0; i < count; i++) out.push(await box(locator.nth(i)))
  return out
}

test('S1 — 1440 × 800 : titre à gauche, notes en escalier, témoignages côte à côte', async ({ page }) => {
  await open(page, 1440, 800)

  near(await box(title(page)), { x: 165 }, 'titre')
  const notes = await boxes(ratings(page), 3)
  for (const [i, [x, y]] of [[735, 145], [783, 217], [832, 289]].entries()) near(notes[i], { x, y, width: 445, height: 56 }, `note ${i + 1}`)
  const cards = await boxes(testimonials(page), 3)
  for (const [i, [x, y]] of [[165, 434], [545, 450], [925, 466]].entries()) near(cards[i], { x, y, width: 350, height: 234 }, `témoignage ${i + 1}`)
})

test('S2 — 375 × 1530 : une colonne, titre et accroche centrés', async ({ page }) => {
  await open(page, 375, 1530)

  const notes = await boxes(ratings(page), 3)
  for (const [i, y] of [340, 434, 528].entries()) near(notes[i], { x: 24, y, width: 327, height: 78 }, `note ${i + 1}`)
  const cards = await boxes(testimonials(page), 3)
  for (const [i, y] of [655, 919, 1183].entries()) near(cards[i], { x: 24, y, width: 327, height: 248 }, `témoignage ${i + 1}`)
  for (const [label, el] of [['titre', title(page)], ['accroche', intro(page)]]) {
    const t = await textBox(el)
    expect(Math.abs((t.left + t.right) / 2 - 187.5), `${label} centré`).toBeLessThanOrEqual(2)
  }
})

test('S3 — 768 : colonne de 540 px centrée (proposition Q-B2)', async ({ page }) => {
  await open(page, 768, 1320)

  const notes = await boxes(ratings(page), 3)
  for (const [i, y] of [260, 354, 448].entries()) near(notes[i], { x: 114, y, width: 540, height: 78 }, `note ${i + 1}`)
  const cards = await boxes(testimonials(page), 3)
  for (const [i, y] of [575, 801, 1027].entries()) near(cards[i], { x: 114, y, width: 540, height: 206 }, `témoignage ${i + 1}`)
})

test('S4 — 1023 px : témoignages empilés', async ({ page }) => {
  await open(page, 1023, 900)
  const cards = await boxes(testimonials(page), 3)
  expect(cards[1].y).toBeGreaterThanOrEqual(cards[0].y + cards[0].height)
  expect(cards[2].y).toBeGreaterThanOrEqual(cards[1].y + cards[1].height)
})

for (const width of [1024, 1280]) {
  test(`S4 — ${width} px : témoignages côte à côte, rien ne se chevauche`, async ({ page }) => {
    await open(page, width, 800)
    const cards = await boxes(testimonials(page), 3)
    const notes = await boxes(ratings(page), 3)
    const all = [['titre', await box(title(page))], ['accroche', await box(intro(page))], ...notes.map((b, i) => [`note ${i + 1}`, b]), ...cards.map((b, i) => [`témoignage ${i + 1}`, b])]

    expect(cards[1].x).toBeGreaterThanOrEqual(cards[0].x + cards[0].width)
    expect(cards[2].x).toBeGreaterThanOrEqual(cards[1].x + cards[1].width)
    for (let i = 0; i < all.length; i++) {
      for (let j = i + 1; j < all.length; j++) expect.soft(overlap(all[i][1], all[j][1]), `${all[i][0]} / ${all[j][0]}`).toBe(false)
    }
  })
}

for (const width of [320, 767, 768, 1023, 1024, 1440]) {
  test(`S5 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(testimonials(page)).toHaveCount(3)
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

for (const [width, height] of [[1440, 800], [375, 1530]]) {
  test(`S6 — ${width} px : pied de page centré sous les témoignages`, async ({ page }) => {
    await open(page, width, height)
    const cards = await boxes(testimonials(page), 3)
    const f = await box(footer(page))
    const t = await textBox(footer(page))

    expect(f.y).toBeGreaterThanOrEqual(Math.max(...cards.map((c) => c.y + c.height)))
    expect(Math.abs((t.left + t.right) / 2 - width / 2)).toBeLessThanOrEqual(1)
  })
}
