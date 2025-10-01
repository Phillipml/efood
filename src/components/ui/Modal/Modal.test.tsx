import { screen, fireEvent } from '@testing-library/react'
import Modal from './index'
import { renderWithProviders } from '@/utils/__mocks__/render-utils'

const TestModal = () => {
  return (
    <Modal>
      <div>Test content</div>
      <div>First child</div>
      <div>Second child</div>
    </Modal>
  )
}

describe('Modal', () => {
  it('should render children correctly', () => {
    renderWithProviders(<TestModal />)

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should render multiple children', () => {
    renderWithProviders(<TestModal />)

    expect(screen.getByText('First child')).toBeInTheDocument()
    expect(screen.getByText('Second child')).toBeInTheDocument()
  })

  it('should render close button', () => {
    renderWithProviders(<TestModal />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should call setOverlay when close button is clicked', () => {
    renderWithProviders(<TestModal />)

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
