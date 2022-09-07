import React from 'react';
import { HeroContainer, Text, HeroImage, HeroButton } from './HeroStyled';
import model from '../../assets/model.png';

const Hero = () => {
	return (
		<HeroContainer>
			<Text initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{delay: 1, duration: 1.4}}>
				Pixel Wears
			</Text>

			<HeroImage src={model} alt="model" initial={{opacity: 0}} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2, type: 'tween'}} />
			{/* <HeroButton>SHOP NOW </HeroButton> */}
		</HeroContainer>
	);
};

export default Hero;
