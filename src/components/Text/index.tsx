import type { FontSizeProps } from '@/types/FontSizeProps'
import type { ColorsVariants } from '@/types/theme-types'
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
  variant = 'primary',
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
          variant={variant}
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
          variant={variant}
          alignCenter={alignCenter}
        >
          {children}
        </TextContent>
      )}
    </>
  )
}
export default Text
