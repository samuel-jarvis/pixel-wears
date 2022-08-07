import React from 'react'
import { TopSellingContainer, ProductsContainer } from './TopSellingStyled'
import { Heading, SubHeading } from '../../globalStyles'
import {useEffect, useState} from 'react'
import { useAPI } from '../../hook/useAPI'

import  SingleProduct  from '../../components/SingleProduct/SingleProduct'


const TopSelling = () => {
  const {data : products, loading, error} = useAPI('https://fakestoreapi.com/products/category/jewelery');
  // const [products, setProducts] = useState([])

  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products/category/jewelery')
  //     .then(res=>res.json())
  //     .then(json=>setProducts(json))
  // }, [])

  return (
    <TopSellingContainer>
      <Heading>Top Selling</Heading>
      <SubHeading>Get the Latest and Trending wears making waves</SubHeading>

      <ProductsContainer>
        {products.map(product=>(
          <SingleProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </TopSellingContainer>
  )
}

export default TopSelling