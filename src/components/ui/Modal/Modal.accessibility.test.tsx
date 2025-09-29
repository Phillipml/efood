import { render, screen } from '@testing-library/react'
import Modal from './index'

describe('Modal Accessibility', () => {
  it('should have proper role attribute', () => {
    render(
      <Modal>
        <div role="dialog" aria-modal="true">
          Modal content
        </div>
      </Modal>
    )
    
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('should have accessible heading', () => {
    render(
      <Modal>
        <div role="dialog" aria-labelledby="modal-title">
          <h2 id="modal-title">Modal Title</h2>
          <p>Modal content</p>
        </div>
      </Modal>
    )
    
    const dialog = screen.getByRole('dialog')
    const heading = screen.getByRole('heading', { level: 2 })
    
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
    expect(heading).toHaveAttribute('id', 'modal-title')
  })

  it('should have proper aria-describedby', () => {
    render(
      <Modal>
        <div role="dialog" aria-describedby="modal-description">
          <h2>Modal Title</h2>
          <p id="modal-description">Modal description</p>
        </div>
      </Modal>
    )
    
    const dialog = screen.getByRole('dialog')
    const description = screen.getByText('Modal description')
    
    expect(dialog).toHaveAttribute('aria-describedby', 'modal-description')
    expect(description).toHaveAttribute('id', 'modal-description')
  })

  it('should have focusable elements', () => {
    render(
      <Modal>
        <div role="dialog">
          <h2>Modal Title</h2>
          <button>Close</button>
          <button>Save</button>
        </div>
      </Modal>
    )
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent('Close')
    expect(buttons[1]).toHaveTextContent('Save')
  })

  it('should support keyboard navigation', () => {
    render(
      <Modal>
        <div role="dialog" tabIndex={-1}>
          <h2>Modal Title</h2>
          <button tabIndex={0}>First Button</button>
          <button tabIndex={0}>Second Button</button>
        </div>
      </Modal>
    )
    
    const dialog = screen.getByRole('dialog')
    const buttons = screen.getAllByRole('button')
    
    expect(dialog).toHaveAttribute('tabIndex', '-1')
    buttons.forEach(button => {
      expect(button).toHaveAttribute('tabIndex', '0')
    })
  })
})
