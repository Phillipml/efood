import { fadeIn } from './styles-utils'

describe('styles-utils', () => {
  it('should return fadeIn animation string', () => {
    expect(fadeIn).toContain('animation: fadeIn 0.5s ease')
  })

  it('should contain keyframes definition', () => {
    expect(fadeIn).toContain('@keyframes fadeIn')
  })

  it('should contain opacity 0 at start', () => {
    expect(fadeIn).toContain('opacity: 0')
  })

  it('should contain opacity 1 at end', () => {
    expect(fadeIn).toContain('opacity: 1')
  })

  it('should be a string', () => {
    expect(typeof fadeIn).toBe('string')
  })
})
