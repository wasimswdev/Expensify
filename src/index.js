import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetExpense } from './actions/expenses';
import { getAuth,  onAuthStateChanged } from 'firebase/auth';
import history from './components/history';
import { login, logout } from './actions/auth';


//store
const store = configureStore()

export const jsx =(
    <Provider store= {store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
}
}

ReactDOM.render(<p>Loading...</p> , document.getElementById('root'));

onAuthStateChanged(getAuth(), (user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense(user.uid)).then(() => {
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
        });
    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
    });

