import Card from '@/components/ui/Card'
import Loading from '@/components/ui/Loading'
import { GetData } from '@/services/api'
import type { Menu } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Overlay from '@/components/layout/Overlay/index'
import Modal from '@/components/ui/Modal'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { priceFormatter } from '@/utils/price-utils'
import Hero from '@/components/ui/Hero'
import { useOverlay } from '@/hooks/useOverlay'
import { ItemsList } from './styles'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Menu[] | null>(null)
  const [modalItem, setModalItem] = useState<Menu | null>(null)
  const [, setOverlay] = useOverlay()
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
    setOverlay()
  }

  const modalCloseHandle = () => {
    setModalItem(null)
    setOverlay()
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Hero />
      <Overlay $justifyContent="center">
        <Modal>
          <img src={modalItem?.foto} width={50} alt={modalItem?.nome} />
          <div>
            <Text as="title" $textColor="primary" $smFontSize="lg">
              {modalItem?.nome}
            </Text>
            <Text $textColor="primary">
              {modalItem?.descricao}
              <br />
              <br />
              {modalItem?.porcao}
            </Text>
            <Button
              onClick={modalCloseHandle}
              $buttonColor="secondary"
              $buttonTextColor="tertiary"
              $lgButtonPercent={34}
              $smButtonPercent={80}
            >
              Adicionar ao carrinho - {priceFormatter(modalItem?.preco)}
            </Button>
          </div>
        </Modal>
      </Overlay>
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
