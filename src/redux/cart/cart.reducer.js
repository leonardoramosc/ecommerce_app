import {cartActionTypes} from './cart.type';

const INITIAL_STATE = {
	hideCart: true,
	cartItems: {},
	total: 0
}

const cartReducer = (state=INITIAL_STATE, action) => {

	const {id: itemID, price} = action.payload ? action.payload : {id:null, price:null};
	const item = state.cartItems[itemID] ? state.cartItems[itemID] : null;
	
	switch(action.type){
		case cartActionTypes.TOGGLE_HIDDEN_CART:
			return {
				...state,
				hideCart: !state.hideCart
			}
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: {
					...state.cartItems,
					[itemID]: {
						...action.payload,
						quantity: item ? item.quantity+1 : 1,
						total: item ? ((item.quantity+1) * price) : price
					}
				},
				total: state.total + price
			}
		default:
			return state;
	}
}



export default cartReducer;