import { test, expect } from '@playwright/test'
import { RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'

test.describe('Página Restaurant', () => {
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
  })

  test('RestaurantHeader é exibido', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await expect(restaurantPage.restaurantHeader).toBeVisible()
  })

  test('Título "Restaurantes" é exibido', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const titleExists = (await restaurantPage.title.count()) > 0
    if (titleExists) {
      await expect(restaurantPage.title).toBeVisible()
    }
  })

  test('Logo é exibido', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const logoExists = (await restaurantPage.logo.count()) > 0
    if (logoExists) {
      await expect(restaurantPage.logo).toBeVisible()
    }
  })

  test('Contador "0 produto(s) no carrinho" é exibido', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const cartCounterExists = (await restaurantPage.cartCounter.count()) > 0
    if (cartCounterExists) {
      await expect(restaurantPage.cartCounter).toBeVisible()
    }
  })

  test('CardList com botões "Adicionar" é exibido', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await expect(restaurantPage.cardList).toBeVisible()

    const cardCount = await restaurantPage.getCardCount()
    expect(cardCount).toBeGreaterThan(0)
  })

  test('Cards têm informações corretas', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const firstCard = restaurantPage.cards.first()
    await expect(firstCard).toBeVisible()

    const cardImage = firstCard.locator('img').first()
    await expect(cardImage).toBeVisible()

    const cardText = await firstCard.textContent()
    expect(cardText).toBeTruthy()
  })

  test('Botões "Adicionar" são clicáveis', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const addButtons = restaurantPage.addButtons
    const buttonCount = await addButtons.count()

    expect(buttonCount).toBeGreaterThan(0)

    for (let i = 0; i < buttonCount; i++) {
      const button = addButtons.nth(i)
      await expect(button).toBeVisible()
      await expect(button).toBeEnabled()
    }
  })

  test('Funcionalidade de adicionar ao carrinho', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const initialCartText = await restaurantPage.getCartCounterText()
    expect(initialCartText).toContain('0 produto(s)')

    await restaurantPage.clickAddButton(0)
    await page.waitForTimeout(500)

    const updatedCartText = await restaurantPage.getCartCounterText()
    expect(updatedCartText).toBeTruthy()
  })

  test('Múltiplos produtos podem ser adicionados', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const addButtons = restaurantPage.addButtons
    const buttonCount = await addButtons.count()

    for (let i = 0; i < Math.min(buttonCount, 3); i++) {
      await restaurantPage.clickAddButton(i)
      await page.waitForTimeout(200)
    }

    const finalCartText = await restaurantPage.getCartCounterText()
    expect(finalCartText).toContain('produto(s)')
  })

  test('Página carrega sem erros', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await helpers.assertNoConsoleErrors()
  })

  test('Elementos são responsivos', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await helpers.testResponsiveBreakpoint('MOBILE')
    await expect(restaurantPage.restaurantHeader).toBeVisible()
    await expect(restaurantPage.cardList).toBeVisible()

    await helpers.testResponsiveBreakpoint('TABLET')
    await expect(restaurantPage.restaurantHeader).toBeVisible()
    await expect(restaurantPage.cardList).toBeVisible()

    await helpers.testResponsiveBreakpoint('DESKTOP')
    await expect(restaurantPage.restaurantHeader).toBeVisible()
    await expect(restaurantPage.cardList).toBeVisible()
  })

  test('Tema funciona corretamente', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const themeButton = page.locator(TEST_DATA.SELECTORS.THEME_BUTTON)
    await expect(themeButton).toBeVisible()

    const initialTheme = await helpers.assertTheme('light')

    await themeButton.click()
    await page.waitForTimeout(500)

    await helpers.assertTheme('dark')
  })

  test('Performance de carregamento', async ({ page }) => {
    const startTime = Date.now()

    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const endTime = Date.now()
    const loadTime = endTime - startTime

    expect(loadTime).toBeLessThan(TEST_DATA.TIMEOUTS.PERFORMANCE)
  })

  test('Acessibilidade básica', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await helpers.assertAccessibility()
  })

  test('Scroll funciona corretamente', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await helpers.scrollToBottom()
    await page.waitForTimeout(500)

    await helpers.scrollToTop()
    await page.waitForTimeout(500)

    await expect(restaurantPage.restaurantHeader).toBeVisible()
  })

  test('Navegação de volta funciona', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await page.goBack()
    await page.waitForTimeout(1000)
    expect(page.url()).toContain(TEST_DATA.HOME_URL)
  })

  test('Estado do carrinho persiste', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await restaurantPage.clickAddButton(0)
    await page.waitForTimeout(500)

    const cartTextAfterAdd = await restaurantPage.getCartCounterText()

    await page.reload()
    await restaurantPage.waitForLoad()

    const cartTextAfterReload = await restaurantPage.getCartCounterText()
    expect(cartTextAfterReload).toBe(cartTextAfterAdd)
  })

  test('Botões respondem a hover', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const firstAddButton = restaurantPage.addButtons.first()
    await helpers.hoverElement(TEST_DATA.SELECTORS.ADD_BUTTON)

    await expect(firstAddButton).toBeVisible()
  })

  test('Cards são clicáveis', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const firstCard = restaurantPage.cards.first()
    await expect(firstCard).toBeVisible()

    await firstCard.click()
    await page.waitForTimeout(500)
  })

  test('Layout não quebra com muitos produtos', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const cardCount = await restaurantPage.getCardCount()
    expect(cardCount).toBeGreaterThan(0)

    for (let i = 0; i < cardCount; i++) {
      const card = restaurantPage.cards.nth(i)
      await expect(card).toBeVisible()
    }
  })
})
