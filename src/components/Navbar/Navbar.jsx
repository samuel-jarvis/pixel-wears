import React from 'react';
import LogoImg from '../../assets/logo.png';
import menuGirl from '../../assets/menuModel.jpg';
import { BsCart3, BsList } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { motion, LayoutGroup } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hook/useMedia';
import {FaBars} from 'react-icons/fa'


import {
	Nav,
	Bars,
	MenuBtn,
	Logo,
	CartIcon,
	Menu,
	MenuList,
	ListLinks,
	MenuImage,
	LegalList,
	CloseBtn,
	CloseNav,
	CartCount
} from './NavbarStyled';
import CartModal from '../CartModal/CartModal';

const links = [
	{ name: 'Home', path: '/', id: 1 },
	{ name: 'Shop', path: '/shop', id: 4 },
	{ name: 'Checkout', path: '/checkout', id: 5 },
	// { name: 'About', path: '/about', id: 2 },
	{ name: 'Contact', path: '/contact', id: 3 },
];

const legal = [
	{ name: 'Terms & Conditon', path: '/' },
	{ name: 'Privacy Policy', path: '/' },
	{ name: 'Shipping', path: '/' },
];

const parentVariant = {
	visible: {
		transition: {
			when: 'beforeChildren',
			type: 'tween',
			staggerChildren: 0.5,
		},
	},
};

const variants = {
	hidden: {
		opacity: 0,
		x: '-30',
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			// type: 'tween',
		},
	},
};

const menu = {
	hidden: {
		opacity: 0,
		x: '-100%',
	},

	visible: {
		x: '0',
		opacity: 1,
		transition: {
			duration: .6,
			type: 'tween',
		},
	},
};

const menuList = {
	visible: {
		transition: {
			when: 'beforeChildren',
			type: 'tween',
			staggerChildren: 0.5,
			delayChildren: .3,
		},
	},
};

const listVariants = {
	hidden: {
		opacity: 0,
		y: -30,
	},

	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			type: 'tween',
		},
	},
};

const menuList2 = {
	initial: {
		x: '-100%',
		opacity: 0,
	},

	visible: {
		x: 0,
		transition: {
			when: 'beforeChildren',
			type: 'tween',
			// staggerChildren: 0.5,
			delayChildren: 0.6,
		},
	},
};

const Navbar = () => {
	const cart = useSelector((state) => state.cart);

	const isSmall = useMediaQuery('(max-width: 1000px)');
	console.log(isSmall)

	const [showCartModal, setShowCartModal] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const [sticky, setSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 200) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	let location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<>
			<AnimatePresence>
				{showCartModal && <CartModal showModal={setShowCartModal} />}
			</AnimatePresence>

			<Menu
				variants={menu}
				initial="hidden"
				animate={isOpen ? 'visible' : 'hidden'}
				transition={{ duration: .5 }}
			>
				<CloseNav onClick={handleClick}>
					{isOpen ? <GrClose /> : <BsList />}
				</CloseNav>

				<MenuList variants={menuList}>
					{links.map(({ name, path, id }) => (
						<ListLinks key={id} variants={listVariants}>
							<Link to={path}>{name}</Link>
						</ListLinks>
					))}
				</MenuList>

				<LegalList variants={menuList2}>
					{legal.map(({ name, path }) => (
						<motion.li key={name} variants={listVariants}>
							<Link to={path}>{name}</Link>
						</motion.li>
					))}
				</LegalList>

				<MenuImage
					key={isOpen}
					initial={{ width: 0 }}
					animate={{ width: isSmall ? '400px' : "600px" }}
					// animate={{ width: '600px' }}
					// isSmall ? animate = {{ width: '600px' }} : {{ width: '600px' }}
					transition={{ delay: 1, duration: 1 }}
				>
					<img src={menuGirl} alt="menu" />
				</MenuImage>
			</Menu>

			<Nav
				sticky={sticky ? 1 : 0}
				variants={parentVariant}
				initial="hidden"
				animate="visible"
			>
				<MenuBtn variants={variants} onClick={handleClick}>
					{/* {isOpen ? <GrClose /> : <BsList />} */}

					<Bars>
						<span></span>
						<span></span>
						<span></span>
					</Bars>	

				</MenuBtn>

				<Logo to="/">
					<motion.img src={LogoImg} variants={variants} alt="logo" />
				</Logo>

				<CartIcon variants={variants} onClick={() => setShowCartModal(true)}>
					<BsCart3 />
					<CartCount>{cart.length}</CartCount>
				</CartIcon>
			</Nav>
		</>
	);
};

export default Navbar;
