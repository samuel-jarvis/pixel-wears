import React from 'react'
import { Product, ProductImage } from './SingleProductStyled'

const SingleProduct = ({product}) => {
  return (
    <Product>
      <ProductImage>
        <img src={product.image} alt={product.title} />
      </ProductImage>
      <h4>{product.title}</h4>
      <p>{product.price}</p>
    </Product>
  )
}

export default SingleProduct