export const priceFormatter = (price: number | undefined) => {
  const amount = price
  const formatted = amount?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return String(formatted)
}
