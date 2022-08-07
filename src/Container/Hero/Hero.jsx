import React from 'react';
import { HeroContainer, Text, HeroImage, HeroButton } from './HeroStyled';
import model from '../../assets/model.png';

const Hero = () => {
	return (
		<HeroContainer>
			<Text initial={{scale: 0}} animate={{ scale: 1 }} transition={{delay: 1.6, duration: 1.4}}>
				Pixel Wears
			</Text>

			<HeroImage src={model} alt="model" initial={{y: 800}} animate={{ y: 0 }} transition={{ duration: 1, delay: .8, type: 'tween'}} />
			{/* <HeroButton>SHOP NOW </HeroButton> */}
		</HeroContainer>
	);
};

export default Hero;
