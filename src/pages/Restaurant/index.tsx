import Card from '@/components/ui/Card'
import Loading from '@/components/ui/Loading'
import { GetData } from '@/services/api'
import type { Menu } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '@/components/ui/Modal'
import Hero from '@/components/ui/Hero'
import { useOverlay } from '@/hooks/useOverlay'
import { ItemsList } from './styles'
import SideMenu from '@/components/layout/SideMenu'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Menu[] | null>(null)
  const [modalItem, setModalItem] = useState<Menu | null>(null)
  const { showModal, showSideMenu } = useOverlay()
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const clientList = async () => {
      setIsLoading(true)
      const data = await GetData()
      const foundRestaurant = data?.find(
        (item: { id: number }) => item.id === Number(id)
      )
      const menu = foundRestaurant.cardapio
      setRestaurant(menu)
      setIsLoading(false)
    }
    clientList()
  }, [id])

  const modalOpenHandle = (item: Menu) => {
    setModalItem(item)
    showModal() 
  }

  const addToCartAndOpenSideMenu = () => {
    setModalItem(null) 
    showSideMenu() 
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Hero />
      <Modal 
        item={modalItem} 
        onAddToCart={addToCartAndOpenSideMenu} 
      />
      <SideMenu />
      <ItemsList>
        {restaurant?.map((restaurant, i) => (
          <Card
            key={i}
            image={restaurant.foto}
            name={restaurant.nome}
            description={restaurant.descricao}
            onClick={() => modalOpenHandle(restaurant)}
            buttonTxt="Adicionar ao Carrinho"
            $defaultColor="tertiary"
            $textColor="primary"
            $buttonColor="secondary"
            $buttonTextColor="tertiary"
          />
        ))}
      </ItemsList>
    </>
  )
}

export default Restaurant
