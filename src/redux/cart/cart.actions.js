import {cartActionTypes} from './cart.type';

export const toggleHiddenCart = () => ({
	type: cartActionTypes.TOGGLE_HIDDEN_CART
})

export const addItem = item => ({
	type: cartActionTypes.ADD_ITEM,
	payload: item
})