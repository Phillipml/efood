import Text from '../Text'
import { InputWraper, InputStyled } from './styles'

function Input({ label }: { label: string }) {
  return (
    <InputWraper>
      <label>
        <Text
          as="title"
          $lgFontSize="md"
          $textDarkTheme="tertiary"
          $textLightTheme="secondary"
        >
          {label}
        </Text>
      </label>
      <InputStyled />
    </InputWraper>
  )
}

export default Input
