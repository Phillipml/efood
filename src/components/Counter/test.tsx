import { render, screen } from '@utils/test-utils'
import { act } from 'react'
import Counter from '.'

describe('Counter', () => {
  it('Should render correctly', () => {
    act(() => {
      render(<Counter />)
    })
    const counter = screen.getByTestId('counter-view')
    const button = screen.getByRole('button', { name: /increment/i })
    expect(counter).toHaveTextContent('0')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(counter).toHaveTextContent('1')
  })
})
