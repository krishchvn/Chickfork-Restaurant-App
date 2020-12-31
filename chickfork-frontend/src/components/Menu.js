import React, { useEffect, useState } from 'react';
import './Menu.css';
import { useStateValue } from './StateProvider';
import axios1 from '../axios1';

const Menu = () => {
	const [dishes, setDishes] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios1.get('/dishes');

			setDishes(req.data);
		}
		fetchData();
	}, []);

	const [, dispatch] = useStateValue();

	const addToCart = ({ _id, name, imgUrl, desc, price, type }) => {
		// add item to basket
		dispatch({
			type: 'ADD_TO_CART',
			item: {
				_id,
				name,
				price,
				desc,
				type,
				imgUrl,
			},
		});
	};

	const trimDesc = desc => {
		return desc.slice(0, 25) + '...';
	};

	return (
		<div className='menu'>
			<h1>Menu</h1>
			<div className='menu__starters'>
				<h1>Starters</h1>
				{dishes
					.filter(dishType => dishType.type === 'starters')
					.map(dish => (
						<div className='menu__column'>
							<div className='menu__row'>
								<div className='menu__card'>
									<div className='menu__img'>
										<img src={dish.imgUrl} alt='img' />
									</div>
									<div className='menu__desc'>
										<div className='menu__name'>
											<h2>{dish.name}</h2>
										</div>
										<div className='menu__description'>
											<p>{dish.desc}</p>
										</div>
										<div className='menu__credentials'>
											<div className='menu__price'>
												<h5>Damage- ${dish.price}</h5>
											</div>
											<div className='menu__button'>
												<button onClick={() => addToCart(dish)}>
													Add to Cart ->
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
			<div className='menu__maincourse'>
				<h1>Maincourse</h1>
				{dishes
					.filter(dishType => dishType.type === 'maincourse')
					.map(dish => (
						<div className='menu__column'>
							<div className='menu__row'>
								<div className='menu__card'>
									<div className='menu__img'>
										<img src={dish.imgUrl} alt='img' />
									</div>
									<div className='menu__desc'>
										<div className='menu__name'>
											<h2>{dish.name}</h2>
										</div>
										<div className='menu__description'>
											<p>{dish.desc}</p>
										</div>
										<div className='menu__credentials'>
											<div className='menu__price'>
												<h5>Damage- ${dish.price}</h5>
											</div>
											<div className='menu__button'>
												<button onClick={() => addToCart(dish)}>
													Add to Cart ->
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
			<div className='menu__desserts'>
				<h1>Desserts</h1>
				{dishes
					.filter(dishType => dishType.type === 'desserts')
					.map(dish => (
						<div className='menu__column'>
							<div className='menu__row'>
								<div className='menu__card'>
									<div className='menu__img'>
										<img src={dish.imgUrl} alt='img' />
									</div>
									<div className='menu__desc'>
										<div className='menu__name'>
											<h2>{dish.name}</h2>
										</div>
										<div className='menu__description'>
											<p>{dish.desc}</p>
										</div>
										<div className='menu__credentials'>
											<div className='menu__price'>
												<h5>Damage- ${dish.price}</h5>
											</div>
											<div className='menu__button'>
												<button onClick={() => addToCart(dish)}>
													Add to Cart ->
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
			<div className='menu__beverages'>
				<h1>Wines & Beverages</h1>
				{dishes
					.filter(dishType => dishType.type === 'beverages')
					.map(dish => (
						<div className='menu__column'>
							<div className='menu__row'>
								<div className='menu__card'>
									<div className='menu__img'>
										<img src={dish.imgUrl} alt='img' />
									</div>
									<div className='menu__desc'>
										<div className='menu__name'>
											<h2>{dish.name}</h2>
										</div>
										<div className='menu__description'>
											<p>{dish.desc}</p>
										</div>
										<div className='menu__credentials'>
											<div className='menu__price'>
												<h5>Damage- ${dish.price}</h5>
											</div>
											<div className='menu__button'>
												<button onClick={() => addToCart(dish)}>
													Add to Cart ->
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Menu;
