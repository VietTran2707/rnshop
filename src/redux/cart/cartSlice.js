import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listItems: [],
    quantity: 0,
    total: 0,
}

const totalCart = (state) => {
    total = state.listItems.reduce((total, cur) => {
        return total + (cur.price * cur.quantity)
    }, 0)
    return Math.round(total * 100) / 100
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.listItems?.findIndex(item => item.id === action.payload.id)
            if (index >= 0) {
                state.listItems[index].quantity += action.payload.quantity
            } else {
                state.listItems.push(action.payload)
            }

            // Quantity
            state.quantity = state.listItems.length

            // Total
            state.total = totalCart(state)
        },
        removeFromCart: (state, action) => {
            // ListItems 
            state.listItems = state.listItems?.filter(item => item.id !== action.payload)

            // Quantity
            state.quantity -= 1

            // Total
            state.total = totalCart(state)
        },
        addQuantity: (state, action) => {
            state.listItems?.forEach(item => {
                if (item.id === action.payload) {
                    item.quantity++
                }
            })

            // Total
            state.total = totalCart(state)
        },
        minusQuantity: (state, action) => {
            state.listItems?.forEach(item => {
                if (item.id === action.payload) {
                    if (item.quantity == 1) {
                        state.listItems = state.listItems.filter(item => item.id !== action.payload)
                        state.quantity -= 1
                    } else {
                        item.quantity--
                    }
                }
            })

            // Total
            state.total = totalCart(state)
        },
    }
})

export const { addToCart, removeFromCart, addQuantity, minusQuantity } = cartSlice.actions

export default cartSlice.reducer