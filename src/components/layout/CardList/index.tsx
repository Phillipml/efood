import Card from '@/components/ui/Card'
import { Container } from './styles'
import hioki from '@assets/images/hioki.png'
import laDolce from '@assets/images/laDolce.png'
type CardListType = {
  $lgPercent?: number
  inverted?: boolean
}

const CardList = ({ $lgPercent, inverted }: CardListType) => {
  return (
    <Container>
      <Card
        buttonTxt="Saiba Mais"
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating="4.9"
        $lgPercent={$lgPercent}
        inverted={inverted}
      />
      <Card
        buttonTxt="Saiba Mais"
        image={laDolce}
        name="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        rating="4.6"
        $lgPercent={$lgPercent}
        inverted={inverted}
      />
      <Card
        buttonTxt="Saiba Mais"
        image={laDolce}
        name="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        rating="4.6"
        $lgPercent={$lgPercent}
        inverted={inverted}
      />
      <Card
        buttonTxt="Saiba Mais"
        image={laDolce}
        name="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        rating="4.6"
        $lgPercent={$lgPercent}
        inverted={inverted}
      />
      <Card
        buttonTxt="Saiba Mais"
        image={laDolce}
        name="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        rating="4.6"
        $lgPercent={$lgPercent}
        inverted={inverted}
      />
      <Card
        buttonTxt="Saiba Mais"
        image={laDolce}
        name="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        rating="4.6"
        $lgPercent={$lgPercent}
        inverted={inverted}
      />
    </Container>
  )
}
export default CardList
