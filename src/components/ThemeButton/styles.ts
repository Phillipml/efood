import styled from 'styled-components'

export const ThemeBtn = styled.button`
  position: fixed;
  bottom: 2vh;
  left: 2vw;
  display: flex;
  align-items: center;
  padding: 14px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.secondary};
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.tertiary};
  }
`
