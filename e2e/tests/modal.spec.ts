import { test, expect } from '@playwright/test'

test.describe('Modal E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('modal abre e fecha corretamente', async ({ page }) => {
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    await page.click('text=Adicionar ao Carrinho')

    const modal = page.locator('[data-testid="modal"]')
    await expect(modal).toBeVisible()

    await expect(
      modal.locator('button:has-text("Adicionar ao carrinho")')
    ).toBeVisible()

    await modal.click({ position: { x: 50, y: 50 } })
    await expect(modal).not.toBeVisible()
  })

  test('modal não fecha ao clicar no conteúdo', async ({ page }) => {
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    await page.click('text=Adicionar ao Carrinho')
    const modal = page.locator('[data-testid="modal"]')
    await expect(modal).toBeVisible()

    const modalButton = modal.locator(
      'button:has-text("Adicionar ao carrinho")'
    )
    await modalButton.click()

    await expect(modal).toBeVisible()
  })

  test('modal tem z-index alto', async ({ page }) => {
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    await page.click('text=Adicionar ao Carrinho')

    const modal = page.locator('[data-testid="modal"]')
    const zIndex = await modal.evaluate((el) => {
      return window.getComputedStyle(el).zIndex
    })

    expect(parseInt(zIndex)).toBeGreaterThan(1000)
  })
})
