import React, {Component} from 'react';
import CreateNewBoard from './CreateNewBoard';
import {Link} from "react-router-dom";
import MenuComponent from "../Menu/MenuComponent";

class Boards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            name: '',
            lists: [],
        };

        this.InputChangeHandler = this.InputChangeHandler.bind(this);
        this.CreateBoard = this.CreateBoard.bind(this)
    }

    CreateBoard() {
        let lists = this.state.lists;
        let checking = lists.filter((list) => {
            return list.name === this.state.name;
        });

        if (checking.length === 0) {
            lists.push({
                id: this.state.lists.length,
                name: this.state.name
            });
            this.setState({
                ...this.state,
                showComponent: true,
                lists: lists,
            });
        } else {
            alert('mi ara');
            return;
        }
    }

    InputChangeHandler(event) {
        this.setState({
                ...this.state,
                name: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <div className='clearfix'>
                    <MenuComponent />
                </div>
                <h3>Boards</h3>
                {
                    this.state.lists.map((list) => {
                        return (
                            <Link key={list.id} to={`list/${list.name}/${list.id}`}>
                                <CreateNewBoard name={this.state.name} showComponent={this.state.showComponent}
                                                data={list}/>
                            </Link>
                        )
                    })
                }

                <input onChange={this.InputChangeHandler} placeholder="Board name"/>
                <button onClick={this.CreateBoard} className="btn btn-secondary">Create new board</button>
            </div>
        )
    }

}

export default Boards;

