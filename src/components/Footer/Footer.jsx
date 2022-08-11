import React from 'react';
import { FooterContainer, FooterGroup, FooterELement, FooterForm, Copyright } from './FooterStyled';
import FooterData from '../../Data/footer'

const Footer = () => {
	return (
		<FooterContainer>
			<FooterGroup>
				<FooterELement>
					<h3>Pixel Wears</h3>
					<ul>
						<li>Badquinton, New York(6453) 4653</li>
						<li>support@pixelwears.com</li>
					</ul>
				</FooterELement>

        {FooterData.map(link => (
          <FooterELement key={link.id} >
            <h3>{link.heading} </h3>
            <ul>
              {link.links.map(link => (
								<li>{link}</li>
							))}
            </ul>
          </FooterELement>
        ))}

				<FooterELement>
					<h5>Subscribe to get daily updates</h5>
					<FooterForm>
						<input type="text" />
						<button>Subscribe</button>
					</FooterForm>
				</FooterELement>
			</FooterGroup>

			<Copyright>Copyright 2022. All rights reserved.</Copyright>
			{/* <Copyright>Designed by @Adeneyii and built be @SamJarviss</Copyright> */}
		</FooterContainer>
	);
};

export default Footer;
