import React from 'react';
import { Product, ProductImage, CartButton, ImageBox } from './SingleProductStyled';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { addToCart } from '../../components/CartModal/cartSlice';
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SingleProduct = ({ product }) => {
	const dispatch = useDispatch();
	return (
		<Product>
			<ProductImage>
				<ImageBox>
					<img src={product.image} alt={product.title} />
				</ImageBox>
				<CartButton onClick={() => dispatch(addToCart(product))}>
					{' '}
					<BsCart3 /> Add to Cart
				</CartButton>
			</ProductImage>
			<Link
				to={`/productDetail/${product.id}`}
				style={{ texDecoration: 'none' }}
			>
				<h4>
					{product.title.length > 30
						? product.title.substring(0, 30) + '...'
						: product.title}
				</h4>
				<p>${product.price}</p>
			</Link>
		</Product>
	);
};

export default SingleProduct;
