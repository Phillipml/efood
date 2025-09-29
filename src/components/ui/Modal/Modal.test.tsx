import { render, screen } from '@testing-library/react'
import Modal from './index'

describe('Modal', () => {
  it('should render children correctly', () => {
    render(
      <Modal>
        <div>Test content</div>
      </Modal>
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should render multiple children', () => {
    render(
      <Modal>
        <div>First child</div>
        <div>Second child</div>
      </Modal>
    )

    expect(screen.getByText('First child')).toBeInTheDocument()
    expect(screen.getByText('Second child')).toBeInTheDocument()
  })


})
