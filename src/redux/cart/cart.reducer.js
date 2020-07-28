import {cartActionTypes} from './cart.type';

const INITIAL_STATE = {
	hideCart: true
}

const cartReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case cartActionTypes.TOGGLE_HIDDEN_CART:
			return {
				...state,
				hideCart: !state.hideCart
			}
		default:
			return state;
	}
}

export default cartReducer;