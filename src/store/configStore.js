import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers'
// import {logger, asyncActions} from "../middleware";
import ReduxThunk from 'redux-thunk' // no changes here 😀

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            ReduxThunk
            // logger,
            // asyncActions
        )
    )

);

export default configureStore;