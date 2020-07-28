import React from 'react';
import { connect } from 'react-redux';

import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils.js';

const Header = ({currentUser}) => (

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

    </div>
  </div>

)

const mapStateToProps = state => ({
  /*Recordar que state sera el rootReducer y el rootReducer tiene una propiedad
    llamada "user" que apunta al userReducer el cual es el que contiene currentUser  */
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);