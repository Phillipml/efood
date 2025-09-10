import CardList from '@/components/layout/CardList'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const goToRestaurant = () => {
    navigate('/restaurant')
  }

  return (
    <CardList
      $buttonSize={25}
      $textDarkTheme="tertiary"
      buttonTxt="Saiba Mais"
      onClick={goToRestaurant}
    />
  )
}

export default Home
