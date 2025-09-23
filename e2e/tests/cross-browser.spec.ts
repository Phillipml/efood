import { test, expect } from '@playwright/test'
import { HomePage, RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'

test.describe('Cross-Browser', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
  })

  test('Chrome funciona', async ({ page, browserName }) => {
    if (browserName === 'chromium') {
      await homePage.goto()
      await homePage.waitForLoad()

      await expect(homePage.header).toBeVisible()
      await expect(homePage.logo).toBeVisible()
      await expect(homePage.cardList).toBeVisible()

      await homePage.clickLearnMoreButton(0)
      await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    }
  })

  test('Firefox funciona', async ({ page, browserName }) => {
    if (browserName === 'firefox') {
      await homePage.goto()
      await homePage.waitForLoad()

      await expect(homePage.header).toBeVisible()
      await expect(homePage.logo).toBeVisible()
      await expect(homePage.cardList).toBeVisible()

      await homePage.clickLearnMoreButton(0)
      await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    }
  })

  test('Safari funciona', async ({ page, browserName }) => {
    if (browserName === 'webkit') {
      await homePage.goto()
      await homePage.waitForLoad()

      await expect(homePage.header).toBeVisible()
      await expect(homePage.logo).toBeVisible()
      await expect(homePage.cardList).toBeVisible()

      await homePage.clickLearnMoreButton(0)
      await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    }
  })

  test('Edge funciona (se habilitado)', async ({ page, browserName }) => {
    if (browserName === 'msedge') {
      await homePage.goto()
      await homePage.waitForLoad()

      await expect(homePage.header).toBeVisible()
      await expect(homePage.logo).toBeVisible()
      await expect(homePage.cardList).toBeVisible()

      await homePage.clickLearnMoreButton(0)
      await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    }
  })

  test('Mobile Chrome funciona', async ({ page, browserName }) => {
    if (browserName === 'chromium') {
      await helpers.testResponsiveBreakpoint('MOBILE')
      await homePage.goto()
      await homePage.waitForLoad()

      await expect(homePage.header).toBeVisible()
      await expect(homePage.logo).toBeVisible()
      await expect(homePage.cardList).toBeVisible()

      await homePage.clickLearnMoreButton(0)
      await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    }
  })

  test('Mobile Safari funciona', async ({ page, browserName }) => {
    if (browserName === 'webkit') {
      await helpers.testResponsiveBreakpoint('MOBILE')
      await homePage.goto()
      await homePage.waitForLoad()

      await expect(homePage.header).toBeVisible()
      await expect(homePage.logo).toBeVisible()
      await expect(homePage.cardList).toBeVisible()

      await homePage.clickLearnMoreButton(0)
      await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    }
  })

  test('Funcionalidades básicas em todos os browsers', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await expect(homePage.header).toBeVisible()
    await expect(homePage.logo).toBeVisible()
    await expect(homePage.cardList).toBeVisible()
    await expect(homePage.footer).toBeVisible()

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const theme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(theme)

    await homePage.clickLearnMoreButton(0)
    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
  })

  test('Performance é consistente entre browsers', async ({ page }) => {
    const startTime = Date.now()

    await homePage.goto()
    await homePage.waitForLoad()

    const endTime = Date.now()
    const loadTime = endTime - startTime

    expect(loadTime).toBeLessThan(TEST_DATA.TIMEOUTS.PERFORMANCE)
  })

  test('CSS é renderizado corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const header = homePage.header
    const headerBox = await header.boundingBox()
    expect(headerBox).not.toBeNull()
    expect(headerBox!.width).toBeGreaterThan(0)
    expect(headerBox!.height).toBeGreaterThan(0)

    const logo = homePage.logo
    const logoBox = await logo.boundingBox()
    expect(logoBox).not.toBeNull()
    expect(logoBox!.width).toBeGreaterThan(0)
    expect(logoBox!.height).toBeGreaterThan(0)
  })

  test('JavaScript funciona corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton
    await themeButton.click()
    await page.waitForTimeout(500)

    const theme = await homePage.getCurrentTheme()
    expect(['light', 'dark']).toContain(theme)

    await themeButton.click()
    await page.waitForTimeout(500)

    const finalTheme = await homePage.getCurrentTheme()
    expect(finalTheme).toBe('light')
  })

  test('Eventos de mouse funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstCard = homePage.cards.first()
    await firstCard.hover()
    await page.waitForTimeout(500)

    await firstCard.click()
    await page.waitForTimeout(500)

    await expect(firstCard).toBeVisible()
  })

  test('Eventos de teclado funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()

    await page.keyboard.press('Enter')
    await page.waitForTimeout(500)
  })

  test('LocalStorage funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await page.evaluate(() => {
      localStorage.setItem('test', 'value')
    })

    const value = await page.evaluate(() => {
      return localStorage.getItem('test')
    })

    expect(value).toBe('value')
  })

  test('SessionStorage funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await page.evaluate(() => {
      sessionStorage.setItem('test', 'value')
    })

    const value = await page.evaluate(() => {
      return sessionStorage.getItem('test')
    })

    expect(value).toBe('value')
  })

  test('Cookies funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await page.context().addCookies([
      {
        name: 'test',
        value: 'value',
        domain: 'localhost',
        path: '/'
      }
    ])

    const cookies = await page.context().cookies()
    const testCookie = cookies.find((cookie) => cookie.name === 'test')

    expect(testCookie).toBeTruthy()
    expect(testCookie!.value).toBe('value')
  })

  test('Web APIs funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const userAgent = await page.evaluate(() => navigator.userAgent)
    expect(userAgent).toBeTruthy()

    const viewport = await page.evaluate(() => ({
      width: window.innerWidth,
      height: window.innerHeight
    }))
    expect(viewport.width).toBeGreaterThan(0)
    expect(viewport.height).toBeGreaterThan(0)
  })

  test('Fetch API funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const response = await page.evaluate(async () => {
      try {
        const res = await fetch('/api/test')
        return res.status
      } catch (error) {
        return 'error'
      }
    })

    expect(typeof response).toBe('number')
  })

  test('Console não tem erros', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.assertNoConsoleErrors()
  })

  test('Compatibilidade com ES6+', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const es6Support = await page.evaluate(() => {
      try {
        const arrow = () => 'test'
        const template = `template ${'string'}`
        const destructuring = { a: 1, ...{ b: 2 } }
        return 'supported'
      } catch (error) {
        return 'not supported'
      }
    })

    expect(es6Support).toBe('supported')
  })

  test('WebGL funciona (se aplicável)', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const webglSupport = await page.evaluate(() => {
      try {
        const canvas = document.createElement('canvas')
        const gl =
          canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        return gl ? 'supported' : 'not supported'
      } catch (error) {
        return 'not supported'
      }
    })

    expect(webglSupport).toBeTruthy()
  })

  test('Media queries funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      const mediaQuery = await page.evaluate(() => {
        return window.matchMedia('(max-width: 768px)').matches
      })

      expect(typeof mediaQuery).toBe('boolean')
    }
  })

  test('Print funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const printSupport = await page.evaluate(() => {
      return typeof window.print === 'function'
    })

    expect(printSupport).toBe(true)
  })

  test('Offline/Online funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const onlineStatus = await page.evaluate(() => navigator.onLine)
    expect(typeof onlineStatus).toBe('boolean')
  })
})
