import styled from 'styled-components'

export const Header = styled.h2`
  font-size: 18px;
  width: 20rem;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    width: 18rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 14rem;
  }
`
