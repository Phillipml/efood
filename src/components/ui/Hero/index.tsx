import { useEffect, useState } from 'react'
import { HeroContainer, RestaurantHero } from './styles'
import { useParams } from 'react-router-dom'
import { GetData } from '@/services/api'
import type { RestaurantList } from '@/types'
import Text from '../Text'

function Hero() {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantList | null>(null)

  useEffect(() => {
    const findRestaurant = async () => {
      const data = await GetData()
      const findRestaurant = data.find(
        (item: { id: number }) => item.id === Number(id)
      )
      setRestaurant(findRestaurant)
    }
    findRestaurant()
  }, [id])
  const typeFormatter = (name: string | undefined) => {
    return !name
      ? ''
      : name?.charAt(0).toUpperCase() + name?.slice(1).toLowerCase()
  }
  return (
    <RestaurantHero>
      <img
        src={restaurant?.capa}
        alt={`capa ${restaurant?.titulo}`}
        onLoad={(e) => (e.currentTarget.style.display = 'block')}
      />
      <HeroContainer>
        <Text $lgFontSize="xl">{typeFormatter(restaurant?.tipo)}</Text>
        <Text as="title" $lgFontSize="xl">
          {restaurant?.titulo}
        </Text>
      </HeroContainer>
    </RestaurantHero>
  )
}

export default Hero
