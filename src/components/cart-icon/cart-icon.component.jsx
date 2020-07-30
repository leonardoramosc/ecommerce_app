import React from 'react';

import { connect } from 'react-redux';

import {toggleHiddenCart} from '../../redux/cart/cart.actions.js';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleHiddenCart, itemsCount}) => {

	return (

		<div className="cart-icon" onClick={toggleHiddenCart}>
	
				<ShoppingIcon className="shopping-icon" />
	
				<span className="item-count"> {itemsCount} </span>
	
		</div>

	)	

};

const mapStateToProps = state => ({
	itemsCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
	toggleHiddenCart: () => dispatch(toggleHiddenCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


