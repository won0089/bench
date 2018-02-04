import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import BenchPage from './components/BenchPage';
import './style.css';

const store = configureStore();

render(
    <Provider store={store}>
        <BenchPage />
    </Provider>,
    document.getElementById('app')
);