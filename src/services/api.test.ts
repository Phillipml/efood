import { GetData } from './api'

global.fetch = jest.fn()

const mockFetch = fetch as jest.MockedFunction<typeof fetch>

describe('API Service', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('faz requisição GET para a URL correta', async () => {
    const mockData = { restaurantes: [] }
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData)
    } as any)

    await GetData()

    expect(mockFetch).toHaveBeenCalledWith(
      'https://ebac-fake-api.vercel.app/api/efood/restaurantes'
    )
    expect(mockFetch).toHaveBeenCalledTimes(1)
  })

  it('retorna dados quando a requisição é bem-sucedida', async () => {
    const mockData = {
      restaurantes: [
        { id: 1, nome: 'Restaurante A' },
        { id: 2, nome: 'Restaurante B' }
      ]
    }
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData)
    } as any)

    const result = await GetData()

    expect(result).toEqual(mockData)
  })

  it('lança erro quando a resposta não é ok', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    } as any)

    await expect(GetData()).rejects.toThrow('Error: 404 Not Found')
  })

  it('lança erro quando a resposta é 500', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error'
    } as any)

    await expect(GetData()).rejects.toThrow('Error: 500 Internal Server Error')
  })

  it('lança erro quando a resposta é 400', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request'
    } as any)

    await expect(GetData()).rejects.toThrow('Error: 400 Bad Request')
  })

  it('lança erro quando fetch falha', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    await expect(GetData()).rejects.toThrow('Network error')
  })

  it('chama json() na resposta', async () => {
    const mockJson = jest.fn().mockResolvedValueOnce({ data: 'test' })
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: mockJson
    } as any)

    await GetData()

    expect(mockJson).toHaveBeenCalledTimes(1)
  })

  it('funciona com dados vazios', async () => {
    const mockData = { restaurantes: [] }
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData)
    } as any)

    const result = await GetData()

    expect(result).toEqual(mockData)
  })

  it('funciona com dados complexos', async () => {
    const mockData = {
      restaurantes: [
        {
          id: 1,
          nome: 'Restaurante Teste',
          descricao: 'Comida deliciosa',
          avaliacao: 4.5,
          tipo: 'Japonês',
          destaque: true
        }
      ]
    }
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData)
    } as any)

    const result = await GetData()

    expect(result).toEqual(mockData)
  })
})
