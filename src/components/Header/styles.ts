import headerBackground from '@assets/images/header-bg.png'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  color: ${({ theme }) => theme.tertiary};
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: center;
`
