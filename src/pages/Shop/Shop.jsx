import React, { useEffect } from 'react';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { useAPI } from '../../hook/useAPI';
import { BsDashLg } from 'react-icons/bs';
import { useState } from 'react';
import Loading from '../../components/Loading/Loading'

import {
	ShopContainer,
	ShopHeading,
	ShopGroup,
	ProductFilter,
	ProductsList,
	FilterGroup,
	PriceInput,
} from './ShopStyled';
// men's%20clothing
const Categories = [
	'Men Clothing',
	'Women Clothing',
	'Jewelery',
	'Electronics',
];

const NewCategories = [
	{
		name: "Men Clothing",
		api: "category/men's%20clothing"
	},
	{
		name: "Women's Clothing",
		api: "category/women's%20clothing"
	},
	{
		name: "Jewelery",
		api: "category/jewelery"
	},
	{
		name: "Electronics",
		api: "category/electronics"
	}
]


const Shop = () => {
	const [minPrice, setMinPrice] = useState();
	const [maxPrice, setMaxPrice] = useState();
	
  // const { data, loading, error, query } = useAPI(category);
  const [category, setCategory] = useState('')
  const { data, loading, error, query } = useAPI(`${category}`);
  
	const products = data;

	const handleClick = (category) => {
		const newCategory = category.toLowerCase();
		setCategory(newCategory);
	}

	return (
		<ShopContainer>
			<ShopHeading>Shop {category}</ShopHeading>
			
			<ShopGroup>
				<ProductFilter>
					<FilterGroup>
						<h3>Category</h3>
						{NewCategories.map((category) => (
							<li key={category.name} onClick={() => handleClick(category.api)}>{category.name}</li>
						))}
					</FilterGroup>

					<FilterGroup>
						<h3>Price</h3>
						<PriceInput>
							<input
								type="number"
								value={minPrice}
								onChange={(e) => setMinPrice(e.target.value)}
								placeholder="min"
							/>
							<BsDashLg />
							<input
								type="number"
								value={maxPrice}
								onChange={(e) => setMaxPrice(e.target.value)}
								placeholder="max"
							/>
						</PriceInput>
					</FilterGroup>
				</ProductFilter>

				<ProductsList>
					{
						loading && <Loading style={{}}/>
					}

					{!loading &&
						products.map((product) => (
							<SingleProduct key={product.id} product={product} />
						))}
				</ProductsList>
			</ShopGroup>
		</ShopContainer>
	);
};

export default Shop;
