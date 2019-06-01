import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Boards from "./Components/Boards/Boards";
import ListComponent from "./Components/Lists/ListComponent";

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
