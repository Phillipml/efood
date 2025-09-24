import CardList from '@/components/layout/CardList'
import Card from '@/components/ui/Card'
import { GetData } from '@/services/api'
import type { RestaurantList } from '@/types'
import { useEffect, useState } from 'react'

const Restaurant = () => {
  const [info, setInfo] = useState<RestaurantList[] | null>(null)
  const clientList = async () => {
    const data = await GetData()
    setInfo(data)
  }
  useEffect(() => {
    console.log(clientList())
  }, [])
  return (
    <>
      {info?.map((info, i) => (
        <CardList key={i}>
          <Card
            image={info.cardapio.foto}
            name={info.cardapio.nome}
            isFeatured={info.destacado}
            description={info.descricao}
            foodType={info.tipo}
            buttonTxt="Saiba Mais"
          />
        </CardList>
      ))}
    </>
  )
}

export default Restaurant
