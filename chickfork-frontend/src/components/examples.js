import { Menu } from '@material-ui/core';

const examples = [
	{
		id: 1,
		name: 'Kakori Kebabs',
		imgUrl:
			'https://i.ndtvimg.com/i/2015-07/kakori-kebabs-625_625x350_81436946974.jpg',
		desc:
			'These Lucknowi Kebabs are nothing short of a celebration of meat. Juicy, succulent and just right, spruce them up with some chaat masala, fresh mint chutney, and they’ll have your party off to an impressive start.',
		type: 'starter',
		price: 12.99,
	},
	{
		id: 2,
		name: 'Cobb salad',
		imgUrl:
			'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_602,c_fill,g_auto,h_339,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170206144051-cobb-salad-2.jpg',
		desc:
			'The restaurant is North Vine location for a meal for Sid Grauman of Graumans Theater when he put together a salad with what he found in the fridge: a head of lettuce, an avocado, some romaine, watercress, tomatoes, some cold chicken breast, a hard-boiled egg, chives, cheese, and some old-fashioned French dressing.',
		type: 'maincourse',
		price: 31.99,
	},
	{
		id: 3,
		name: 'Pot roast',
		imgUrl:
			'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_602,c_fill,g_auto,h_339,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170206145021-pot-roast-2.jpg',
		desc:
			'Beef brisket, bottom or top round, or chuck set in a deep roasting pan with potatoes, carrots, onions, and whatever else your mom threw in to be infused with the meats simmering juices, the pot roast could be anointed with red wine or even beer, then covered and cooked on the stovetop or in the oven.',
		type: 'maincourse',
		price: 42.99,
	},
	{
		id: 4,
		name: 'Black Forest Cake',
		imgUrl:
			'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_602,c_fill,g_auto,h_339,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181127110638-21-50-sweets-travel-black-forest-cake.jpg',
		desc:
			'Germanys Black Forest region is known as the namesake -- if not the origin -- of the country most luscious cake. Dark rounds of chocolate cake are doused in a cherry syrup spiked with kirschwasser, a sour cherry brandy, then stacked atop a thin, chocolate base with deep layers of whipped cream and fresh cherries.',
		type: 'dessert',
		price: 16.99,
	},
];

<Menu
	id={examples.id}
	name={examples.name}
	imgUrl={examples.imgUrl}
	desc={examples.desc}
	type={examples.type}
	price={examples.price}
/>;

export default examples;
