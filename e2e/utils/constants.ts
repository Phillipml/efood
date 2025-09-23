export const TEST_CONSTANTS = {
  TIMEOUTS: {
    SHORT: 1000,
    MEDIUM: 3000,
    LONG: 5000,
    VERY_LONG: 10000
  },

  VIEWPORTS: {
    MOBILE: { width: 375, height: 667 },
    MOBILE_LARGE: { width: 414, height: 896 },
    TABLET: { width: 768, height: 1024 },
    TABLET_LARGE: { width: 1024, height: 768 },
    DESKTOP: { width: 1920, height: 1080 },
    DESKTOP_LARGE: { width: 2560, height: 1440 }
  },

  PERFORMANCE: {
    MAX_LOAD_TIME: 3000,
    MAX_INTERACTION_TIME: 100,
    MIN_LIGHTHOUSE_SCORE: 90
  },

  ACCESSIBILITY: {
    MIN_CONTRAST_RATIO: 4.5,
    REQUIRED_ARIA_ROLES: ['button', 'navigation', 'main', 'contentinfo'],
    REQUIRED_HEADINGS: ['h1', 'h2']
  },

  RESPONSIVE: {
    BREAKPOINTS: {
      MOBILE: 480,
      TABLET: 768,
      DESKTOP: 1024
    },
    MIN_TOUCH_TARGET_SIZE: 44
  },

  NAVIGATION: {
    MAX_REDIRECTS: 5,
    MAX_WAIT_FOR_NAVIGATION: 10000
  },

  THEME: {
    LIGHT_CLASS: 'light',
    DARK_CLASS: 'dark',
    TRANSITION_DURATION: 300
  },

  TEST: {
    RETRY_ATTEMPTS: 3,
    PARALLEL_WORKERS: 4,
    REPORT_FORMAT: 'html'
  }
} as const

export type TestConstants = typeof TEST_CONSTANTS
