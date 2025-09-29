import { test, expect } from '@playwright/test'
import { HomePage, RestaurantPage } from '../fixtures/page-objects'
import { TestHelpers } from '../utils/helpers'
import { TEST_DATA } from '../fixtures/test-data'
import { setupApiMock } from '../fixtures/api-mock'

test.describe('Navegação e Roteamento', () => {
  let homePage: HomePage
  let restaurantPage: RestaurantPage
  let helpers: TestHelpers

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    restaurantPage = new RestaurantPage(page)
    helpers = new TestHelpers(page)
    await setupApiMock(page)
  })

  test('Navegação da Home para Restaurant', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await helpers.assertCurrentUrl(TEST_DATA.HOME_URL)
    expect(await homePage.page.title()).toBeTruthy()

    await homePage.clickLearnMoreButton(0)

    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
  })

  test('Navegação da Restaurant para Home', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)

    await page.goto(TEST_DATA.HOME_URL)
    await homePage.waitForLoad()

    await helpers.assertCurrentUrl(TEST_DATA.HOME_URL)
  })

  test('URL correta em cada página', async ({ page }) => {
    await homePage.goto()
    await helpers.assertCurrentUrl(TEST_DATA.HOME_URL)
    expect(page.url()).toBe(`${TEST_DATA.BASE_URL}${TEST_DATA.HOME_URL}`)

    await restaurantPage.goto()
    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    expect(page.url()).toBe(`${TEST_DATA.BASE_URL}${TEST_DATA.RESTAURANT_URL}`)
  })

  test('Botão voltar do navegador funciona', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await homePage.clickLearnMoreButton(0)
    await restaurantPage.waitForLoad()

    await page.goBack()

    await helpers.assertCurrentUrl(TEST_DATA.HOME_URL)
    await expect(homePage.logo).toBeVisible()
  })

  test('Refresh da página mantém rota', async ({ page }) => {
    await restaurantPage.goto()
    await restaurantPage.waitForLoad()

    await page.reload()
    await page.waitForLoadState('domcontentloaded')

    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
  })

  test('Navegação direta por URL', async ({ page }) => {
    await page.goto(`${TEST_DATA.BASE_URL}${TEST_DATA.HOME_URL}`)
    await homePage.waitForLoad()
    await expect(homePage.logo).toBeVisible()

    await page.goto(`${TEST_DATA.BASE_URL}${TEST_DATA.RESTAURANT_URL}`)
    await restaurantPage.waitForLoad()
    await expect(restaurantPage.title).toBeVisible()
  })

  test('Navegação com múltiplas páginas', async ({ page }) => {
    await homePage.goto()
    await homePage.clickLearnMoreButton(0)
    await page.goBack()

    await helpers.assertCurrentUrl(TEST_DATA.HOME_URL)
    await expect(homePage.logo).toBeVisible()

    await homePage.clickLearnMoreButton(0)
    await page.goBack()
    await homePage.clickLearnMoreButton(0)

    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    await expect(restaurantPage.title).toBeVisible()
  })

  test('Histórico de navegação funciona corretamente', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await homePage.clickLearnMoreButton(0)
    await restaurantPage.waitForLoad()

    await page.goBack()
    await homePage.waitForLoad()

    await page.goForward()
    await restaurantPage.waitForLoad()

    await helpers.assertCurrentUrl(TEST_DATA.RESTAURANT_URL)
    await expect(restaurantPage.title).toBeVisible()
  })

  test('Navegação com teclado', async ({ page }) => {
    await homePage.goto()
    await homePage.waitForLoad()

    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    await page.keyboard.press('Enter')

    await page.waitForTimeout(1000)
    expect(page.url()).toContain('/restaurant')
  })

  test('Navegação não quebra com múltiplas abas', async ({ page, context }) => {
    const homePage2 = await context.newPage()
    const homePage2Obj = new HomePage(homePage2)
    await homePage2Obj.goto()

    await homePage.goto()
    await homePage.clickLearnMoreButton(0)
    await page.waitForTimeout(1000)

    await expect(homePage2Obj.cards.first()).toBeVisible()
    expect(homePage2.url()).toContain(TEST_DATA.HOME_URL)

    await homePage2.close()
  })
})
