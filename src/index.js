import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers';
import store from 'containers/App/stores';
import * as serviceWorker from './serviceWorker';
import 'scss/index.scss';

/* eslint-disable-next-line react/jsx-filename-extension */
ReactDOM.render(<App store={ store } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();