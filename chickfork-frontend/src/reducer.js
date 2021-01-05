export const initialState = {
	cart: [],
	user: null,
};

export const getCartTotal = cart =>
	cart?.reduce((amount, product) => parseFloat(product.price) + amount, 0);

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			// logic for adding item to cart
			return {
				...state,
				cart: [...state.cart, action.item],
			};
		case 'REMOVE_FROM_CART':
			const index = state.cart.findIndex(cartProduct => {
				return (cartProduct._id = action._id);
			});
			//logic for removing item from cart
			let newCart = [...state.cart];

			console.log('action', action._id);
			console.log('index', index);

			if (index >= 0) {
				//product exists , remove it
				newCart.splice(index, 1);
			} else {
				console.warn(`Can't find product of id ${action.id}`);
			}

			return { ...state, cart: newCart };
		default:
			return state;
	}
}

export default reducer;
