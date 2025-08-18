import CardList from '@/components/layout/CardList'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const goToRestaurant = () => {
    navigate('/restaurant')
  }

  return (
    <CardList
      $lgPercent={25}
      $textDarkTheme="tertiary"
      buttonTxt="Adicionar"
      onClick={goToRestaurant}
    />
  )
}

export default Home
