import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Boards from "./components/Boards/BoardsComponent";
import MainListComponent from "./components/Lists/MainListComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Boards}/>
                    <Route  path='/list/:name/:id' component={MainListComponent}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
