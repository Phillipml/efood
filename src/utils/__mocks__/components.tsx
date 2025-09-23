import React from 'react'

export const MockHeader = () => <div data-testid="header">Header</div>

export const MockFooter = () => <div data-testid="footer">Footer</div>

export const MockCardList = ({
  buttonTxt,
  onClick
}: {
  buttonTxt: string
  onClick?: () => void
}) => (
  <div data-testid="card-list">
    <button onClick={onClick} data-testid="card-button">
      {buttonTxt}
    </button>
  </div>
)

export const MockThemeButton = ({ onClick }: { onClick: () => void }) => (
  <button data-testid="theme-button" onClick={onClick}>
    Theme Button
  </button>
)

export const MockRoutesApp = () => <div data-testid="routes">Routes</div>

export const MockGlobalStyle = () => (
  <div data-testid="global-style">Global Style</div>
)

export const MockRestaurantHeader = () => (
  <div data-testid="restaurant-header">Restaurant Header</div>
)
