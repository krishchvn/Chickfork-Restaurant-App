import React, { useState } from 'react';
import chickfork from '../images/chickfork.jpg';
import chickfork_logo from '../images/chickfork_logo.jpg';
import './Navbar.css';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router-dom';

const Navbar = () => {
	const [{ cart }] = useStateValue();
	let history = useHistory();

	//console.log(cart);

	let jwt = localStorage.getItem('token');
	let user = localStorage.getItem('user');
	//console.log(jwt, user, 'yes');

	return (
		<div className='navbar'>
			<div className='navbar__img'>
				<img className='navbar__img1' src={chickfork_logo} alt='logo' />
				<Link to='/'>
					<img className='navbar__img2' src={chickfork} alt='logo' />
				</Link>
			</div>
			<div className='logins'>
				{jwt !== undefined ? (
					<div className='loginsTokenPresent'>
						<h7>Hello</h7>
					</div>
				) : (
					<div className='loginsTokenAbsent'>
						<h6>HAVE A FINE DINING</h6>
						<Link to='/account/signup'>
							<button class='navbar__button'>Sign Up</button>
						</Link>
						<Link to='/account/login'>
							<button class='navbar__button'>Log In</button>
						</Link>
					</div>
				)}
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

export default withRouter(Navbar);
