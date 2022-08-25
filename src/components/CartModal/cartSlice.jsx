import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
				toast(`Increased ${newItem.title} amount`, {});
			} else {
				state.push({ ...newItem, quantity: 1 });
				toast(`${newItem.title.slice(0, 20)}... added to cart`, {});
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
				toast(`${itemInCart.title} removed from cart`, {});
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
