import { Page } from '@playwright/test'

export const mockApiResponse = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'japonês',
    capa: 'https://via.placeholder.com/300x200',
    destacado: true,
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa!',
    cardapio: [
      {
        id: 1,
        nome: 'Sushi de Salmão',
        descricao: 'Sushi fresco de salmão com arroz temperado',
        foto: 'https://via.placeholder.com/200x150',
        preco: 25.90,
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 2,
        nome: 'Temaki de Atum',
        descricao: 'Cone de alga com atum fresco e arroz',
        foto: 'https://via.placeholder.com/200x150',
        preco: 18.90,
        porcao: 'Serve 1 pessoa'
      }
    ]
  },
  {
    id: 2,
    titulo: 'Pizza Palace',
    tipo: 'italiano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: true,
    avaliacao: 4.7,
    descricao: 'Pizza italiana autêntica com ingredientes frescos',
    cardapio: [
      {
        id: 3,
        nome: 'Pizza Margherita',
        descricao: 'Pizza com molho de tomate, mussarela e manjericão',
        foto: 'https://via.placeholder.com/200x150',
        preco: 35.90,
        porcao: 'Serve 2 pessoas'
      },
      {
        id: 4,
        nome: 'Pizza Quatro Queijos',
        descricao: 'Pizza com quatro tipos de queijo selecionados',
        foto: 'https://via.placeholder.com/200x150',
        preco: 42.90,
        porcao: 'Serve 2 pessoas'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Burger King',
    tipo: 'americano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: false,
    avaliacao: 4.5,
    descricao: 'Hambúrgueres deliciosos e suculentos',
    cardapio: [
      {
        id: 5,
        nome: 'Whopper',
        descricao: 'Hambúrguer com carne, alface, tomate e molho especial',
        foto: 'https://via.placeholder.com/200x150',
        preco: 19.90,
        porcao: 'Serve 1 pessoa'
      }
    ]
  },
  {
    id: 4,
    titulo: 'Taco Bell',
    tipo: 'mexicano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: true,
    avaliacao: 4.3,
    descricao: 'Sabores autênticos do México',
    cardapio: [
      {
        id: 6,
        nome: 'Taco de Carne',
        descricao: 'Taco com carne temperada e vegetais frescos',
        foto: 'https://via.placeholder.com/200x150',
        preco: 12.90,
        porcao: 'Serve 1 pessoa'
      }
    ]
  },
  {
    id: 5,
    titulo: 'Sushi Master',
    tipo: 'japonês',
    capa: 'https://via.placeholder.com/300x200',
    destacado: false,
    avaliacao: 4.8,
    descricao: 'Sushi artesanal com técnicas tradicionais',
    cardapio: [
      {
        id: 7,
        nome: 'Combo Sushi',
        descricao: 'Variedade de sushis e sashimis',
        foto: 'https://via.placeholder.com/200x150',
        preco: 45.90,
        porcao: 'Serve 2 pessoas'
      }
    ]
  },
  {
    id: 6,
    titulo: 'Pasta House',
    tipo: 'italiano',
    capa: 'https://via.placeholder.com/300x200',
    destacado: false,
    avaliacao: 4.6,
    descricao: 'Massas frescas e molhos caseiros',
    cardapio: [
      {
        id: 8,
        nome: 'Spaghetti Carbonara',
        descricao: 'Massa com molho de ovos, queijo e bacon',
        foto: 'https://via.placeholder.com/200x150',
        preco: 28.90,
        porcao: 'Serve 1 pessoa'
      }
    ]
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

