import CardList, { type CardData } from '@/components/layout/CardList'
import hioki from '@assets/images/hioki.png'

const Restaurant = () => {
  const cardsData: CardData[] = [
    {
      id: '1',
      image: hioki,
      name: 'Sushi Salmão',
      description: 'Sushi de salmão fresco com arroz temperado e alga nori.'
    },
    {
      id: '2',
      image: hioki,
      name: 'Temaki Especial',
      description:
        'Temaki com camarão, salmão e pepino, envolvido em alga nori.'
    },
    {
      id: '3',
      image: hioki,
      name: 'Sashimi Mix',
      description: 'Seleção de sashimis de salmão, atum e peixe branco.'
    },
    {
      id: '4',
      image: hioki,
      name: 'Combo Sushi',
      description: 'Combo completo com sushis, sashimis e temaki.'
    }
  ]

  return (
    <>
      <CardList
        cards={cardsData}
        $lgButtonPercent={100}
        $lightTheme="tertiary"
        $textColor="secondary"
        $textDarkTheme="tertiary"
        buttonTxt="Adicionar"
        $buttonTextColor="tertiary"
        $buttonColor="primary"
      />
    </>
  )
}

export default Restaurant
