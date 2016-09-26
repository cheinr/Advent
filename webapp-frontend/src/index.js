import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './components/app';

var reducer = function() {
    return true;
};

ReactDom.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>,
document.querySelector('.container'));