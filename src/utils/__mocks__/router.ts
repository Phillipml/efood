import React from 'react'
import { mockNavigate, mockUseLocation } from './hooks'

export const mockReactRouter = {
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => mockUseLocation,
  MemoryRouter: ({ children }: { children: React.ReactNode }) => children,
  BrowserRouter: ({ children }: { children: React.ReactNode }) => children,
  Link: ({
    children,
    to,
    ...props
  }: {
    children: React.ReactNode
    to: string
    [key: string]: unknown
  }) => React.createElement('a', { href: to, ...props }, children)
}
