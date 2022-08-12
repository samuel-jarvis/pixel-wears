import React, { useEffect } from 'react';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { useAPI } from '../../hook/useAPI';
import { BsDashLg } from 'react-icons/bs';
import { useState } from 'react';

import {
	ShopContainer,
	ShopHeading,
	ShopGroup,
	ProductFilter,
	ProductsList,
	FilterGroup,
	PriceInput,
} from './ShopStyled';

const Categories = [
	'Men Cloting',
	'Women Clothing',
	'Accessories',
	'Electronics',
];
const Shop = () => {
	const { data, loading, error } = useAPI('https://fakestoreapi.com/products');

	const [minPrice, setMinPrice] = useState();
	const [maxPrice, setMaxPrice] = useState();

	const products = data;

	return (
		<ShopContainer>
			<ShopHeading>Shop</ShopHeading>
			<ShopGroup>
				<ProductFilter>
					<FilterGroup>
						<h3>Category</h3>
						{Categories.map((category) => (
							<li key={category}>{category}</li>
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
					{products &&
						products.map((product) => (
							<SingleProduct key={product.id} product={product} />
						))}
				</ProductsList>
			</ShopGroup>
		</ShopContainer>
	);
};

export default Shop;
