import { expect, Locator, Page } from '@playwright/test'
import { TEST_DATA } from './test-data'

export class HomePage {
  readonly page: Page
  readonly header: Locator
  readonly footer: Locator
  readonly logo: Locator
  readonly themeButton: Locator
  readonly cardList: Locator
  readonly cards: Locator
  readonly learnMoreButtons: Locator

  constructor(page: Page) {
    this.page = page
    this.header = page.locator('header')
    this.footer = page.locator('footer')
    this.logo = page.locator('img[alt*="logo"], img[alt*="Logo"]').first()
    this.themeButton = page
      .locator('button')
      .filter({ hasText: /theme|Theme|🌙|☀️/ })
      .or(page.locator('button[style*="position: fixed"]'))
      .or(page.locator('button').last())
    this.cardList = page.locator('[data-testid="card-list"]')
    this.cards = page.locator('[data-testid="card"]')
    this.learnMoreButtons = page
      .locator('button')
      .filter({ hasText: 'Saiba Mais' })
  }

  async goto() {
    await this.page.goto(TEST_DATA.HOME_URL)
  }

  async waitForLoad() {
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.waitForTimeout(500)
  }

  async clickThemeButton() {
    await this.themeButton.click()
  }

  async clickLearnMoreButton(index: number = 0) {
    await this.learnMoreButtons.nth(index).click()
  }

  async getCardCount() {
    return await this.cards.count()
  }

  async getCardText(index: number) {
    return await this.cards.nth(index).textContent()
  }

  async isThemeButtonVisible() {
    return await this.themeButton.isVisible()
  }

  async getCurrentTheme() {
    const body = this.page.locator('body')
    const classList = await body.getAttribute('class')
    return classList?.includes('dark') ? 'dark' : 'light'
  }
}

export class RestaurantPage {
  readonly page: Page
  readonly restaurantHeader: Locator
  readonly title: Locator
  readonly logo: Locator
  readonly cartCounter: Locator
  readonly cardList: Locator
  readonly cards: Locator
  readonly addButtons: Locator

  constructor(page: Page) {
    this.page = page
    this.restaurantHeader = page.locator('header')
    this.title = page
      .getByText('Restaurantes')
      .or(page.locator('h1, h2, h3').first())
    this.logo = page.locator('img[alt*="logo"], img[alt*="Logo"]').first()
    this.cartCounter = page
      .locator('text=/\\d+ produto\\(s\\) no carrinho/')
      .or(page.locator('text=/carrinho/'))
    this.cardList = page.locator('[data-testid="card-list"]')
    this.cards = page.locator('[data-testid="card"]')
    this.addButtons = page.locator('button').filter({ hasText: 'Adicionar' })
  }

  async goto() {
    await this.page.goto(TEST_DATA.RESTAURANT_URL)
  }

  async waitForLoad() {
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.waitForTimeout(500)
  }

  async clickAddButton(index: number = 0) {
    await this.addButtons.nth(index).click()
  }

  async getCartCounterText() {
    return await this.cartCounter.textContent()
  }

  async getCardCount() {
    return await this.cards.count()
  }

  async getCardText(index: number) {
    return await this.cards.nth(index).textContent()
  }
}

export class UIComponents {
  readonly page: Page
  readonly buttons: Locator
  readonly cards: Locator
  readonly texts: Locator

  constructor(page: Page) {
    this.page = page
    this.buttons = page.locator('button')
    this.cards = page.locator('[data-testid="card"]')
    this.texts = page.locator('p, h1, h2, h3, h4, h5, h6')
  }

  async getButtonCount() {
    return await this.buttons.count()
  }

  async clickButtonByText(text: string) {
    await this.page.getByRole('button', { name: text }).click()
  }

  async getButtonText(index: number) {
    return await this.buttons.nth(index).textContent()
  }

  async isButtonEnabled(index: number) {
    return await this.buttons.nth(index).isEnabled()
  }

  async getCardCount() {
    return await this.cards.count()
  }

  async getTextContent(index: number) {
    return await this.texts.nth(index).textContent()
  }
}
