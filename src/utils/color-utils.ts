import { useTheme } from 'styled-components'
export const setColor = (variant: string) => {
  const theme = useTheme()
  const colors = {
    primary: theme.primary,
    secondary: theme.secondary,
    tertiary: theme.tertiary,
    quaternary: theme.quaternary
  }
  return (
    Object.entries(colors).find(([color]) => color === variant[1])?.[1] ||
    theme.primary
  )
}
