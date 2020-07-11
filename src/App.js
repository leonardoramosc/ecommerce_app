import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component.jsx';


const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}


export default App;
