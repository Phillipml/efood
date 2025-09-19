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
})
