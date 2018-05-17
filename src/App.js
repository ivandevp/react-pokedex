import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import Header from './components/Header';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" component={Pokedex} />
    </div>
  </Router>
);

export default App;
