import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ _id, name, imgUrl, desc, price, type }) => {
	const [, dispatch] = useStateValue()

	const removeFromCart = () => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			_id: _id,
		})
	}

	return (
		<div className='checkoutProduct'>
			<img src={imgUrl} alt='' />
			<div className='checkoutProduct__info'>
				<h5 className='checkoutProduct__title'>{name}</h5>
				<p className='checkoutProduct__price'>Damage - ${price}</p>
				<button onClick={removeFromCart} className='checkoutProduct__btn'>
					Remove from cart ->
				</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
