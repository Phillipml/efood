import { FaMoon, FaSun } from 'react-icons/fa6'
import { ThemeBtn } from './styles'
type ThemeButtonTypes = {
  onClick: () => void
  isDarkTheme: boolean
}
const ThemeButton = ({ onClick, isDarkTheme }: ThemeButtonTypes) => {
  return (
    <>
      <ThemeBtn onClick={onClick}>
        {isDarkTheme ? <FaMoon /> : <FaSun />}
      </ThemeBtn>
    </>
  )
}
export default ThemeButton
