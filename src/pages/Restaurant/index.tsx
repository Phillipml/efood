import CardList from '@/components/layout/CardList'
const Restaurant = () => {
  return (
    <>
      <CardList
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
