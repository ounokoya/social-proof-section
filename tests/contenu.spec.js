import { test, expect } from '@playwright/test'
import { open, title, intro, ratings, testimonialList, testimonials, figure, style } from './helpers.js'

// Spec §2 et §3 — S7 à S10

const CLIENTS = [
  ['Colton Smith', 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!'],
  ['Irene Roberts', 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'],
  ['Anne Wallace', 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!'],
]

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 800)
})

test('S7 — titre, accroche, 3 notes et 3 témoignages', async ({ page }) => {
  await expect(title(page)).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(intro(page)).toBeVisible()
  await expect(ratings(page)).toHaveText(['Reviews', 'Report Guru', 'BestTech'].map((s) => new RegExp(`^\\s*Rated 5 Stars in ${s}\\s*$`)))
  await expect(testimonials(page)).toHaveCount(3)
  for (const [i, [name, quote]] of CLIENTS.entries()) {
    const item = testimonials(page).nth(i)
    await expect(item.getByText(name, { exact: true })).toBeVisible()
    await expect(item.getByText('Verified Buyer', { exact: true })).toBeVisible()
    await expect(item.getByText(quote)).toBeVisible()
  }
})

test('S8 — 15 étoiles décoratives dans les notes', async ({ page }) => {
  const list = page.getByRole('list', { name: 'Ratings' })
  await expect(ratings(page)).toHaveCount(3)
  await expect(list.getByRole('img')).toHaveCount(0)
  expect(await list.locator('img, svg').count()).toBe(15)
})

test('S9 — 3 photos chargées et décoratives ; chaque figure nommée par son client', async ({ page }) => {
  await expect(testimonials(page)).toHaveCount(3)
  await expect(testimonialList(page).getByRole('img')).toHaveCount(0)
  const photos = testimonialList(page).locator('img')
  await expect(photos).toHaveCount(3)
  // l'effet, pas l'attribut : chaque photo est réellement chargée
  for (let i = 0; i < 3; i++) expect(await photos.nth(i).evaluate((img) => img.complete && img.naturalWidth > 0), `photo ${i + 1}`).toBe(true)
  for (const [name, quote] of CLIENTS) await expect(figure(page, name).getByText(quote)).toBeVisible()
})

test('S10 — couleurs AA de G2 : accroche et « Verified Buyer »', async ({ page }) => {
  expect(await style(intro(page), 'color')).toBe('rgb(132, 108, 131)')
  await expect(testimonials(page)).toHaveCount(3)
  for (let i = 0; i < 3; i++) expect(await style(testimonials(page).nth(i).getByText('Verified Buyer', { exact: true }), 'color')).toBe('rgb(240, 117, 172)')
})
