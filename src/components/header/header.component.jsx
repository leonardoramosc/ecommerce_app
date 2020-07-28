import React from 'react';
import { connect } from 'react-redux';

import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils.js';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hideCart}) => (

  <div className="header">
    <Link className="logo-container" to='/'>
      <Logo className="logo"></Logo>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>

      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }

      <CartIcon />
    </div>

    {
      !hideCart ? <CartDropdown /> : ''
    }
    
  </div>

)

const mapStateToProps = ({user: {currentUser}, cart: {hideCart}}) => ({
  /*Recordar que state sera el rootReducer y el rootReducer tiene una propiedad
    llamada "user" que apunta al userReducer el cual es el que contiene currentUser  */
  currentUser,
  hideCart
})

export default connect(mapStateToProps)(Header);