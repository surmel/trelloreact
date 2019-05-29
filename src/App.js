import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Boards from "./components/Boards/Boards";

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Boards}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
