import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector( [selectCart], cart => cart.cartItems );

export const selectCartItemsCount = createSelector( [selectCartItems], cartItems => {
	return Object.keys(cartItems).reduce((acumulator, item) => {
		return acumulator + cartItems[item].quantity;
	}, 0)
});


