import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/shop/shop.component.jsx';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}


export default App;
