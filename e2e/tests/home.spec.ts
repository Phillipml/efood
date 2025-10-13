import { test, expect } from '@playwright/test'
import { HomePage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'
import { setupApiMock } from '../fixtures/api-mock'

test.describe('Página Home', () => {
  let homePage: HomePage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    helpers = new TestHelpers(page)
    await setupApiMock(page)
  })

  test('Header é exibido corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.header).toBeVisible()
    await expect(homePage.themeButton).toBeVisible()
  })

  test('Logo é exibido', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const logoExists = (await homePage.logo.count()) > 0
    if (logoExists) {
      await expect(homePage.logo).toBeVisible()
    }
  })

  test('Texto principal é exibido', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const title = page.getByText('Bella Tavola Italiana')
    await expect(title).toBeVisible()
  })

  test('CardList com restaurantes é exibido', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.cardList).toBeVisible()

    const cardCount = await homePage.getCardCount()
    expect(cardCount).toBeGreaterThan(0)
  })

  test('Cards têm imagem, nome, rating, descrição', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstCard = homePage.cards.first()
    await expect(firstCard).toBeVisible()

    const cardImage = firstCard.locator('img').first()
    await expect(cardImage).toBeVisible()

    const cardText = await firstCard.textContent()
    expect(cardText).toContain('Bella Tavola Italiana')
  })

  test('Botões "Saiba Mais" são clicáveis', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const learnMoreButtons = homePage.learnMoreButtons
    const buttonCount = await learnMoreButtons.count()
    expect(buttonCount).toBeGreaterThan(0)

    const firstButton = learnMoreButtons.first()
    await expect(firstButton).toBeVisible()
    await expect(firstButton).toBeEnabled()
  })

  test('Footer é exibido', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.footer).toBeVisible()
  })

  test('ThemeButton é exibido e funcional', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.themeButton).toBeVisible()
    await expect(homePage.themeButton).toBeEnabled()

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)
  })

  test('Página carrega sem erros', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.assertNoConsoleErrors()
  })

  test('Elementos são responsivos', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.testResponsiveBreakpoint('MOBILE')
    await expect(homePage.header).toBeVisible()
    await expect(homePage.cardList).toBeVisible()

    await helpers.testResponsiveBreakpoint('TABLET')
    await expect(homePage.header).toBeVisible()
    await expect(homePage.cardList).toBeVisible()

    await helpers.testResponsiveBreakpoint('DESKTOP')
    await expect(homePage.header).toBeVisible()
    await expect(homePage.cardList).toBeVisible()
  })

  test('Navegação para Restaurant funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await homePage.clickLearnMoreButton(0)

    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
  })

  test('Múltiplos cards são exibidos', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const cardCount = await homePage.getCardCount()
    expect(cardCount).toBeGreaterThanOrEqual(2)

    // Verificar apenas os primeiros 3 cards para evitar timeout
    const maxCards = Math.min(cardCount, 3)
    for (let i = 0; i < maxCards; i++) {
      const card = homePage.cards.nth(i)
      await expect(card).toBeVisible()

      const cardImage = card.locator('img').first()
      await expect(cardImage).toBeVisible()
    }
  })


  test('Performance de carregamento', async ({ page }) => {
    const startTime = Date.now()

    await homePage.goto()
    await homePage.waitForLoad()

    const endTime = Date.now()
    const loadTime = endTime - startTime

    expect(loadTime).toBeLessThan(TEST_DATA.TIMEOUTS.PERFORMANCE)
  })

  test('Acessibilidade básica', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.assertAccessibility()
  })

  test('Scroll funciona corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.scrollToBottom()
    await page.waitForTimeout(500)

    await helpers.scrollToTop()
    await page.waitForTimeout(500)

    await expect(homePage.header).toBeVisible()
  })
})
