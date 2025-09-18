import { $darkTheme, $lightTheme } from '@/styles/theme'
import { mockDarkTheme, mockLightTheme } from './__mocks__/themes'
import { setColor } from './color-utils'

describe('color-utils', () => {
  describe('setColor', () => {
    describe('Identificação de tema', () => {
      it('identifica tema claro corretamente', () => {
        const result = setColor(mockLightTheme, { unique: 'primary' })
        expect(result).toBe('#FFF8F2;')
      })
      it('identifica tema escuro corretamente', () => {
        const result = setColor(mockDarkTheme, { unique: 'primary' })
        expect(result).toBe('#4B0D0D;')
      })
    })
    describe('Retorna cor única do tema', () => {
      it('retorna cor específica do tema atual', () => {
        const result = setColor(mockLightTheme, { unique: 'quaternary' })
        expect(result).toBe('#FFB930;')
      })
      it('retorna cor primária como fallback do tema atual, por nao ter parametros', () => {
        expect(setColor(mockLightTheme, {})).toBe('#FFF8F2;')
        expect(setColor(mockDarkTheme, {})).toBe('#4B0D0D;')
      })
      it('retorna cor correta para cada variante', () => {
        expect(setColor(mockLightTheme, { unique: 'primary' })).toBe('#FFF8F2;')
        expect(setColor(mockLightTheme, { unique: 'secondary' })).toBe(
          '#FFEBD9;'
        )
        expect(setColor(mockLightTheme, { unique: 'tertiary' })).toBe(
          '#E66767;'
        )
        expect(setColor(mockLightTheme, { unique: 'quaternary' })).toBe(
          '#FFB930;'
        )
        expect(setColor(mockLightTheme, { unique: 'quinary' })).toBe('#FFFFFF')
      })
    })
    describe('Comportamento com light theme', () => {
      it('retorna cor light no tema claro quando light é especificado', () => {
        const result = setColor(mockLightTheme, {
          unique: 'primary',
          light: 'tertiary'
        })
        expect(result).toBe('#E66767;')
      })

      it('retorna cor unique no tema escuro quando light é especificado', () => {
        const result = setColor(mockDarkTheme, {
          unique: 'primary',
          light: 'tertiary'
        })
        expect(result).toBe('#4B0D0D;')
      })
    })

    describe('Comportamento com dark theme', () => {
      it('retorna cor dark no tema escuro quando dark é especificado', () => {
        const result = setColor(mockDarkTheme, {
          unique: 'primary',
          dark: 'secondary'
        })
        expect(result).toBe('#E66767;')
      })

      it('retorna cor unique no tema claro quando dark é especificado', () => {
        const result = setColor(mockLightTheme, {
          unique: 'primary',
          dark: 'secondary'
        })
        expect(result).toBe('#FFF8F2;')
      })
    })

    describe('Comportamento com dark e light especificados', () => {
      it('retorna cor dark no tema escuro quando ambos são especificados', () => {
        const result = setColor(mockDarkTheme, {
          unique: 'primary',
          dark: 'secondary',
          light: 'tertiary'
        })
        expect(result).toBe('#E66767;')
      })

      it('retorna cor light no tema claro quando ambos são especificados', () => {
        const result = setColor(mockLightTheme, {
          unique: 'primary',
          dark: 'secondary',
          light: 'tertiary'
        })
        expect(result).toBe('#E66767;')
      })
    })

    describe('Casos edge', () => {
      it('retorna undefined para variante inexistente', () => {
        const result = setColor(mockLightTheme, {
          unique: 'inexistente'
        })
        expect(result).toBeUndefined()
      })
    })

    describe('Integração com temas reais', () => {
      it('funciona com $lightTheme real', () => {
        const result = setColor($lightTheme, { unique: 'primary' })
        expect(result).toBe('#FFF8F2;')
      })

      it('funciona com $darkTheme real', () => {
        const result = setColor($darkTheme, { unique: 'primary' })
        expect(result).toBe('#4B0D0D;')
      })
    })
  })
})
