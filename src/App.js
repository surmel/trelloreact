import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Boards from "./components/Boards/Boards";
import ListComponent from "./components/Lists/ListComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Boards}/>
                    <Route  path='/list/:name/:id' component={ListComponent}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
