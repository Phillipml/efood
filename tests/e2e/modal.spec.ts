import { test, expect } from '@playwright/test'

test.describe('Modal E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('modal abre e fecha corretamente', async ({ page }) => {
    // Navegar para página do restaurante
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    // Clicar em um card para abrir modal
    await page.click('text=Adicionar ao Carrinho')

    // Verificar se modal está visível
    const modal = page.locator('[data-testid="modal"]')
    await expect(modal).toBeVisible()

    // Verificar se conteúdo do modal está presente (usar seletor mais específico)
    await expect(
      modal.locator('button:has-text("Adicionar ao carrinho")')
    ).toBeVisible()

    // Fechar modal clicando no fundo (fora do conteúdo)
    await modal.click({ position: { x: 50, y: 50 } })
    await expect(modal).not.toBeVisible()
  })

  test('modal fecha com tecla ESC', async ({ page }) => {
    // Navegar para página do restaurante
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    // Abrir modal
    await page.click('text=Adicionar ao Carrinho')
    const modal = page.locator('[data-testid="modal"]')
    await expect(modal).toBeVisible()

    // Pressionar ESC
    await page.keyboard.press('Escape')
    await expect(modal).not.toBeVisible()
  })

  test('modal não fecha ao clicar no conteúdo', async ({ page }) => {
    // Navegar para página do restaurante
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    // Abrir modal
    await page.click('text=Adicionar ao Carrinho')
    const modal = page.locator('[data-testid="modal"]')
    await expect(modal).toBeVisible()

    // Clicar no conteúdo do modal (usar seletor mais específico)
    const modalButton = modal.locator(
      'button:has-text("Adicionar ao carrinho")'
    )
    await modalButton.click()

    // Modal deve continuar visível
    await expect(modal).toBeVisible()
  })

  test('modal tem z-index alto', async ({ page }) => {
    // Navegar para página do restaurante
    await page.click('text=Saiba Mais')
    await page.waitForURL(/\/restaurant\/\d+/)

    // Abrir modal
    await page.click('text=Adicionar ao Carrinho')

    // Verificar z-index
    const modal = page.locator('[data-testid="modal"]')
    const zIndex = await modal.evaluate((el) => {
      return window.getComputedStyle(el).zIndex
    })

    expect(parseInt(zIndex)).toBeGreaterThan(1000)
  })
})
