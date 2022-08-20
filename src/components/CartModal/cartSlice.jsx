import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			const itemInCart = state.find((item) => item.id === newItem.id);

			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.push({ ...newItem, quantity: 1 });
			}
		},
		increaseQuantity: (state, action) => {
			const newItem = action.payload;
			const itemInCart = state.find((item) => item.id === newItem);

			if (itemInCart) {
				itemInCart.quantity++;
			}
		},
		decreaseQuantity: (state, action) => {
			const newItem = action.payload;
			const itemInCart = state.find((item) => item.id === newItem);

			if (itemInCart) {
				if (itemInCart.quantity <= 1) {
					state.splice(state.indexOf(itemInCart), 1);
				} else {
					itemInCart.quantity--;
				}
			}
		},
		removeFromCart: (state, action) => {
			const newItem = action.payload;
			const itemInCart = state.find((item) => item.id === newItem);

			if (itemInCart) {
				state.splice(state.indexOf(itemInCart), 1);
			}
		},
	},
});

export const {
	addToCart,
	toggleCart,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
