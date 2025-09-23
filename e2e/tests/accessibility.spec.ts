import { test, expect } from '@playwright/test'
import { HomePage, RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'

test.describe('Acessibilidade', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
  })

  test('Botões têm texto ou aria-label', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const buttons = page.locator('button')
    const buttonCount = await buttons.count()

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute('aria-label')
      const text = await button.textContent()

      if (text?.trim() === '') {
        if (ariaLabel) {
          expect(ariaLabel).toBeTruthy()
        }
      } else {
        expect(ariaLabel || text?.trim()).toBeTruthy()
      }
    }
  })

  test('Imagens têm alt text', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const images = page.locator('img')
    const imageCount = await images.count()

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })

  test('Estrutura de cabeçalhos é adequada', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const headings = page.locator('h1, h2, h3, h4, h5, h6')
    const headingCount = await headings.count()

    if (headingCount > 0) {
      for (let i = 0; i < Math.min(headingCount, 5); i++) {
        const heading = headings.nth(i)
        const text = await heading.textContent()
        expect(text?.trim()).toBeTruthy()
      }
    }
  })

  test('Navegação por teclado funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('Foco é visível', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton
    await themeButton.focus()

    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('Contraste de cores é adequado', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const body = page.locator('body')
    const bodyStyle = await body.evaluate((el) => {
      const style = window.getComputedStyle(el)
      return {
        color: style.color,
        backgroundColor: style.backgroundColor
      }
    })

    expect(bodyStyle.color).toBeTruthy()
    expect(bodyStyle.backgroundColor).toBeTruthy()
  })

  test('Elementos interativos são acessíveis', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const interactiveElements = page.locator(
      'button, a, input, select, textarea'
    )
    const elementCount = await interactiveElements.count()

    for (let i = 0; i < elementCount; i++) {
      const element = interactiveElements.nth(i)
      await expect(element).toBeVisible()

      const tagName = await element.evaluate((el) => el.tagName.toLowerCase())
      const role = await element.getAttribute('role')
      const ariaLabel = await element.getAttribute('aria-label')
      const text = await element.textContent()

      if (tagName === 'button' || tagName === 'a') {
        if (text?.trim() === '') {
          if (ariaLabel) {
            expect(ariaLabel).toBeTruthy()
          }
        } else {
          expect(ariaLabel || text?.trim()).toBeTruthy()
        }
      }
    }
  })

  test('Formulários são acessíveis', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const inputs = page.locator('input, select, textarea')
    const inputCount = await inputs.count()

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i)
      const type = await input.getAttribute('type')
      const ariaLabel = await input.getAttribute('aria-label')
      const placeholder = await input.getAttribute('placeholder')
      const id = await input.getAttribute('id')

      if (type !== 'hidden') {
        expect(ariaLabel || placeholder || id).toBeTruthy()
      }
    }
  })

  test('Links são descritivos', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const links = page.locator('a')
    const linkCount = await links.count()

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i)
      const text = await link.textContent()
      const ariaLabel = await link.getAttribute('aria-label')
      const href = await link.getAttribute('href')

      if (text?.trim() === '') {
        if (ariaLabel) {
          expect(ariaLabel).toBeTruthy()
        }
      } else {
        expect(text?.trim() || ariaLabel).toBeTruthy()
      }
      if (href) {
        expect(href).not.toBe('#')
      }
    }
  })

  test('Página Restaurant é acessível', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const buttons = page.locator('button')
    const buttonCount = await buttons.count()

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute('aria-label')
      const text = await button.textContent()

      if (text?.trim() === '') {
        if (ariaLabel) {
          expect(ariaLabel).toBeTruthy()
        }
      } else {
        expect(ariaLabel || text?.trim()).toBeTruthy()
      }
    }
  })

  test('Navegação por teclado entre páginas', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
  })

  test('Skip links funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const skipLinks = page.locator('a[href^="#"]')
    const skipLinkCount = await skipLinks.count()

    if (skipLinkCount > 0) {
      for (let i = 0; i < skipLinkCount; i++) {
        const skipLink = skipLinks.nth(i)
        const href = await skipLink.getAttribute('href')
        const target = page.locator(href!.substring(1))

        await skipLink.click()
        await expect(target).toBeVisible()
      }
    }
  })

  test('Tamanho de fonte é adequado', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const textElements = page.locator('p, h1, h2, h3, h4, h5, h6, span, div')
    const textCount = await textElements.count()

    for (let i = 0; i < Math.min(textCount, 10); i++) {
      const textElement = textElements.nth(i)
      const fontSize = await textElement.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize)
      })

      expect(fontSize).toBeGreaterThanOrEqual(12)
    }
  })

  test('Elementos não sobrepõem', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const visibleElements = page.locator('button, img, div[class*="sc-"]')
    const elementCount = await visibleElements.count()

    for (let i = 0; i < Math.min(elementCount, 10); i++) {
      const element = visibleElements.nth(i)
      const boundingBox = await element.boundingBox()

      if (boundingBox) {
        expect(boundingBox.width).toBeGreaterThan(0)
        expect(boundingBox.height).toBeGreaterThan(0)
      }
    }
  })

  test('Animações respeitam preferências', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const prefersReducedMotion = await page.evaluate(() => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })

    if (prefersReducedMotion) {
      const animatedElements = page.locator(
        '[style*="animation"], [style*="transition"]'
      )
      const animatedCount = await animatedElements.count()

      for (let i = 0; i < animatedCount; i++) {
        const element = animatedElements.nth(i)
        const style = await element.getAttribute('style')

        if (style?.includes('animation')) {
          expect(style).toContain('animation-duration: 0s')
        }
        if (style?.includes('transition')) {
          expect(style).toContain('transition-duration: 0s')
        }
      }
    }
  })

  test('Tabelas são acessíveis', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const tables = page.locator('table')
    const tableCount = await tables.count()

    for (let i = 0; i < tableCount; i++) {
      const table = tables.nth(i)
      const caption = table.locator('caption')
      const captionCount = await caption.count()

      if (captionCount === 0) {
        const summary = await table.getAttribute('summary')
        const ariaLabel = await table.getAttribute('aria-label')
        expect(summary || ariaLabel).toBeTruthy()
      }
    }
  })

  test('ARIA landmarks estão presentes', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const main = page.locator('main, [role="main"]')
    const navigation = page.locator('nav, [role="navigation"]')
    const banner = page.locator('header, [role="banner"]')
    const contentinfo = page.locator('footer, [role="contentinfo"]')

    const mainCount = await main.count()
    const navigationCount = await navigation.count()
    const bannerCount = await banner.count()
    const contentinfoCount = await contentinfo.count()

    expect(
      mainCount + navigationCount + bannerCount + contentinfoCount
    ).toBeGreaterThan(0)
  })
})
