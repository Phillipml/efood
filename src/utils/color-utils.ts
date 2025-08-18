import type { Variant } from '@/types'
import { useTheme } from 'styled-components'

export const setColor = ({
  unique,
  dark,
  light
}: {
  unique?: Variant
  dark?: Variant
  light?: Variant
}) => {
  const theme = useTheme()

  const colors = {
    primary: `${theme.primary};`,
    secondary: `${theme.secondary};`,
    tertiary: `${theme.tertiary};`,
    quaternary: `${theme.quaternary};`,
    quinary: `${theme.quinary}`
  }

  const getColor = (variant: string) => {
    return Object.entries(colors).find(([color]) => color === variant)?.[1]
  }

  switch (true) {
    case !dark && !light:
      return getColor(unique || 'primary')

    case !dark && !!light:
      return theme.primary === '#FFF8F2'
        ? getColor(light!)
        : getColor(unique || 'primary')

    case !!dark && !light:
      return theme.primary === '#4B0D0D'
        ? getColor(dark!)
        : getColor(unique || 'primary')

    case !!dark && !!light:
      return theme.primary === '#4B0D0D' ? getColor(dark!) : getColor(light!)

    default:
      return getColor(unique || 'primary')
  }
}
