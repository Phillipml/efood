import CardList from '@/components/layout/CardList'
import Card from '@/components/ui/Card'
import Loading from '@/components/ui/Loading'
import { GetData } from '@/services/api'
import type { Menu } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '@/components/ui/Modal/index'
import { ModalContent } from './styles'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { priceFormatter } from '@/utils/price-utils'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Menu[] | null>(null)
  const [modalItem, setModalItem] = useState<Menu | null>(null)
  const [isOpen, setIsOpen] = useState(false)
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
  const modalOpenHandle = (item: Menu) => {
    setModalItem(item)
    setIsOpen(true)
  }
  const modalCloseHandle = () => {
    setModalItem(null)
    setIsOpen(false)
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Modal
        $isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        $justifyContent="center"
      >
        <ModalContent>
          <img src={modalItem?.foto} width={50} alt={modalItem?.nome} />
          <div>
            <Text as="title" $textColor="primary">
              {modalItem?.nome}
            </Text>
            <Text $textColor="primary">
              {modalItem?.descricao}
              <br />
              <br />
              {modalItem?.porcao}
            </Text>
            <Button
              onClick={() => modalCloseHandle}
              $buttonColor="primary"
              $buttonTextColor="tertiary"
              $lgButtonPercent={32}
              $smButtonPercent={80}
            >
              `Adicionar ao carrinho - {priceFormatter(modalItem?.preco)}`
            </Button>
          </div>
        </ModalContent>
      </Modal>
      <CardList>
        {restaurant?.map((restaurant, i) => (
          <Card
            key={i}
            image={restaurant.foto}
            name={restaurant.nome}
            description={restaurant.descricao}
            onClick={() => modalOpenHandle(restaurant)}
            buttonTxt="Adicionar ao Carrinho"
          />
        ))}
      </CardList>
    </>
  )
}

export default Restaurant
