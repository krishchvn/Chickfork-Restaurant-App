import React, { useEffect, useState } from 'react';
import './FoodTrivia.css';
import axios from 'axios';
import key from './keys/apiKey';

const FoodTrivia = () => {
	const [foodTrivia, setFoodTrivia] = useState('');

	useEffect(
		() =>
			axios
				.get(`https://api.spoonacular.com/food/trivia/random?apiKey=${key}`)
				.then((res) => {
					console.log(res);
					setFoodTrivia(res.data.text);
				})
				.catch((err) => {
					console.log(err);
				}),
		[setFoodTrivia]
	);

	return (
		<div className='foodTrivia'>
			<blockquote>
        <p>{foodTrivia}</p>
      </blockquote>
		</div>
	);
};

export default FoodTrivia;
