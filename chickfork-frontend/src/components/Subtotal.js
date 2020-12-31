import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from '../reducer'
import { Link } from 'react-router-dom'

const Subtotal = () => {
	const [{ cart }] = useStateValue()

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							Subtotal ({cart.length} items): <strong>{`${value}`}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' />
							This order contains a gift.
						</small>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={'text'}
				thousandSeperator={true}
				prefix={'$'}
			/>
			<button>Proceed to Payment -></button>
		</div>
	)
}

export default Subtotal
