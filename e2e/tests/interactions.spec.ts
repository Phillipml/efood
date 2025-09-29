import { test, expect } from '@playwright/test'
import { HomePage, RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'
import { setupApiMock } from '../fixtures/api-mock'

test.describe('Interações', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
    await setupApiMock(page)
  })

  test('Hover effects funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstCard = homePage.cards.first()
    await helpers.hoverElement(TEST_DATA.SELECTORS.CARD)

    await expect(firstCard).toBeVisible()
  })

  test('Click events são disparados', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const learnMoreButton = homePage.learnMoreButtons.first()
    await expect(learnMoreButton).toBeVisible()

    await learnMoreButton.click()
    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
  })

  test('Theme toggle é responsivo', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton
    const initialTheme = await homePage.getCurrentTheme()

    await themeButton.click()
    await page.waitForTimeout(500)

    const newTheme = await homePage.getCurrentTheme()
    expect(newTheme).not.toBe(initialTheme)

    await themeButton.click()
    await page.waitForTimeout(500)

    const finalTheme = await homePage.getCurrentTheme()
    expect(finalTheme).toBe(initialTheme)
  })

  test('Navegação entre páginas é suave', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await homePage.clickLearnMoreButton(0)
    await restaurantPage.waitForLoad()

    const endTime = Date.now()
    const navigationTime = endTime - startTime

    expect(navigationTime).toBeLessThan(2000)
  })

  test('Estados de loading (se houver)', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const loadingElements = page.locator(
      '[data-testid*="loading"], .loading, .spinner'
    )
    const loadingCount = await loadingElements.count()

    if (loadingCount > 0) {
      for (let i = 0; i < loadingCount; i++) {
        const loading = loadingElements.nth(i)
        await expect(loading).toBeVisible()
      }
    }
  })

  test('Múltiplos cliques não quebram', async ({ page }) => {
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

  test('Scroll interativo funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.scrollToBottom()
    await page.waitForTimeout(500)

    await helpers.scrollToTop()
    await page.waitForTimeout(500)

    await expect(homePage.header).toBeVisible()
  })

  test('Adicionar ao carrinho é responsivo', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    const addButton = restaurantPage.addButtons.first()
    if (await addButton.count() > 0) {
      await expect(addButton).toBeVisible()
      await addButton.click()
      await page.waitForTimeout(500)
    }
  })

  test('Teclado funciona corretamente', async ({ page }) => {
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

  test('Touch events funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const firstCard = homePage.cards.first()
    await firstCard.click()
    await page.waitForTimeout(500)

    await expect(firstCard).toBeVisible()
  })

  test('Drag and drop (se aplicável)', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const draggableElements = page.locator('[draggable="true"]')
    const draggableCount = await draggableElements.count()

    if (draggableCount > 0) {
      const firstDraggable = draggableElements.first()
      const boundingBox = await firstDraggable.boundingBox()

      if (boundingBox) {
        await page.mouse.move(
          boundingBox.x + boundingBox.width / 2,
          boundingBox.y + boundingBox.height / 2
        )
        await page.mouse.down()
        await page.mouse.move(boundingBox.x + 50, boundingBox.y + 50)
        await page.mouse.up()
      }
    }
  })

  test('Formulários respondem a input', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const inputs = page.locator('input, textarea')
    const inputCount = await inputs.count()

    for (let i = 0; i < Math.min(inputCount, 3); i++) {
      const input = inputs.nth(i)
      await input.focus()
      await input.type('teste')
      await page.waitForTimeout(100)

      const value = await input.inputValue()
      expect(value).toContain('teste')
    }
  })

  test('Modais abrem e fecham', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const modalTriggers = page.locator(
      '[data-testid*="modal"], [aria-haspopup="true"]'
    )
    const modalCount = await modalTriggers.count()

    if (modalCount > 0) {
      const firstModal = modalTriggers.first()
      await firstModal.click()
      await page.waitForTimeout(500)

      const modal = page.locator('[role="dialog"], .modal')
      await expect(modal).toBeVisible()

      const closeButton = modal.locator(
        '[aria-label*="close"], [aria-label*="fechar"], .close'
      )
      if ((await closeButton.count()) > 0) {
        await closeButton.first().click()
        await page.waitForTimeout(500)
        await expect(modal).not.toBeVisible()
      }
    }
  })

  test('Tooltips aparecem no hover', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const tooltipTriggers = page.locator('[title], [aria-describedby]')
    const tooltipCount = await tooltipTriggers.count()

    for (let i = 0; i < Math.min(tooltipCount, 3); i++) {
      const trigger = tooltipTriggers.nth(i)
      await trigger.hover()
      await page.waitForTimeout(500)

      const tooltip = page.locator('[role="tooltip"], .tooltip')
      if ((await tooltip.count()) > 0) {
        await expect(tooltip.first()).toBeVisible()
      }
    }
  })

  test('Dropdowns abrem e fecham', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const dropdowns = page.locator(
      'select, [role="combobox"], [aria-haspopup="listbox"]'
    )
    const dropdownCount = await dropdowns.count()

    for (let i = 0; i < Math.min(dropdownCount, 3); i++) {
      const dropdown = dropdowns.nth(i)
      await dropdown.click()
      await page.waitForTimeout(500)

      const options = page.locator('option, [role="option"]')
      if ((await options.count()) > 0) {
        await expect(options.first()).toBeVisible()
      }
    }
  })

  test('Checkboxes e radios funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const checkboxes = page.locator('input[type="checkbox"]')
    const radios = page.locator('input[type="radio"]')

    const checkboxCount = await checkboxes.count()
    for (let i = 0; i < Math.min(checkboxCount, 3); i++) {
      const checkbox = checkboxes.nth(i)
      await checkbox.click()
      await page.waitForTimeout(100)

      const isChecked = await checkbox.isChecked()
      expect(isChecked).toBe(true)
    }

    const radioCount = await radios.count()
    for (let i = 0; i < Math.min(radioCount, 3); i++) {
      const radio = radios.nth(i)
      await radio.click()
      await page.waitForTimeout(100)

      const isChecked = await radio.isChecked()
      expect(isChecked).toBe(true)
    }
  })

  test('Sliders funcionam', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const sliders = page.locator('input[type="range"]')
    const sliderCount = await sliders.count()

    for (let i = 0; i < Math.min(sliderCount, 3); i++) {
      const slider = sliders.nth(i)
      const initialValue = await slider.inputValue()

      await slider.fill('50')
      await page.waitForTimeout(100)

      const newValue = await slider.inputValue()
      expect(newValue).not.toBe(initialValue)
    }
  })

  test('Interações não causam erros', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const themeButton = homePage.themeButton
    await themeButton.click()
    await page.waitForTimeout(100)

    await helpers.assertNoConsoleErrors()
  })

  test('Performance de interações', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    const startTime = Date.now()

    await homePage.clickThemeButton()
    await homePage.clickLearnMoreButton(0)
    await page.goBack()
    await homePage.clickThemeButton()

    const endTime = Date.now()
    const totalTime = endTime - startTime

    expect(totalTime).toBeLessThan(5000)
  })
})
