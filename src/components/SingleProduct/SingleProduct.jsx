import React from 'react'
import { Product, ProductImage, CartButton } from './SingleProductStyled'
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';


const SingleProduct = ({product}) => {
  return (
    <Product>
      <Link to={`/productDetail/${product.id}`} style={{texDecoration: "none"}}>
        <ProductImage>
          <img src={product.image} alt={product.title} />
          <CartButton> <BsCart3 /> Add to Cart</CartButton>
        </ProductImage>
        <h4>{product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title}</h4>
        <p>${product.price}</p>
      </Link>
    </Product>
  )
}

export default SingleProduct 