import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore ,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { pokeReducer } from './store/reducers';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(pokeReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}><Router onUpdate={() => window.scrollTo(0, 0)}><App /></Router></Provider>, document.getElementById('root'));


