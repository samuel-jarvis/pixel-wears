import React from 'react';
import { FooterContainer, FooterGroup, FooterELement, FooterForm, Copyright } from './FooterStyled';
import FooterData from '../../Data/footer'
import { toast } from 'react-toastify';


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
								<li key={link}>{link}</li>
							))}
            </ul>
          </FooterELement>
        ))}

				<FooterELement>
					<h5>Subscribe to get daily updates</h5>
					<FooterForm>
						<input type="text" />
						<button onClick={() => toast("Thanks for subscribing")}>Subscribe</button>
					</FooterForm>
				</FooterELement>
			</FooterGroup>

			{/* <Copyright>Copyright 2022. All rights reserved.</Copyright> */}
			<Copyright>Designed by <a href="https://twitter.com/adeniyiiii">@Adeniyi</a>  and built by <a href="https://twitter.com/SamJarvis244">𝔖𝔞𝔪𝔲𝔢𝔩 𝔍𝔞𝔯𝔳𝔦𝔰</a></Copyright>
		</FooterContainer>
	);
};

export default Footer;
