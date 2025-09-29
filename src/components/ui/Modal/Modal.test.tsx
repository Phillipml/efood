import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './index'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (node: React.ReactNode) => node
}))

Object.defineProperty(document, 'getElementById', {
  value: jest.fn(() => ({
    appendChild: jest.fn(),
    removeChild: jest.fn()
  }))
})

describe('Modal Component', () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it('does not render when $isOpen is false', () => {
    render(
      <Modal $isOpen={false} onClose={mockOnClose} $justifyContent="center">
        <div>Conteúdo do modal</div>
      </Modal>
    )

    expect(screen.queryByText('Conteúdo do modal')).not.toBeInTheDocument()
  })

  it('renderiza quando $isOpen é true', () => {
    render(
      <Modal $isOpen={true} onClose={mockOnClose} $justifyContent="center">
        <div>Conteúdo do modal</div>
      </Modal>
    )

    expect(screen.getByText('Conteúdo do modal')).toBeInTheDocument()
  })

  it('chama onClose quando clica no fundo', () => {
    render(
      <Modal $isOpen={true} onClose={mockOnClose} $justifyContent="center">
        <div>Conteúdo do modal</div>
      </Modal>
    )

    const modalWrapper =
      screen.getByText('Conteúdo do modal').parentElement?.parentElement
    fireEvent.click(modalWrapper!)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('não chama onClose quando clica no conteúdo', () => {
    render(
      <Modal $isOpen={true} onClose={mockOnClose} $justifyContent="center">
        <div>Conteúdo do modal</div>
      </Modal>
    )

    const modalContent = screen.getByText('Conteúdo do modal')
    fireEvent.click(modalContent)

    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('renderiza com justify-content correto', () => {
    render(
      <Modal $isOpen={true} onClose={mockOnClose} $justifyContent="end">
        <div>Conteúdo do modal</div>
      </Modal>
    )

    const modalWrapper =
      screen.getByText('Conteúdo do modal').parentElement?.parentElement
    expect(modalWrapper).toHaveStyle('justify-content: end')
  })
})
