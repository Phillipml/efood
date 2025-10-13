import Text from '../Text'
import { InputWraper, InputStyled } from './styles'
import { useMask } from '@react-input/mask'

interface InputProps {
  label: string
  mask?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string

  $hasError?: boolean
}

function Input({ 
  label, 
  mask, 
  value = '', 
  onChange, 
  name,
  $hasError = false
}: InputProps) {
  const inputRef = useMask({
    mask: mask || '',
    replacement: { _: /\d/ },
    showMask: false,
    separate: false
  })

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
      <InputStyled 
        ref={mask ? inputRef : undefined}
        value={value}
        onChange={onChange}
        name={name}

        $hasError={$hasError}
      />
    </InputWraper>
  )
}

export default Input
