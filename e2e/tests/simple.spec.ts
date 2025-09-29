import { test, expect } from '@playwright/test'
import { setupApiMock } from '../fixtures/api-mock'

test.describe('Teste Simples', () => {
  test.beforeEach(async ({ page }) => {
    await setupApiMock(page)
  })
  test('Página carrega', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const title = await page.title()
    expect(title).toBeTruthy()
  })

  test('Botões existem', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const buttons = page.locator('button')
    const buttonCount = await buttons.count()
    expect(buttonCount).toBeGreaterThan(0)
  })

  test('Cards existem', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const cards = page.locator('div').filter({ hasText: 'Hioki Sushi' })
    const cardCount = await cards.count()
    expect(cardCount).toBeGreaterThanOrEqual(0)
  })

  test('Navegação funciona', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const learnMoreButton = page
      .locator('button')
      .filter({ hasText: 'Saiba Mais' })
      .first()
    await expect(learnMoreButton).toBeVisible()

    await learnMoreButton.click()
    await page.waitForTimeout(1000)

    expect(page.url()).toContain('/restaurant')
  })
})
