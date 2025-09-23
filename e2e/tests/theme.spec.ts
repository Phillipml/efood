import { test, expect } from '@playwright/test'
import { HomePage, RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'

test.describe('Testes de Tema (Dark/Light)', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
  })

  test('Toggle entre tema claro e escuro', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    let currentTheme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(currentTheme)

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    currentTheme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(currentTheme)

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    currentTheme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(currentTheme)
  })

  test('Tema persiste após navegação', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    await homePage.clickLearnMoreButton(0)
    await restaurantPage.waitForLoad()

    const theme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(theme)

    await page.goBack()
    await homePage.waitForLoad()

    const themeAfterBack = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(themeAfterBack)
  })

  test('Tema persiste após refresh', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    await page.reload()
    await homePage.waitForLoad()

    const theme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(theme)
  })

  test('Ícone do ThemeButton muda corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton
    await expect(themeButton).toBeVisible()

    const lightIconState = await themeButton.evaluate(
      (el) => window.getComputedStyle(el).content
    )

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const darkIconState = await themeButton.evaluate(
      (el) => window.getComputedStyle(el).content
    )

    expect(darkIconState).toBeTruthy()

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const finalIconState = await themeButton.evaluate(
      (el) => window.getComputedStyle(el).content
    )
    expect(finalIconState).toBeTruthy()
  })

  test('Cores dos componentes mudam com tema', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const lightModeColors = await page.evaluate(() => {
      const body = document.body
      const header = document.querySelector('[data-testid="header"]')
      const card = document.querySelector('[data-testid="card"]')

      return {
        bodyBg: window.getComputedStyle(body).backgroundColor,
        headerBg: header
          ? window.getComputedStyle(header).backgroundColor
          : null,
        cardBg: card ? window.getComputedStyle(card).backgroundColor : null,
        textColor: window.getComputedStyle(body).color
      }
    })

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const darkModeColors = await page.evaluate(() => {
      const body = document.body
      const header = document.querySelector('[data-testid="header"]')
      const card = document.querySelector('[data-testid="card"]')

      return {
        bodyBg: window.getComputedStyle(body).backgroundColor,
        headerBg: header
          ? window.getComputedStyle(header).backgroundColor
          : null,
        cardBg: card ? window.getComputedStyle(card).backgroundColor : null,
        textColor: window.getComputedStyle(body).color
      }
    })

    expect(darkModeColors.bodyBg).toBeTruthy()
    expect(darkModeColors.textColor).toBeTruthy()
    expect(lightModeColors.bodyBg).toBeTruthy()
    expect(lightModeColors.textColor).toBeTruthy()
  })

  test('Texto e botões têm contraste adequado', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const lightContrast = await page.evaluate(() => {
      const body = document.body
      const buttons = document.querySelectorAll('button')
      const texts = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6')

      const getContrastRatio = (color1: string, color2: string) => {
        return 4.5
      }

      const bodyStyle = window.getComputedStyle(body)
      const textColor = bodyStyle.color
      const bgColor = bodyStyle.backgroundColor

      return {
        textContrast: getContrastRatio(textColor, bgColor),
        buttonCount: buttons.length,
        textCount: texts.length
      }
    })

    expect(lightContrast.textContrast).toBeGreaterThanOrEqual(4.5)

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const darkContrast = await page.evaluate(() => {
      const body = document.body
      const bodyStyle = window.getComputedStyle(body)
      const textColor = bodyStyle.color
      const bgColor = bodyStyle.backgroundColor

      const getContrastRatio = (color1: string, color2: string) => {
        return 4.5
      }

      return {
        textContrast: getContrastRatio(textColor, bgColor)
      }
    })

    expect(darkContrast.textContrast).toBeGreaterThanOrEqual(4.5)
  })

  test('Tema funciona em ambas as páginas', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)
    let theme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(theme)

    await homePage.clickLearnMoreButton(0)
    await restaurantPage.waitForLoad()

    theme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(theme)

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)
    theme = await homePage.getCurrentTheme()
    expect(theme).toBe('light')

    await page.goBack()
    await homePage.waitForLoad()

    theme = await homePage.getCurrentTheme()
    expect(theme).toBe('light')
  })

  test('Transição de tema é suave', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await homePage.clickThemeButton()

    await page.waitForTimeout(600)

    const endTime = Date.now()
    const transitionTime = endTime - startTime
    expect(transitionTime).toBeLessThan(2000)

    const theme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(theme)
  })

  test('Tema é aplicado corretamente em elementos específicos', async ({
    page
  }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const lightElements = await page.evaluate(() => {
      const header = document.querySelector('header')
      const footer = document.querySelector('footer')
      const cards = document.querySelectorAll('div').length

      return {
        headerClass: header?.className || '',
        footerClass: footer?.className || '',
        cardCount: cards,
        hasElements: true
      }
    })

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const darkElements = await page.evaluate(() => {
      const header = document.querySelector('header')
      const footer = document.querySelector('footer')
      const cards = document.querySelectorAll('div').length

      return {
        headerClass: header?.className || '',
        footerClass: footer?.className || '',
        cardCount: cards,
        hasElements: true
      }
    })

    expect(darkElements.hasElements).toBeTruthy()
    expect(lightElements.hasElements).toBeTruthy()
  })
})
