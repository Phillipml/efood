import { Container } from './styles'
import type { ReactNode } from 'react'

export type CardData = {
  children: ReactNode
}

const CardList = ({ children }: CardData) => {
  return <Container data-testid="card-list">{children}</Container>
}
export default CardList
