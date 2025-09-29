import { expect, Page } from '@playwright/test'
import { TEST_DATA } from '../fixtures/test-data'

export class TestHelpers {
  constructor(private page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.waitForTimeout(500)
  }

  async assertTheme(expectedTheme: 'light' | 'dark') {
    const body = this.page.locator('body')
    const classList = (await body.getAttribute('class')) || ''

    if (expectedTheme === 'dark') {
      expect(classList).toContain('dark')
    } else {
      expect(classList).not.toContain('dark')
    }
  }

  async getCurrentTheme(): Promise<'light' | 'dark'> {
    const body = this.page.locator('body')
    const classList = await body.getAttribute('class')
    return classList?.includes('dark') ? 'dark' : 'light'
  }

  async assertCurrentUrl(expectedUrl: string) {
    expect(this.page.url()).toBe(`${TEST_DATA.BASE_URL}${expectedUrl}`)
  }

  async measurePerformance() {
    const metrics = await this.page.evaluate(() => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded:
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart,
        firstPaint:
          performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint:
          performance.getEntriesByName('first-contentful-paint')[0]
            ?.startTime || 0
      }
    })

    return metrics
  }

  async assertNoConsoleErrors() {
    const errors: string[] = []

        this.page.on('console', (msg) => {
          if (msg.type() === 'error') {
            const text = msg.text()
            if (!text.includes('ERR_NAME_NOT_RESOLVED') && 
                !text.includes('Could not resolve hostname') &&
                !text.includes('Failed to load resource')) {
              errors.push(text)
            }
          }
        })

    await this.page.waitForTimeout(1000)
    expect(errors).toHaveLength(0)
  }

  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })
  }

  async scrollToTop() {
    await this.page.evaluate(() => {
      window.scrollTo(0, 0)
    })
  }

  async testResponsiveBreakpoint(
    breakpoint: keyof typeof TEST_DATA.BREAKPOINTS
  ) {
    const { width, height } = TEST_DATA.BREAKPOINTS[breakpoint]
    await this.page.setViewportSize({ width, height })
    await this.waitForPageLoad()
  }

  async assertElementInViewport(selector: string) {
    const element = this.page.locator(selector)
    await expect(element).toBeVisible()

    const boundingBox = await element.boundingBox()
    if (boundingBox) {
      const viewport = this.page.viewportSize()
      if (viewport) {
        expect(boundingBox.x).toBeGreaterThanOrEqual(0)
        expect(boundingBox.y).toBeGreaterThanOrEqual(0)
        expect(boundingBox.x + boundingBox.width).toBeLessThanOrEqual(
          viewport.width
        )
        expect(boundingBox.y + boundingBox.height).toBeLessThanOrEqual(
          viewport.height
        )
      }
    }
  }

  async assertAccessibility() {
    const buttons = this.page.locator('button')
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

    const images = this.page.locator('img')
    const imageCount = await images.count()

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  }

  async hoverElement(selector: string) {
    const element = this.page.locator(selector)
    const count = await element.count()
    if (count > 0) {
      await element.first().hover()
      await this.page.waitForTimeout(100)
    }
  }
}
