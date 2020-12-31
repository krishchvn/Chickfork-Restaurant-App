import React, { useState } from 'react'
import examples from './examples'
import './TodaySpecials.css'

const TodaySpecials = () => {
	const [todaySpecials, setTodaySpecials] = useState(examples)

	return (
		<div className='today__spc'>
			<h1>Today's Specials</h1>
			<div className='center'>
				{todaySpecials.map(dish => (
					<div class='property-card'>
						<div class='property-image-title'>
							<h3>{dish.name}</h3>
						</div>
						<div class='property-image'>
							<img src={dish.imgUrl} alt='img' />
						</div>
						<div class='property-description'>
							<p>{dish.desc}</p>
							<h6>${dish.price}</h6>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default TodaySpecials
