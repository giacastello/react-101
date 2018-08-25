import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import Saludar from "./states/reducer";

const middlewares = [];

if (window.devToolsExtension) {
    middlewares.push(window.devToolsExtension());
}

// Store siempre va a estar en index.js, para hidratar a App
const store = createStore(Saludar, compose(...middlewares));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
