import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BenchPage from './components/BenchPage';
import Toaster from './components/Toaster';
import './style.css';

const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <div>
            <BenchPage />
            <Toaster />
</div>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);