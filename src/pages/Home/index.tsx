import CardList from '@/components/layout/CardList'
import { useNavigate } from 'react-router-dom'
import { GetData } from '@/services/api'
import { useEffect, useState } from 'react'
import type { RestaurantList } from '@/types'
import Card from '@/components/ui/Card'
import Loading from '@/components/ui/Loading'

const Home = () => {
  const [info, setInfo] = useState<RestaurantList[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const goToRestaurant = (idRestaurant: number) => {
    navigate(`/restaurant/${idRestaurant}`)
  }
  const clientList = async () => {
    setIsLoading(true)
    const data = await GetData()
    setInfo(data)
    setIsLoading(false)
  }
  useEffect(() => {
    clientList()
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <div>
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
            $lgButtonPercent={24}
            $mdButtonPercent={32}
            onClick={() => goToRestaurant(info.id)}
          />
        ))}
      </CardList>
    </div>
  )
}

export default Home
