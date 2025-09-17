import styled, { createGlobalStyle } from 'styled-components'
import { $darkTheme } from '@/styles/theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
  body {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.secondary};
      
    }
    &::-webkit-scrollbar-thumb {
      border: 1px solid ${({ theme }) => theme.quaternary};
      background: ${$darkTheme.primary};
      box-shadow:  0 0px 20px 15px ${({ theme }) => theme.quaternary};
      border-radius: 10px;

    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.tertiary};
    }
  }
`
export default GlobalStyle
export const MainContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`
