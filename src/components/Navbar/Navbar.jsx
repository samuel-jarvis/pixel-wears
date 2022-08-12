import React from 'react';
import LogoImg from '../../assets/logo.png';
import menuGirl from '../../assets/menuModel.jpg';
import { BsCart3, BsList } from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';
import {motion, LayoutGroup } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Nav, MenuBtn, Logo, CartIcon, Menu, MenuList, ListLinks, MenuImage, LegalList } from './NavbarStyled';

const links = [
	{name: 'Home', path: '/', id : 1},
	{name: 'Shop', path: '/shop', id : 4},
	{name: 'About', path: '/about', id : 2},
	{name: 'Contact', path: '/contact', id : 3},
]

const legal = [
	{name: 'Terms & Conditon', path: '/'},
	{name: 'Privacy Policy', path: '/'},
	{name: 'Shipping', path: '/'},
]

const parentVariant = {
	visible: {
		transition: {
			when: 'beforeChildren',
			type: 'tween',
			staggerChildren: 0.5,
		},
	},
}

const variants = {
	hidden: {
		opacity: 0,
		x: '-30',
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 2.5,
			type: 'tween',
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
			duration: 1,
			type: 'tween',
		}
	},
}

const menuList = {
	visible: {
		transition: {
			when: 'beforeChildren',
			type: 'tween',
			staggerChildren: 0.5,
			delayChildren: .6,
		},
	},
}

const listVariants = {
	hidden: {
		opacity: 0,
		y: -30,
	},

	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			type: 'tween',
		}
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
			delayChildren: .6,
		},
	},
}


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true)
	}

	let location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

	return (
		<>
		<Menu 
			variants={menu} 
			initial='hidden' 
			animate={isOpen ? 'visible' : 'hidden'}
			transition = {{duration: 1.5}} >
			
			<MenuList  variants={menuList} >
				{links.map(({name, path, id}) => (
					<ListLinks key={id} variants={listVariants}> 
						<Link to={path}>{name}</Link>
					</ListLinks>
				))}
			</MenuList>

			<LegalList variants={menuList2}>
				{legal.map(({name, path}) => (
					<motion.li key={name} variants={listVariants}>
						<Link to={path}>{name}</Link>
					</motion.li>
				))}
			</LegalList>

			
			<MenuImage key={isOpen} initial={{width: 0}} animate={{width: '600px'}} transition={{delay: 1, duration: 1}}>
				<img src={menuGirl} alt='menu' />
			</MenuImage>
		</Menu>
		
		<Nav variants={parentVariant} initial = "hidden" animate='visible'>
			<MenuBtn variants={variants} onClick={handleClick}>
				{isOpen ?  <GrClose /> : <BsList />}
			</MenuBtn>

			<Logo to="/" >
				<motion.img src={LogoImg} variants={variants}  alt="logo" />
			</Logo>

			<CartIcon variants={variants}>	
				<BsCart3 />
			</CartIcon>
		</Nav>
		</>
	);
};

export default Navbar;
