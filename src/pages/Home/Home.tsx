import CardList from '@/components/layout/CardList'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const goToRestaurant = () => {
    navigate('/restaurant')
  }

  return (
    <CardList
      $buttonSize={14}
      $textDarkTheme="tertiary"
      buttonTxt="Saiba Mais"
      onClick={goToRestaurant}
    />
  )
}

export default Home
