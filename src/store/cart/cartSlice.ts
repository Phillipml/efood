import type { Menu } from '@/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: Menu[]
}
const initialState: CartState = {
  items: [
    {
      foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
      preco: 69.9,
      id: 1,
      nome: 'Ravioli al Tartufo Nero',
      descricao:
        'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
      porcao: '1 a 2 pessoas'
    },
    {
      foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//2.jpg',
      preco: 56.9,
      id: 2,
      nome: 'Spaghetti alla Carbonara',
      descricao:
        'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
      porcao: '1 a 2 pessoas'
    }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})
export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
