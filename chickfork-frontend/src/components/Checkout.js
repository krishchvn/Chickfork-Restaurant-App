import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
	const [{ cart }] = useStateValue()

	return (
		<div className='checkout'>
			<div className='checkout__left'>
				{cart?.length === 0 ? (
					<div>
						<h2>Your Cart is empty</h2>
						<h6>
							You have no items in your cart. Click on the logo to go to your
							homepage to buy something...!!!
						</h6>
					</div>
				) : (
					<div className='checkout__cart'>
						<h2 className='checkout__title'>Your Shopping Cart</h2>
						{cart?.map(product => (
							<CheckoutProduct
								_id={product._id}
								name={product.name}
								desc={product.desc}
								imgUrl={product.imgUrl}
								price={product.price}
								type={product.type}
							/>
						))}
					</div>
				)}
			</div>
			<div className='checkout__right'>{cart?.length > 0 && <Subtotal />}</div>
		</div>
	)
}

export default Checkout
