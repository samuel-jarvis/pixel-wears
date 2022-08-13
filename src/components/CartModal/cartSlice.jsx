import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const newItem = action.payload
        const itemInCart = state.find(item => item.id === newItem.id)

        if(itemInCart) {
          itemInCart.quantity++
        } else {
          state.push({ ...newItem, quantity: 1 })
        }
      }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;