import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import configStore from './store/configStore'
import {Provider} from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
