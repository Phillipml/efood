import styled from 'styled-components'
import { mobile } from '@/styles/breakpoints'
import { MainContainer } from '@/styles/reset'

export const Container = styled(MainContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;
  ${mobile} {
    grid-template-columns: 1fr;
  }
`
