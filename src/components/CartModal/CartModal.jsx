import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from './cartSlice';
import { useNavigate } from 'react-router-dom';

import {
	Overlay,
	CartCard,
	CartHeading,
	CloseModal,
	CartProducts,
	CartProduct,
	Total,
	SubTotal,
	CartBtns,
	Checkout,
	ProductInfo,
	Quantity,
	Add,
	Minus,
	Delete,
} from './CartModalStyled';

const variant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const CartModal = ({ showModal }) => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	return (
		<Overlay
			onClick={() => showModal(false)}
			variants={variant}
			initial="hidden"
			animate="visible"
			transition={{ type: 'tween', duration: 0.5 }}
			exit={{ opacity: 0 }}
		>
			<CartCard
				initial={{ x: '100vw' }}
				animate={{ x: 0 }}
				transition={{ type: 'tween', duration: 0.8 }}
				exit={{ x: '100vw' }}
			>
				<CartHeading>
					<h3>Your Cart</h3>
					<p>{cart.length}</p>
					<CloseModal
						onClick={(e) => {
							showModal(false);
						}}
					/>
				</CartHeading>

				<CartProducts onClick={(e) => e.stopPropagation()}>
					{cart.map((item) => (
						<CartProduct key={item.id}>
							<ProductInfo>
								<img src={item.image} alt={item.name} />
								<div>
									<h4>
										{item.title.length > 30
											? item.title.substring(0, 30) + '...'
											: item.title}
									</h4>
									<p>${item.price}</p>
								</div>
							</ProductInfo>

							<Quantity>
								<Minus onClick={() => dispatch(decreaseQuantity(item.id))} />
								<p>{item.quantity}</p>
								<Add onClick={() => dispatch(increaseQuantity(item.id))} />
							</Quantity>

							<Delete onClick={() => dispatch(removeFromCart(item.id))} />
						</CartProduct>
					))}
				</CartProducts>

				<Total>
					<SubTotal>Total</SubTotal>
					<p>
						${cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}
					</p>
				</Total>

				<CartBtns>
					<Checkout onClick={() => navigate('/checkout')}>Checkout</Checkout>
				</CartBtns>
			</CartCard>
		</Overlay>
		// </AnimatePresence>
	);
};

export default CartModal;
