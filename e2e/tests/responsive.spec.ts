import { test, expect } from '@playwright/test'
import { HomePage, RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'

test.describe('Responsividade', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
  })

  test('Desktop (1920x1080)', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('DESKTOP')
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.header).toBeVisible()
    await expect(homePage.logo).toBeVisible()
    await expect(homePage.cardList).toBeVisible()
    await expect(homePage.footer).toBeVisible()

    const cardCount = await homePage.getCardCount()
    expect(cardCount).toBeGreaterThan(0)

    for (let i = 0; i < cardCount; i++) {
      const card = homePage.cards.nth(i)
      await expect(card).toBeVisible()
    }
  })

  test('Tablet (768x1024)', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('TABLET')
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.header).toBeVisible()
    await expect(homePage.logo).toBeVisible()
    await expect(homePage.cardList).toBeVisible()
    await expect(homePage.footer).toBeVisible()

    const cardCount = await homePage.getCardCount()
    expect(cardCount).toBeGreaterThan(0)

    for (let i = 0; i < cardCount; i++) {
      const card = homePage.cards.nth(i)
      await expect(card).toBeVisible()
    }
  })

  test('Mobile (375x667)', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('MOBILE')
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.header).toBeVisible()
    await expect(homePage.logo).toBeVisible()
    await expect(homePage.cardList).toBeVisible()
    await expect(homePage.footer).toBeVisible()

    const cardCount = await homePage.getCardCount()
    expect(cardCount).toBeGreaterThan(0)

    for (let i = 0; i < cardCount; i++) {
      const card = homePage.cards.nth(i)
      await expect(card).toBeVisible()
    }
  })

  test('Componentes se adaptam corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      await expect(homePage.header).toBeVisible()
      await expect(homePage.cardList).toBeVisible()
      await expect(homePage.footer).toBeVisible()
    }
  })

  test('Texto não quebra', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      const textElements = page.locator('p, h1, h2, h3, h4, h5, h6')
      const textCount = await textElements.count()

      for (let i = 0; i < Math.min(textCount, 5); i++) {
        const textElement = textElements.nth(i)
        await expect(textElement).toBeVisible()

        const boundingBox = await textElement.boundingBox()
        expect(boundingBox).not.toBeNull()
        expect(boundingBox!.width).toBeGreaterThan(0)
      }
    }
  })

  test('Botões são clicáveis em mobile', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('MOBILE')
    await homePage.goto()
    await homePage.waitForLoad()

    const learnMoreButtons = homePage.learnMoreButtons
    const buttonCount = await learnMoreButtons.count()

    for (let i = 0; i < buttonCount; i++) {
      const button = learnMoreButtons.nth(i)
      await expect(button).toBeVisible()
      await expect(button).toBeEnabled()

      const boundingBox = await button.boundingBox()
      expect(boundingBox).not.toBeNull()
      expect(boundingBox!.height).toBeGreaterThanOrEqual(24)
    }
  })

  test('Layout não quebra em telas pequenas', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('MOBILE')
    await homePage.goto()
    await homePage.waitForLoad()

    const viewport = page.viewportSize()
    expect(viewport).not.toBeNull()

    await expect(homePage.header).toBeVisible()
    await expect(homePage.cardList).toBeVisible()
    await expect(homePage.footer).toBeVisible()

    const headerBox = await homePage.header.boundingBox()
    const cardListBox = await homePage.cardList.boundingBox()
    const footerBox = await homePage.footer.boundingBox()

    expect(headerBox).not.toBeNull()
    expect(cardListBox).not.toBeNull()
    expect(footerBox).not.toBeNull()

    expect(headerBox!.width).toBeLessThanOrEqual(viewport!.width)
    expect(cardListBox!.width).toBeLessThanOrEqual(viewport!.width)
    expect(footerBox!.width).toBeLessThanOrEqual(viewport!.width)
  })

  test('Restaurant page é responsiva', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      await expect(restaurantPage.restaurantHeader).toBeVisible()
      await expect(restaurantPage.title).toBeVisible()
      await expect(restaurantPage.cardList).toBeVisible()
    }
  })

  test('Imagens são responsivas', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      const images = page.locator('img')
      const imageCount = await images.count()

      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i)
        await expect(img).toBeVisible()

        const boundingBox = await img.boundingBox()
        expect(boundingBox).not.toBeNull()
        expect(boundingBox!.width).toBeGreaterThan(0)
        expect(boundingBox!.height).toBeGreaterThan(0)
      }
    }
  })

  test('Navegação funciona em mobile', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('MOBILE')
    await homePage.goto()
    await homePage.waitForLoad()

    await homePage.clickLearnMoreButton(0)
    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)

    await page.goBack()
    await helpers.assertCurrentUrl(TEST_DATA.HOME_URL)
  })

  test('Tema funciona em todas as resoluções', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      const themeButton = homePage.themeButton
      await expect(themeButton).toBeVisible()
      await expect(themeButton).toBeEnabled()

      await themeButton.click()
      await page.waitForTimeout(500)

      const theme = await homePage.getCurrentTheme()
      expect(['light', 'dark']).toContain(theme)
    }
  })

  test('Scroll funciona em mobile', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('MOBILE')
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.scrollToBottom()
    await page.waitForTimeout(500)

    await helpers.scrollToTop()
    await page.waitForTimeout(500)

    await expect(homePage.header).toBeVisible()
  })

  test('Touch targets são adequados', async ({ page }) => {
    await helpers.testResponsiveBreakpoint('MOBILE')
    await homePage.goto()
    await homePage.waitForLoad()

    const buttons = page.locator('button')
    const buttonCount = await buttons.count()

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const boundingBox = await button.boundingBox()

      expect(boundingBox).not.toBeNull()
      expect(boundingBox!.height).toBeGreaterThanOrEqual(24)
      expect(boundingBox!.width).toBeGreaterThanOrEqual(25)
    }
  })

  test('Conteúdo não transborda', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      const viewport = page.viewportSize()
      expect(viewport).not.toBeNull()

      const body = page.locator('body')
      const bodyBox = await body.boundingBox()
      expect(bodyBox).not.toBeNull()
      expect(bodyBox!.width).toBeLessThanOrEqual(viewport!.width)
    }
  })
})
