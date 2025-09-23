import CardList, { type CardData } from '@/components/layout/CardList'
import { useNavigate } from 'react-router-dom'
import hioki from '@assets/images/hioki.png'

const Home = () => {
  const navigate = useNavigate()
  const goToRestaurant = () => {
    navigate('/restaurant')
  }

  const cardsData: CardData[] = [
    {
      id: '1',
      image: hioki,
      name: 'Hioki Sushi',
      rating: 4.9,
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
      isFeatured: true,
      foodType: 'Japonês'
    },
    {
      id: '2',
      image: hioki,
      name: 'Pizza Palace',
      rating: 4.7,
      description:
        'As melhores pizzas artesanais da cidade! Massa fina, ingredientes frescos e sabores únicos.',
      foodType: 'Italiano'
    },
    {
      id: '3',
      image: hioki,
      name: 'Burger King',
      rating: 4.5,
      description:
        'Hambúrgueres suculentos e batatas crocantes. O sabor que você conhece e confia.',
      isFeatured: true
    },
    {
      id: '4',
      image: hioki,
      name: 'Taco Bell',
      rating: 4.3,
      description:
        'Autêntica culinária mexicana com temperos marcantes e sabores únicos.',
      foodType: 'Mexicano'
    },
    {
      id: '5',
      image: hioki,
      name: 'Sushi Master',
      rating: 4.8,
      description:
        'Técnicas tradicionais japonesas com ingredientes premium e apresentação impecável.',
      isFeatured: true,
      foodType: 'Japonês'
    },
    {
      id: '6',
      image: hioki,
      name: 'Pasta House',
      rating: 4.6,
      description:
        'Massas frescas feitas na hora com molhos caseiros e ingredientes importados.',
      foodType: 'Italiano'
    }
  ]

  return (
    <CardList
      cards={cardsData}
      $lgButtonPercent={24}
      $mdButtonPercent={28}
      $textDarkTheme="tertiary"
      buttonTxt="Saiba Mais"
      onClick={goToRestaurant}
    />
  )
}

export default Home
