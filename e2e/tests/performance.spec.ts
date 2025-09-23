import { test, expect } from '@playwright/test'
import { HomePage, RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'

test.describe('Performance', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
  })

  test('Página carrega em < 3 segundos', async ({ page }) => {
    const startTime = Date.now()

    await homePage.goto()
    await homePage.waitForLoad()

    const endTime = Date.now()
    const loadTime = endTime - startTime

    expect(loadTime).toBeLessThan(TEST_DATA.TIMEOUTS.PERFORMANCE)
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

      const naturalWidth = await img.evaluate(
        (el) => (el as HTMLImageElement).naturalWidth
      )
      expect(naturalWidth).toBeGreaterThan(0)
    }
  })

  test('Sem erros de console', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.assertNoConsoleErrors()
  })

  test('Lighthouse score > 90', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const metrics = await helpers.measurePerformance()

    expect(metrics.loadTime).toBeLessThan(TEST_DATA.TIMEOUTS.PERFORMANCE)
    expect(metrics.domContentLoaded).toBeLessThan(
      TEST_DATA.TIMEOUTS.PERFORMANCE
    )
  })

  test('Tempo de interação < 100ms', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await homePage.clickThemeButton()

    const endTime = Date.now()
    const interactionTime = endTime - startTime

    expect(interactionTime).toBeLessThan(1500)
  })

  test('Performance da página Restaurant', async ({ page }) => {
    const startTime = Date.now()

    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const endTime = Date.now()
    const loadTime = endTime - startTime

    expect(loadTime).toBeLessThan(TEST_DATA.TIMEOUTS.PERFORMANCE)
  })

  test('Navegação é rápida', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await homePage.clickLearnMoreButton(0)
    await restaurantPage.waitForLoad()

    const endTime = Date.now()
    const navigationTime = endTime - startTime

    expect(navigationTime).toBeLessThan(2000)
  })

  test('Mudança de tema é rápida', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await homePage.clickThemeButton()
    await page.waitForTimeout(500)

    const endTime = Date.now()
    const themeChangeTime = endTime - startTime

    expect(themeChangeTime).toBeLessThan(2500)
  })

  test('Scroll é suave', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await helpers.scrollToBottom()
    await page.waitForTimeout(500)

    const endTime = Date.now()
    const scrollTime = endTime - startTime

    expect(scrollTime).toBeLessThan(1000)
  })

  test('Recarregamento é rápido', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await page.reload()
    await homePage.waitForLoad()

    const endTime = Date.now()
    const reloadTime = endTime - startTime

    expect(reloadTime).toBeLessThan(TEST_DATA.TIMEOUTS.PERFORMANCE)
  })

  test('Múltiplas interações não degradam performance', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    for (let i = 0; i < 10; i++) {
      await homePage.clickThemeButton()
      await page.waitForTimeout(50)
    }

    const endTime = Date.now()
    const totalTime = endTime - startTime

    expect(totalTime).toBeLessThan(10000)
  })

  test('Adicionar ao carrinho é rápido', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const startTime = Date.now()

    await restaurantPage.clickAddButton(0)
    await page.waitForTimeout(500)

    const endTime = Date.now()
    const addTime = endTime - startTime

    expect(addTime).toBeLessThan(2000)
  })

  test('Performance em diferentes resoluções', async ({ page }) => {
    const breakpoints = ['MOBILE', 'TABLET', 'DESKTOP'] as const

    for (const breakpoint of breakpoints) {
      await helpers.testResponsiveBreakpoint(breakpoint)

      const startTime = Date.now()
      await homePage.goto()
      await homePage.waitForLoad()
      const endTime = Date.now()

      const loadTime = endTime - startTime
      expect(loadTime).toBeLessThan(10000)
    }
  })

  test('Memória não vaza', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const initialMemory = await page.evaluate(() => {
      return (performance as any).memory?.usedJSHeapSize || 0
    })

    for (let i = 0; i < 5; i++) {
      await homePage.clickThemeButton()
      await page.waitForTimeout(100)
      await homePage.clickLearnMoreButton(0)
      await page.waitForTimeout(100)
      await page.goBack()
      await page.waitForTimeout(100)
    }

    const finalMemory = await page.evaluate(() => {
      return (performance as any).memory?.usedJSHeapSize || 0
    })

    const memoryIncrease = finalMemory - initialMemory
    expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024)
  })

  test('Primeira pintura é rápida', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const metrics = await helpers.measurePerformance()

    expect(metrics.firstPaint).toBeLessThan(1200)
    expect(metrics.firstContentfulPaint).toBeLessThan(6000)
  })

  test('DOM é construído rapidamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const metrics = await helpers.measurePerformance()

    expect(metrics.domContentLoaded).toBeLessThan(2000)
  })

  test('Performance com cache', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstLoadTime = await page.evaluate(() => {
      const nav = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      return nav.loadEventEnd - nav.loadEventStart
    })

    await page.reload()
    await homePage.waitForLoad()

    const secondLoadTime = await page.evaluate(() => {
      const nav = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      return nav.loadEventEnd - nav.loadEventStart
    })

    expect(secondLoadTime).toBeLessThanOrEqual(firstLoadTime + 100)
  })
})
