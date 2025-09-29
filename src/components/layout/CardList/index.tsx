import { Container } from './styles'
import type { ReactNode } from 'react'

export type CardData = {
  children: ReactNode
  key?: number
}

const CardList = ({ children, key }: CardData) => {
  return <Container key={key} data-testid="card-list">{children}</Container>
}
export default CardList
