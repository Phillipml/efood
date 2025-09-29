import { Page } from '@playwright/test'

export const mockApiResponse = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'japonês',
    capa: 'https://via.placeholder.com/300x200',
    destacado: true,
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa!'
  },
  {
    id: 2,
    titulo: 'Pizza Palace',
    tipo: 'italiano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: true,
    avaliacao: 4.7,
    descricao: 'Pizza italiana autêntica com ingredientes frescos'
  },
  {
    id: 3,
    titulo: 'Burger King',
    tipo: 'americano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: false,
    avaliacao: 4.5,
    descricao: 'Hambúrgueres deliciosos e suculentos'
  },
  {
    id: 4,
    titulo: 'Taco Bell',
    tipo: 'mexicano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: true,
    avaliacao: 4.3,
    descricao: 'Sabores autênticos do México'
  },
  {
    id: 5,
    titulo: 'Sushi Master',
    tipo: 'japonês',
    capa: 'https://via.placeholder.com/300x200',
    destacado: false,
    avaliacao: 4.8,
    descricao: 'Sushi artesanal com técnicas tradicionais'
  },
  {
    id: 6,
    titulo: 'Pasta House',
    tipo: 'italiano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: false,
    avaliacao: 4.6,
    descricao: 'Massas frescas e molhos caseiros'
  }
]

export async function setupApiMock(page: Page) {
  await page.route('**/ebac-fake-api.vercel.app/api/efood/restaurantes', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockApiResponse)
    })
  })
}

