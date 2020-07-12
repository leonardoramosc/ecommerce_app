import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/shop/shop.component.jsx';
import SignInAndSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';

import { auth } from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  } 
}


export default App;
