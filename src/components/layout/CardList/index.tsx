import Card, { type CardProps } from '@/components/ui/Card'
import { Container } from './styles'
import hioki from '@assets/images/hioki.png'

type cardListType = Omit<CardProps, 'image' | 'name' | 'rating' | 'description'>

const CardList = ({
  buttonTxt,
  $lgButtonPercent,
  $mdButtonPercent,
  $smButtonPercent,
  $defaultColor,
  $darkTheme = 'secondary',
  $lightTheme = 'primary',
  $buttonColor,
  $buttonDarkThemeColor,
  $buttonLightThemeColor,
  $buttonTextColor,
  $buttonTextDarkTheme,
  $buttonTextLightTheme,
  $textColor,
  $textDarkTheme,
  $textLightTheme,
  onClick
}: cardListType) => {
  return (
    <Container>
      <Card
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        $lgButtonPercent={$lgButtonPercent}
        $mdButtonPercent={$mdButtonPercent}
        $smButtonPercent={$smButtonPercent}
        $defaultColor={$defaultColor}
        $darkTheme={$darkTheme}
        $lightTheme={$lightTheme}
        $buttonColor={$buttonColor}
        $buttonDarkThemeColor={$buttonDarkThemeColor}
        $buttonLightThemeColor={$buttonLightThemeColor}
        buttonTxt={buttonTxt}
        $buttonTextColor={$buttonTextColor}
        $buttonTextDarkTheme={$buttonTextDarkTheme}
        $buttonTextLightTheme={$buttonTextLightTheme}
        $textColor={$textColor}
        $textDarkTheme={$textDarkTheme}
        $textLightTheme={$textLightTheme}
        onClick={onClick}
      />
      <Card
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        $lgButtonPercent={$lgButtonPercent}
        $mdButtonPercent={$mdButtonPercent}
        $smButtonPercent={$smButtonPercent}
        $defaultColor={$defaultColor}
        $darkTheme={$darkTheme}
        $lightTheme={$lightTheme}
        $buttonColor={$buttonColor}
        $buttonDarkThemeColor={$buttonDarkThemeColor}
        $buttonLightThemeColor={$buttonLightThemeColor}
        buttonTxt={buttonTxt}
        $buttonTextColor={$buttonTextColor}
        $buttonTextDarkTheme={$buttonTextDarkTheme}
        $buttonTextLightTheme={$buttonTextLightTheme}
        $textColor={$textColor}
        $textDarkTheme={$textDarkTheme}
        $textLightTheme={$textLightTheme}
        onClick={onClick}
      />
      <Card
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        $lgButtonPercent={$lgButtonPercent}
        $mdButtonPercent={$mdButtonPercent}
        $smButtonPercent={$smButtonPercent}
        $defaultColor={$defaultColor}
        $darkTheme={$darkTheme}
        $lightTheme={$lightTheme}
        $buttonColor={$buttonColor}
        $buttonDarkThemeColor={$buttonDarkThemeColor}
        $buttonLightThemeColor={$buttonLightThemeColor}
        buttonTxt={buttonTxt}
        $buttonTextColor={$buttonTextColor}
        $buttonTextDarkTheme={$buttonTextDarkTheme}
        $buttonTextLightTheme={$buttonTextLightTheme}
        $textColor={$textColor}
        $textDarkTheme={$textDarkTheme}
        $textLightTheme={$textLightTheme}
        onClick={onClick}
      />
      <Card
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        $lgButtonPercent={$lgButtonPercent}
        $mdButtonPercent={$mdButtonPercent}
        $smButtonPercent={$smButtonPercent}
        $defaultColor={$defaultColor}
        $darkTheme={$darkTheme}
        $lightTheme={$lightTheme}
        $buttonColor={$buttonColor}
        $buttonDarkThemeColor={$buttonDarkThemeColor}
        $buttonLightThemeColor={$buttonLightThemeColor}
        buttonTxt={buttonTxt}
        $buttonTextColor={$buttonTextColor}
        $buttonTextDarkTheme={$buttonTextDarkTheme}
        $buttonTextLightTheme={$buttonTextLightTheme}
        $textColor={$textColor}
        $textDarkTheme={$textDarkTheme}
        $textLightTheme={$textLightTheme}
        onClick={onClick}
      />
      <Card
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        $lgButtonPercent={$lgButtonPercent}
        $mdButtonPercent={$mdButtonPercent}
        $smButtonPercent={$smButtonPercent}
        $defaultColor={$defaultColor}
        $darkTheme={$darkTheme}
        $lightTheme={$lightTheme}
        $buttonColor={$buttonColor}
        $buttonDarkThemeColor={$buttonDarkThemeColor}
        $buttonLightThemeColor={$buttonLightThemeColor}
        buttonTxt={buttonTxt}
        $buttonTextColor={$buttonTextColor}
        $buttonTextDarkTheme={$buttonTextDarkTheme}
        $buttonTextLightTheme={$buttonTextLightTheme}
        $textColor={$textColor}
        $textDarkTheme={$textDarkTheme}
        $textLightTheme={$textLightTheme}
        onClick={onClick}
      />
      <Card
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        $lgButtonPercent={$lgButtonPercent}
        $mdButtonPercent={$mdButtonPercent}
        $smButtonPercent={$smButtonPercent}
        $defaultColor={$defaultColor}
        $darkTheme={$darkTheme}
        $lightTheme={$lightTheme}
        $buttonColor={$buttonColor}
        $buttonDarkThemeColor={$buttonDarkThemeColor}
        $buttonLightThemeColor={$buttonLightThemeColor}
        buttonTxt={buttonTxt}
        $buttonTextColor={$buttonTextColor}
        $buttonTextDarkTheme={$buttonTextDarkTheme}
        $buttonTextLightTheme={$buttonTextLightTheme}
        $textColor={$textColor}
        $textDarkTheme={$textDarkTheme}
        $textLightTheme={$textLightTheme}
        onClick={onClick}
      />
      <Card
        image={hioki}
        name="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        rating={4.9}
        $lgButtonPercent={$lgButtonPercent}
        $mdButtonPercent={$mdButtonPercent}
        $smButtonPercent={$smButtonPercent}
        $defaultColor={$defaultColor}
        $darkTheme={$darkTheme}
        $lightTheme={$lightTheme}
        $buttonColor={$buttonColor}
        $buttonDarkThemeColor={$buttonDarkThemeColor}
        $buttonLightThemeColor={$buttonLightThemeColor}
        buttonTxt={buttonTxt}
        $buttonTextColor={$buttonTextColor}
        $buttonTextDarkTheme={$buttonTextDarkTheme}
        $buttonTextLightTheme={$buttonTextLightTheme}
        $textColor={$textColor}
        $textDarkTheme={$textDarkTheme}
        $textLightTheme={$textLightTheme}
        onClick={onClick}
      />
    </Container>
  )
}
export default CardList
