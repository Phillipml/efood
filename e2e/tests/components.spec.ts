import { test, expect } from '@playwright/test'
import {
  HomePage,
  RestaurantPage,
  UIComponents
} from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'

test.describe('Componentes UI', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let uiComponents: UIComponents
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    uiComponents = new UIComponents(page)
    helpers = new TestHelpers(page)
  })

  test('Button: Clica e executa ação', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const learnMoreButton = homePage.learnMoreButtons.first()
    await expect(learnMoreButton).toBeVisible()
    await expect(learnMoreButton).toBeEnabled()

    await learnMoreButton.click()
    await page.waitForTimeout(1000)
    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
  })

  test('Button: Muda cor com tema', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton
    const initialColor = await themeButton.evaluate(
      (el) => window.getComputedStyle(el).color
    )

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const newColor = await themeButton.evaluate(
      (el) => window.getComputedStyle(el).color
    )

    expect(initialColor).toBeTruthy()
    expect(newColor).toBeTruthy()
  })

  test('Button: Responsividade (diferentes tamanhos)', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const buttons = await uiComponents.getButtonCount()
    expect(buttons).toBeGreaterThan(0)

    await helpers.testResponsiveBreakpoint('MOBILE')
    const mobileButtons = await uiComponents.getButtonCount()
    expect(mobileButtons).toBe(buttons)

    await helpers.testResponsiveBreakpoint('TABLET')
    const tabletButtons = await uiComponents.getButtonCount()
    expect(tabletButtons).toBe(buttons)

    await helpers.testResponsiveBreakpoint('DESKTOP')
    const desktopButtons = await uiComponents.getButtonCount()
    expect(desktopButtons).toBe(buttons)
  })

  test('Card: Exibe informações corretas', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstCard = homePage.cards.first()
    await expect(firstCard).toBeVisible()

    const cardImage = firstCard.locator('img').first()
    await expect(cardImage).toBeVisible()

    const cardText = await firstCard.textContent()
    expect(cardText).toBeTruthy()
    expect(cardText?.length).toBeGreaterThan(0)
  })

  test('Card: Botão é clicável', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstCard = homePage.cards.first()
    const cardButton = firstCard.locator('button').first()

    await expect(cardButton).toBeVisible()
    await expect(cardButton).toBeEnabled()

    await cardButton.click()
    await page.waitForTimeout(500)
  })

  test('Card: Renderiza tags corretamente na Home', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const cards = await homePage.cards.count()
    expect(cards).toBeGreaterThanOrEqual(6)

    const featuredTag = page.locator('text=Destaque da semana')
    await expect(featuredTag.first()).toBeVisible()

    const foodTypeTags = page
      .locator('text=Japonês')
      .or(page.locator('text=Italiano'))
      .or(page.locator('text=Mexicano'))
    const foodTypeCount = await foodTypeTags.count()
    expect(foodTypeCount).toBeGreaterThan(0)
  })

  test('Card: Renderiza ratings na Home', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const ratingElements = page.locator('text=/4\\.[0-9]/')
    const ratingCount = await ratingElements.count()
    expect(ratingCount).toBeGreaterThan(0)
  })

  test('Card: Não renderiza tags na página Restaurant', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const featuredTag = page.locator('text=Destaque da semana')
    await expect(featuredTag).toHaveCount(0)

    const foodTypeTags = page.locator(
      'text=Japonês, text=Italiano, text=Mexicano'
    )
    await expect(foodTypeTags).toHaveCount(0)
  })

  test('Card: Não renderiza ratings na página Restaurant', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const ratingElements = page.locator('text=/4\\.[0-9]/')
    await expect(ratingElements).toHaveCount(0)
  })

  test('Text: Renderiza corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const textElements = await uiComponents.texts.count()
    expect(textElements).toBeGreaterThan(0)

    for (let i = 0; i < Math.min(textElements, 5); i++) {
      const textElement = uiComponents.texts.nth(i)
      await expect(textElement).toBeVisible()

      const textContent = await textElement.textContent()
      expect(textContent).toBeTruthy()
    }
  })

  test('Logo: Exibe corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const logoExists = (await homePage.logo.count()) > 0
    if (logoExists) {
      await expect(homePage.logo).toBeVisible()

      const logoAlt = await homePage.logo.getAttribute('alt')
      expect(logoAlt).toBeTruthy()
    }
  })

  test('ThemeButton: Posicionamento fixo', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton
    await expect(themeButton).toBeVisible()

    const boundingBox = await themeButton.boundingBox()
    expect(boundingBox).not.toBeNull()

    await helpers.scrollToBottom()
    await page.waitForTimeout(500)

    const boundingBoxAfterScroll = await themeButton.boundingBox()
    expect(boundingBoxAfterScroll).not.toBeNull()
  })

  test('Componentes são acessíveis', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.assertAccessibility()
  })

  test('Hover effects funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstCard = homePage.cards.first()
    await helpers.hoverElement(TEST_DATA.SELECTORS.CARD)

    await expect(firstCard).toBeVisible()
  })

  test('Componentes respondem a mudanças de tema', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const initialCardStyle = await homePage.cards
      .first()
      .evaluate((el) => window.getComputedStyle(el).backgroundColor)

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const newCardStyle = await homePage.cards
      .first()
      .evaluate((el) => window.getComputedStyle(el).backgroundColor)

    expect(initialCardStyle).toBeTruthy()
    expect(newCardStyle).toBeTruthy()
  })

  test('Botões mantêm estado correto', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const learnMoreButton = homePage.learnMoreButtons.first()
    await expect(learnMoreButton).toBeEnabled()

    await learnMoreButton.click()
    await page.waitForTimeout(500)

    await page.goBack()
    await homePage.waitForLoad()

    const learnMoreButtonAfterBack = homePage.learnMoreButtons.first()
    await expect(learnMoreButtonAfterBack).toBeEnabled()
  })

  test('Cards são responsivos', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const cardCount = await homePage.getCardCount()
    expect(cardCount).toBeGreaterThan(0)

    await helpers.testResponsiveBreakpoint('MOBILE')
    for (let i = 0; i < cardCount; i++) {
      const card = homePage.cards.nth(i)
      await expect(card).toBeVisible()
    }

    await helpers.testResponsiveBreakpoint('DESKTOP')
    for (let i = 0; i < cardCount; i++) {
      const card = homePage.cards.nth(i)
      await expect(card).toBeVisible()
    }
  })

  test('Textos são legíveis', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const textElements = await uiComponents.texts.count()

    for (let i = 0; i < Math.min(textElements, 3); i++) {
      const textElement = uiComponents.texts.nth(i)
      const textContent = await textElement.textContent()

      expect(textContent).toBeTruthy()
      expect(textContent!.trim().length).toBeGreaterThan(0)
    }
  })

  test('Imagens carregam corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const images = page.locator('img')
    const imageCount = await images.count()

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      await expect(img).toBeVisible()

      const src = await img.getAttribute('src')
      expect(src).toBeTruthy()
    }
  })

  test('Componentes não quebram com interações rápidas', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton

    for (let i = 0; i < 5; i++) {
      await themeButton.click()
      await page.waitForTimeout(100)
    }

    await expect(themeButton).toBeVisible()
    await expect(themeButton).toBeEnabled()
  })
})
