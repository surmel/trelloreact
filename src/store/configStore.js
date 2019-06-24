import { createStore, compose } from 'redux';
import reducers from '../reducers'

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => createStore(reducers, composeEnhancers());

export default configureStore;