import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainListComponent from "./components/lists/MainListComponent";
import WelcomeComponent from   "./components/welcome/welcome";
import BoardsComponent from "./containers/boards/boardsComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={WelcomeComponent}/>
                    <Route  path='/boards' component={BoardsComponent}/>
                    <Route path='/list/:id' component={MainListComponent}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
