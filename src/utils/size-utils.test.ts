import type { FontSizeOptions } from '@/types'
import { PercentSize, FontSize, pxToRem, ViewportSize } from './size-utils'
import { tablet, mobile } from '@/styles/breakpoints'

describe('size-utils', () => {
  describe('PercentSize', () => {
    it('gera CSS correto para lgScreen', () => {
      const result = PercentSize('width', { lgScreen: 80 })
      expect(result).toContain('width: 80%')
    })
    it('gera CSS correto para mdScreen', () => {
      const result = PercentSize('width', { mdScreen: 80 })
      expect(result).toContain(tablet)
      expect(result).toContain('width: 80%')
    })
    it('gera CSS correto para smScreen', () => {
      const result = PercentSize('width', { smScreen: 80 })
      expect(result).toContain('width: 100%')
      expect(result).toContain(mobile)
      expect(result).toContain('width: 80%')
    })
    it('gera fallbacks corretos', () => {
      const lgResult = PercentSize('width', {})
      expect(lgResult).toContain('width: 100%')
      const mdResult = PercentSize('width', { mdScreen: 50 })
      expect(mdResult).toContain('width: 100%')
      expect(mdResult).toContain(tablet)
      expect(mdResult).toContain('width: 50%')
      const smResult = PercentSize('width', { smScreen: 50 })
      expect(smResult).toContain('width: 100%')
      expect(smResult).toContain(mobile)
      expect(smResult).toContain('width: 50%')
      const allScreenResults = PercentSize('width', {
        lgScreen: 80,
        mdScreen: 70,
        smScreen: 50
      })
      expect(allScreenResults).toContain('width: 80%')
      expect(allScreenResults).toContain(tablet)
      expect(allScreenResults).toContain('width: 70%')
      expect(allScreenResults).toContain(mobile)
      expect(allScreenResults).toContain('width: 50%')
    })
  })
  describe('FontSize', () => {
    it('gera CSS correto para diferentes tamanhos', () => {
      const result = FontSize({
        lgScreen: 'xl',
        mdScreen: 'lg',
        smScreen: 'md'
      })

      expect(result).toContain('font-size: 2.25rem;')
      expect(result).toContain(tablet)
      expect(result).toContain('font-size: 1.125rem')
      expect(result).toContain(mobile)
      expect(result).toContain('font-size: 0.875rem')
    })

    it('usa fallback correto', () => {
      const result = FontSize({})

      expect(result).toContain('font-size: 0.875rem')
    })

    it('gera CSS correto para tamanhos válidos', () => {
      const sizes = ['sm', 'md', 'lg', 'xl'] as const
      const expectedValues = ['0.625rem', '0.875rem', '1.125rem', '2.25rem']

      sizes.forEach((size, index) => {
        const result = FontSize({ lgScreen: size })
        expect(result).toContain(`font-size: ${expectedValues[index]}`)
      })
    })

    it('trata tamanhos inválidos com fallback', () => {
      const result = FontSize({ lgScreen: 'invalid' as FontSizeOptions })
      expect(result).toContain('font-size: 0.875rem')
    })
  })

  describe('pxToRem', () => {
    it('converte pixels para rem corretamente', () => {
      const result = pxToRem('width', { lgScreen: 16 })

      expect(result).toContain('width: 1rem')
    })

    it('gera CSS responsivo correto', () => {
      const result = pxToRem('height', {
        lgScreen: 32,
        mdScreen: 24,
        smScreen: 16
      })

      expect(result).toContain('height: 2rem')
      expect(result).toContain('height: 1.5rem')
      expect(result).toContain('height: 1rem')
      expect(result).toContain(tablet)
      expect(result).toContain(mobile)
    })

    it('usa fallback de 1rem quando valor não fornecido', () => {
      const result = pxToRem('width', {})
      expect(result).toContain('width: 1rem')
    })

    it('converte valores decimais corretamente', () => {
      const result = pxToRem('width', { lgScreen: 8 })
      expect(result).toContain('width: 0.5rem')
    })
  })

  describe('ViewportSize', () => {
    it('gera CSS vw/vh correto', () => {
      const resultVw = ViewportSize('vw', { lgScreen: 50 })
      const resultVh = ViewportSize('vh', { lgScreen: 75 })

      expect(resultVw).toContain('width: 50vw;')
      expect(resultVh).toContain('heigth: 75vh;')
    })

    it('gera CSS responsivo correto', () => {
      const result = ViewportSize('vw', {
        lgScreen: 100,
        mdScreen: 80,
        smScreen: 60
      })

      expect(result).toContain('width: 100vw;')
      expect(result).toContain(tablet)
      expect(result).toContain('width: 80vw;')
      expect(result).toContain(mobile)
      expect(result).toContain('width: 60vw;')
    })

    it('usa fallback de 100vw/100vh quando valor não fornecido', () => {
      const resultVw = ViewportSize('vw', {})
      const resultVh = ViewportSize('vh', {})

      expect(resultVw).toContain('width: 100vw')
      expect(resultVh).toContain('heigth: 100vh')
    })

    it('gera CSS correto para diferentes breakpoints', () => {
      const result = ViewportSize('vh', {
        lgScreen: 100,
        mdScreen: 80
      })

      expect(result).toContain('heigth: 100vh;')
      expect(result).toContain('heigth: 80vh;')
      expect(result).toContain(tablet)
    })

    it('trata valores zero corretamente', () => {
      const result = ViewportSize('vw', { lgScreen: 0 })
      expect(result).toContain('width: 0vw;')
    })
  })
})
