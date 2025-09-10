import type { FontSizeProps, TextColorsVariants } from '@/types'
import { TextContent } from './styles'
export type TextProps = {
  children: React.ReactNode
  as?: 'p' | 'span' | 'title'
  $alignCenter?: boolean
} & FontSizeProps &
  TextColorsVariants
export const Text = ({
  children,
  as = 'p',
  $textColor = 'tertiary',
  $textDarkTheme,
  $textLightTheme,
  $alignCenter = false,
  $lgFontSize,
  $mdFontSize,
  $smFontSize
}: TextProps) => {
  return (
    <>
      {as === 'title' ? (
        <TextContent
          as="h2"
          $lgFontSize={$lgFontSize ?? 'xl'}
          $mdFontSize={$mdFontSize}
          $smFontSize={$smFontSize}
          $textColor={$textColor}
          $textDarkTheme={$textDarkTheme}
          $textLightTheme={$textLightTheme}
          $alignCenter={$alignCenter ?? true}
        >
          {children}
        </TextContent>
      ) : (
        <TextContent
          as={as}
          $lgFontSize={$lgFontSize}
          $mdFontSize={$mdFontSize}
          $smFontSize={$smFontSize}
          $textColor={$textColor}
          $textDarkTheme={$textDarkTheme}
          $textLightTheme={$textLightTheme}
          $alignCenter={$alignCenter}
        >
          {children}
        </TextContent>
      )}
    </>
  )
}
export default Text
