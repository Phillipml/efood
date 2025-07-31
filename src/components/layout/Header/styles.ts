import { MainContainer } from '@/styles/reset'
import headerBackground from '@assets/images/header-bg.png'
import { pxToRem } from '@utils/size-utils'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${pxToRem('padding', { lgScreen: 2 })};
  color: ${({ theme }) => theme.tertiary};
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: center;
`
export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
