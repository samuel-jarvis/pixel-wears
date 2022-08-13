import React from 'react'
import { TopSellingContainer, ProductsContainer } from './TopSellingStyled'
import { Heading, SubHeading } from '../../globalStyles'
import { useAPI } from '../../hook/useAPI'

import  SingleProduct  from '../../components/SingleProduct/SingleProduct'


const TopSelling = () => {
  const {data : products, loading, error} = useAPI('?limit=8');

  return (
    <TopSellingContainer>
      <Heading>Top Selling</Heading>
      <SubHeading>Get the Latest and Trending wears making waves</SubHeading>

      <ProductsContainer>
        {products && products.map(product=>(
          <SingleProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
      
    </TopSellingContainer>
  )
}

export default TopSelling