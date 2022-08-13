import React from 'react';
import { Container } from '../../globalStyles';
import { LatestHeading, ProductSlide, Products } from './LatestStyled';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "@splidejs/splide/dist/css/splide.min.css";
import { useAPI } from '../../hook/useAPI';

const Lastest = () => {
	const {
		data: products,
		loading,
		error,
	} = useAPI('');
	// console.log(products);
	return (
		<Container>
			<LatestHeading>Latest Drop</LatestHeading>
			<ProductSlide
				options={{
					type: 'loop',
					gap: '5rem',
					// drag: 'free',
					arrows: false,
					pagination: false,
					perPage: 4,
					autoScroll: {
						pauseOnHover: true,
						pauseOnFocus: true,
						rewind: false,
						speed: 0.6,
					},
				}}
				extensions={{ AutoScroll }}
			>
				{products &&
					products.map((product) => (
						<SingleProduct key={product.id} product={product} />
					))}
			</ProductSlide>
		</Container>
	);
};

export default Lastest;
