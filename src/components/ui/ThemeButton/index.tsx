import { FaMoon, FaSun } from 'react-icons/fa6'
import { useThemeState } from '@/hooks/useTheme'
import { ThemeBtn } from './styles'
type ThemebuttonColorsVariants = {
  onClick: () => void
}
const ThemeButton = ({ onClick }: ThemebuttonColorsVariants) => {
  const { isDarkTheme } = useThemeState()
  return (
    <>
      <ThemeBtn onClick={onClick}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </ThemeBtn>
    </>
  )
}
export default ThemeButton
