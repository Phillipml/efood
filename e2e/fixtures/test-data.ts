export const TEST_DATA = {
  BASE_URL: 'http://localhost:3000',
  HOME_URL: '/',
  RESTAURANT_URL: '/restaurant/1',

  TEXTS: {
    HOME: {
      TITLE: 'Bella Tavola Italiana',
      SUBTITLE: 'Peça já o melhor da culinária italiana',
      LOGO_ALT: 'logo'
    },
    RESTAURANT: {
      TITLE: 'Restaurantes',
      CART_COUNTER: '0 produto(s) no carrinho',
      ADD_BUTTON: 'Adicionar',
      LEARN_MORE_BUTTON: 'Saiba Mais'
    },
    THEME: {
      LIGHT_MODE: 'Modo Claro',
      DARK_MODE: 'Modo Escuro'
    }
  },

  SELECTORS: {
    HEADER: 'header',
    FOOTER: 'footer',
    LOGO: 'img[alt*="logo"], img[alt*="Logo"]',
    THEME_BUTTON: 'button.sc-bRKDuR',
    CARD_LIST: 'div:has-text("Bella Tavola Italiana")',
    CARD: 'div:has-text("Bella Tavola Italiana")',
    RESTAURANT_HEADER: 'header',
    CART_COUNTER: 'text=/carrinho/',
    ADD_BUTTON: 'button:has-text("Adicionar")',
    LEARN_MORE_BUTTON: 'button:has-text("Saiba Mais")'
  },

  RESTAURANTS: [
    {
      id: '1',
      name: 'Bella Tavola Italiana',
      rating: 4.7,
      description: 'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
      image: '/images/laDolce.png'
    },
    {
      id: '2',
      name: 'Hioki Sushi',
      rating: 4.9,
      description: 'Peça já o melhor da culinária japonesa no delivery. Da nossa cozinha para a sua casa, frescor, sabor e qualidade em cada pedaço.',
      image: '/images/hioki.png'
    }
  ],

  BREAKPOINTS: {
    MOBILE: { width: 375, height: 667 },
    TABLET: { width: 768, height: 1024 },
    DESKTOP: { width: 1920, height: 1080 }
  },

  TIMEOUTS: {
    DEFAULT: 5000,
    NAVIGATION: 10000,
    PERFORMANCE: 9000
  }
} as const

export type TestData = typeof TEST_DATA
