import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//Redux store
const reduxStore =  () => {
    const store = createStore(
        combineReducers({
          expenses: expenseReducer,
          filters: filterReducer,
          auth: authReducer
        }), 
        composeEnhancers(applyMiddleware(thunk))
        )
    return store
}

export default reduxStore