import CardList from '@/components/layout/CardList'
import { useNavigate } from 'react-router-dom'
import { GetData } from '@/services/api'
import { useEffect, useState } from 'react'
import type { RestaurantList } from '@/types'
import Card from '@/components/ui/Card'

const Home = () => {
  const [info, setInfo] = useState<RestaurantList[] | null>(null)
  const navigate = useNavigate()
  const goToRestaurant = (idRestaurant: number) => {
    navigate(`/restaurant/${idRestaurant}`)
  }
  const clientList = async () => {
    const data = await GetData()
    setInfo(data)
  }
  useEffect(() => {
    clientList()
  }, [])

  return (
    <CardList>
      {info?.map((info, i) => (
        <Card
          key={i}
          image={info.capa}
          name={info.titulo}
          isFeatured={info.destacado}
          description={info.descricao}
          rating={info.avaliacao}
          foodType={info.tipo}
          buttonTxt="Saiba Mais"
          onClick={() => goToRestaurant(info.id)}
        />
      ))}
    </CardList>
  )
}

export default Home
