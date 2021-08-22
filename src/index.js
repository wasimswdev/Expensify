import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


//store
const store = configureStore()
const jsx =(
    <Provider store= {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('root'))