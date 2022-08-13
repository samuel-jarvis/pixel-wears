import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from './cartSlice';
import { Container } from '../../globalStyles';
import { AnimatePresence } from 'framer-motion';

import {
	Overlay,
	CartCard,
	CartHeading,
	CloseModal,
	CartProducts,
	CartProduct,
	SubTotal,
	CartBtns,
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

	console.log(cart);

	return (
		<Overlay
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
					<p>8</p>
					<CloseModal onClick={() => showModal(false)} />
				</CartHeading>

				{/* <CartProducts>
          {cart.map(item => (
            <CartProduct key={item.id}>
              <img src={item.image} alt={item.name} />
              <div> 
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </CartProduct>
          ))}
        </CartProducts> */}

				<SubTotal>SubTotal</SubTotal>

				<CartBtns></CartBtns>
			</CartCard>
		</Overlay>
		// </AnimatePresence>
	);
};

export default CartModal;
