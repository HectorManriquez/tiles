/**
 * Client files for react
 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render (
    <App />,
    document.getElementById('app')
);