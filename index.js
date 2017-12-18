import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import {Provider} from 'react-redux';
import store from './store.js';
require('./stylesheet/CSS/stylesheet.css');

//create store

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

