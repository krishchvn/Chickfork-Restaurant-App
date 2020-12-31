import React from 'react';
import chickfork from '../images/chickfork.jpg';
import chickfork_logo from '../images/chickfork_logo.jpg';
import './Navbar.css';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [{ cart }] = useStateValue();

	console.log(cart);

	localStorage.getItem('jwt');

	return (
		<div className='navbar'>
			<div className='navbar__img'>
				<img className='navbar__img1' src={chickfork_logo} alt='logo' />
				<Link to='/'>
					<img className='navbar__img2' src={chickfork} alt='logo' />
				</Link>
			</div>
			<div className='navbar__dropdowns'>
				<div class='dropdown'>
					<span>Starters</span>
					<div class='dropdown-content'>
						<p>Hello World!</p>
					</div>
				</div>
				<div class='dropdown'>
					<span>Maincourse</span>
					<div class='dropdown-content'>
						<p>Hello World!</p>
						<p>Hello World!</p>
					</div>
				</div>
				<div class='dropdown'>
					<span>Desserts</span>
					<div class='dropdown-content'>
						<p>Hello World!</p>
					</div>
				</div>
			</div>
			<div className='logins'>
				<h6>Hello, user</h6>
				<Link to='/account/signup'>
					<button class='navbar__button'>Sign Up</button>
				</Link>
				<Link to='/account/login'>
					<button class='navbar__button'>Log In</button>
				</Link>
			</div>
			<div className='icons'>
				<Link to='/checkout'>
					<IconButton>
						<ShoppingBasketRoundedIcon fontSize='large' />
						<span>{cart?.length}</span>
					</IconButton>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
