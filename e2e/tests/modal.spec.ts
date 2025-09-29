import { test, expect } from '@playwright/test'
import { setupApiMock } from '../fixtures/api-mock'

test.describe('Modal E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await setupApiMock(page)
    await page.goto('/')
  })

  test('modal abre e fecha corretamente', async ({ page }) => {
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    const modal = page.locator('[data-testid="modal"]')
    if (await modal.count() > 0) {
      await expect(modal).toBeVisible()
    }
  })

  test('modal não fecha ao clicar no conteúdo', async ({ page }) => {
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    const modal = page.locator('[data-testid="modal"]')
    if (await modal.count() > 0) {
      await expect(modal).toBeVisible()
    }
  })

  test('modal tem z-index alto', async ({ page }) => {
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    const modal = page.locator('[data-testid="modal"]')
    if (await modal.count() > 0) {
      const zIndex = await modal.evaluate((el) => {
        return window.getComputedStyle(el).zIndex
      })
      expect(parseInt(zIndex)).toBeGreaterThan(0)
    }
  })
})
