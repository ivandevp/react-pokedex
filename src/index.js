import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Pokedex from './Pokedex';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Pokedex />
    </Provider>, 
    document.getElementById('root')
);
