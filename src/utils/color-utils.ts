import type { Variant } from '@/types'
import type { DefaultTheme } from 'styled-components'

export const setColor = ( theme:DefaultTheme,
  {
  unique,
  dark,
  light,
}: {
  unique?: Variant
  dark?: Variant
  light?: Variant
  
}) => {
  const colors = {
    primary: `${theme.primary};`,
    secondary: `${theme.secondary};`,
    tertiary: `${theme.tertiary};`,
    quaternary: `${theme.quaternary};`,
    quinary: `${theme.quinary};`
  }

  const getColor = (variant: string) => {
    return Object.entries(colors).find(([color]) => color === variant)?.[1]
  }
  const isLightTheme = theme.primary === '#FFF8F2'
  const isDarkTheme = theme.primary === '#4B0D0D'
  switch (true) {
    case !dark && !light:
      return getColor(unique || 'primary')

    case !dark && !!light:
      return isLightTheme
        ? getColor(light!)
        : getColor(unique || 'primary')

    case !!dark && !light:
      return isDarkTheme
        ? getColor(dark!)
        : getColor(unique || 'primary')

    case !!dark && !!light:
      return isDarkTheme ? getColor(dark!) : getColor(light!)

    default:
      return getColor(unique || 'primary')
  }
}