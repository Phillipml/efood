import { FaMoon, FaSun } from 'react-icons/fa6'
import { useTheme } from 'styled-components'
import { ThemeBtn } from './styles'
type ThemeButtonProps = {
  onClick: () => void
}
const ThemeButton = ({ onClick }: ThemeButtonProps) => {
  const theme = useTheme()
  return (
    <>
      <ThemeBtn onClick={onClick}>
        {theme.primary === '#FFF8F2' ? <FaSun /> : <FaMoon />}
      </ThemeBtn>
    </>
  )
}
export default ThemeButton
