import React, {Component} from 'react';
import Boards from './components/Boards/Boards';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Boards}/>
                {/*<Route path="/list/:name/:id" component={ListComponent}/>*/}
            </Router>

        );
    }
}

export default App;
