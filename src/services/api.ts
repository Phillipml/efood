const API_URL = 'https://ebac-fake-api.vercel.app/api/efood/restaurantes'

export async function GetData() {
  const url = `${API_URL}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`)
  }
  const data = response.json()
  return data
}
