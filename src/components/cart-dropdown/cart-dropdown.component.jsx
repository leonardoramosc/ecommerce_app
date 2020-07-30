import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component'; 
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

import {selectCartItems} from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartHidden, cartItems}) => {
	return (
	<div className='cart-dropdown'>

		<div className="cart-items">
			{
				Object.keys(cartItems).map(key => <CartItem key={cartItems[key].id} item={cartItems[key]} />)
			}
		</div>

		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
	)
};

const mapStateToProps = state => {
	return ({
		cartItems: selectCartItems(state)
	});
}

export default connect(mapStateToProps)(CartDropdown);

