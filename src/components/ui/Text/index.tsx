import type { FontSizeProps, ColorsVariants } from '@/types'
import { TextContent } from './styles'
export type TextProps = {
  children: React.ReactNode
  as?: 'p' | 'span' | 'title'
  alignCenter?: boolean
} & FontSizeProps &
  ColorsVariants
export const Text = ({
  children,
  as = 'p',
  color = 'tertiary',
  darkTheme,
  lightTheme,
  alignCenter = false,
  $lgFontSize,
  $mdFontSize,
  $smFontSize
}: TextProps) => {
  return (
    <>
      {as === 'title' ? (
        <TextContent
          as="h2"
          $lgFontSize={$lgFontSize}
          $mdFontSize={$mdFontSize}
          $smFontSize={$smFontSize}
          color={color}
          darkTheme={darkTheme}
          lightTheme={lightTheme}
          alignCenter={alignCenter}
        >
          {children}
        </TextContent>
      ) : (
        <TextContent
          as={as}
          $lgFontSize={$lgFontSize}
          $mdFontSize={$mdFontSize}
          $smFontSize={$smFontSize}
          color={color}
          darkTheme={darkTheme}
          lightTheme={lightTheme}
          alignCenter={alignCenter}
        >
          {children}
        </TextContent>
      )}
    </>
  )
}
export default Text
