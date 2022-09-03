import React, { useEffect } from 'react';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { useAPI } from '../../hook/useAPI';
import { BsDashLg } from 'react-icons/bs';
import { useState } from 'react';
import Loading from '../../components/Loading/Loading';

import {
	ShopContainer,
	ShopHeading,
	ShopGroup,
	ProductFilter,
	ProductsList,
	FilterGroup,
	PriceInput,
	FilterButton,
} from './ShopStyled';

const Categories = [
	'Men Clothing',
	'Women Clothing',
	'Jewelery',
	'Electronics',
];

const NewCategories = [
	{ name: 'All', api: '' },
	{
		name: 'Men Clothing',
		api: "category/men's%20clothing",
	},
	{
		name: "Women's Clothing",
		api: "category/women's%20clothing",
	},
	{
		name: 'Jewelery',
		api: 'category/jewelery',
	},
	{
		name: 'Electronics',
		api: 'category/electronics',
	},
];


const Shop = () => {
	const [isFiltered, setIsFiltered] = useState(false);
	const [displayProducts, setDisplayproducts] = useState([]);
	const [category, setCategory] = useState('');
	const { data, loading, error, query } = useAPI(`${category}`);

	useEffect(() => {
		if (data) {
			setDisplayproducts(data);
		}
	}, [data]);

	const products = data;

	const handleClick = (category) => {
		const newCategory = category.toLowerCase();
		setCategory(newCategory);
	};

	const [minPrice, setMinPrice] = useState();
	const [maxPrice, setMaxPrice] = useState();
	// filter minumum and maximum price

	const handleFilter = () => {
		const filter = products?.filter((product) => {
			return product.price >= minPrice && product.price <= maxPrice;
		});
		setDisplayproducts(filter)
		setIsFiltered(true);
	};

	const clearFilter = () => {
		setMaxPrice('');
		setMinPrice('');
		setDisplayproducts(products);
		setIsFiltered(false);
	}

	return (
		<ShopContainer>
			<ShopHeading>Shop {category}</ShopHeading>
			<ShopGroup>
				<ProductFilter>
					<FilterGroup>
						<h3>Category</h3>
						{NewCategories.map((category) => (
							<li key={category.name} onClick={() => handleClick(category.api)}>
								{category.name}
							</li>
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

						{ isFiltered ? 
							( <FilterButton onClick={clearFilter}>Clear Filter</FilterButton>) 
								: 
							( <FilterButton onClick={handleFilter}>Filter</FilterButton>)
						}
						
					</FilterGroup>
				</ProductFilter>

				<ProductsList>
					{loading && <Loading style={{}} />}

					{!displayProducts.length && !loading && <h1>No products found</h1>}

					{displayProducts &&
						displayProducts.map((product) => (
							<SingleProduct key={product.id} product={product} />
						))}

					{error && <p>{error.message}</p>}
				</ProductsList>
			</ShopGroup>
		</ShopContainer>
	);
};

export default Shop;
