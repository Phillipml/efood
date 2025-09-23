export const TEST_DATA = {
  BASE_URL: 'http://localhost:3000',
  HOME_URL: '/',
  RESTAURANT_URL: '/restaurant',

  TEXTS: {
    HOME: {
      TITLE: 'Hioki Sushi',
      SUBTITLE: 'Peça já o melhor da culinária japonesa',
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
    CARD_LIST: 'div:has-text("Hioki Sushi")',
    CARD: 'div:has-text("Hioki Sushi")',
    RESTAURANT_HEADER: 'header',
    CART_COUNTER: 'text=/carrinho/',
    ADD_BUTTON: 'button:has-text("Adicionar")',
    LEARN_MORE_BUTTON: 'button:has-text("Saiba Mais")'
  },

  RESTAURANTS: [
    {
      id: '1',
      name: 'Restaurante La Dolce Vita',
      rating: 4.8,
      description: 'Culinária italiana autêntica',
      image: '/images/laDolce.png'
    },
    {
      id: '2',
      name: 'Sushi Hioki',
      rating: 4.9,
      description: 'Sushi fresco e tradicional',
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
