import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import Line from '../../assets/line.png';

export const Nav = styled(motion.nav)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 4rem;
	top: 0;
	width: 100%;
	z-index: 80;
	position: fixed;
	/* position: ${(props) => (props.sticky === true ? 'sticky' : '')}; */
	background-color: ${(props) => (props.sticky ? 'white' : '')};
	transition: all 0.2s ease-in-out;

	@media screen and (max-width: 768px) {
		padding: 1rem 2rem;
	}
`
;

export const MenuBtn = styled(motion.div)`
	color: black;
	font-size: 3.4rem;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: var(--brown);
	}
`;

export const Logo = styled(Link)`
	width: 5rem;
	height: 5rem;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const CartIcon = styled(motion.div)`
	color: white;
	font-size: 2.5rem;
	background-color: black;
	border-radius: 50%;
	height: 5rem;
	width: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const Menu = styled(motion.div)`
	position: fixed;
	background-color: white;
	height: 100vh;
	width: 100%;
	top: 0;
	z-index: 95;
	background-image: url(${Line});
	background-repeat: no-repeat;
	background-position: center;
	padding: 15rem 0 0 10rem;

	@media screen and (max-width: 768px) {
		padding: 13rem 0 0 7rem;
	}
`;

export const CloseBtn = styled(GrClose)`
	color: black;
	font-size: 3.4rem;
	cursor: pointer;
`;

export const MenuList = styled(motion.ul)`
	/* padding: 15rem 0 0 10rem; */
`;

export const ListLinks = styled(motion.li)`
	font-size: 4rem;
	font-family: var(--font-styled);
	padding-bottom: 5rem;
	cursor: pointer;
	list-style: none;

	a {
		text-decoration: none;
		color: black;
		transition: color, padding 0.4s ease-in-out;

		&:hover {
			color: var(--brown);
			padding-left: 2rem;
		}
	}
`;

export const MenuImage = styled(motion.div)`
	position: absolute;
	width: 600px;
	height: 100vh;
	top: 0;
	right: 0;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 1024px) {
		width: 200px;
  }

	@media screen and (max-width: 700px) {
		display: none;
  }
`;

export const LegalList = styled(motion.ul)`
	font-size: 1.4rem;
	margin-top: 4rem;

	li {
		list-style: none;
		margin-bottom: 1rem;

		a {
			text-decoration: none;
			font-family: var(--font-mako);
		}
	}
`;


export const CloseNav = styled.div`
	position: absolute;
	top: 3rem;
	left: 4rem;
	font-size: 3rem;
`