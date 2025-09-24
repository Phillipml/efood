import CardList from '@/components/layout/CardList'
import Card from '@/components/ui/Card'
import Loading from '@/components/ui/Loading'
import { GetData } from '@/services/api'
import type { Menu } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Menu[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const clientList = async () => {
      setIsLoading(true)
      const data = await GetData()
      const foundRestaurant = data?.find(
        (item: { id: number }) => item.id === Number(id)
      )
      const final = foundRestaurant.cardapio
      setRestaurant(final)
      setIsLoading(false)
    }
    clientList()
  }, [id])

  return isLoading ? (
    <Loading />
  ) : (
    <CardList>
      {restaurant?.map((restaurant, i) => (
        <Card
          key={i}
          image={restaurant.foto}
          name={restaurant.nome}
          description={restaurant.descricao}
          buttonTxt="Adicionar ao Carrinho"
        />
      ))}
    </CardList>
  )
}

export default Restaurant
