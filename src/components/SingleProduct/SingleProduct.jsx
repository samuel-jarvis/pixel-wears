import React from 'react'
import { Product, ProductImage, CartButton } from './SingleProductStyled'
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import {addToCart} from '../../components/Cart/cartSlice'
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SingleProduct = ({product}) => {
  const dispatch = useDispatch()
  return (
    <Product>
      
        <ProductImage>
          <img src={product.image} alt={product.title} />
          <CartButton onClick={() => dispatch(addToCart(product))}> <BsCart3 /> Add to Cart</CartButton>
        </ProductImage>
      <Link to={`/productDetail/${product.id}`} style={{texDecoration: "none"}}>
        <h4>{product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title}</h4>
        <p>${product.price}</p>
      </Link>
    </Product>
  )
}

export default SingleProduct 