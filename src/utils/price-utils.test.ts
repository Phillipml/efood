import { priceFormatter } from './price-utils'

describe('priceFormatter', () => {
  it('should format valid price correctly', () => {
    const result = priceFormatter(10.50)
    expect(result).toMatch(/R\$\s*10,50/)
  })

  it('should format integer price correctly', () => {
    const result = priceFormatter(100)
    expect(result).toMatch(/R\$\s*100,00/)
  })

  it('should handle undefined price', () => {
    const result = priceFormatter(undefined)
    expect(result).toBe('undefined')
  })

  it('should format zero price correctly', () => {
    const result = priceFormatter(0)
    expect(result).toMatch(/R\$\s*0,00/)
  })

  it('should format large price correctly', () => {
    const result = priceFormatter(1234.56)
    expect(result).toMatch(/R\$\s*1\.234,56/)
  })
})
