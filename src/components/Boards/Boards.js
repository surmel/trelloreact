import React, {Component} from 'react';
import './Boards.css';
import CreateNewBoard from './CreateNewBoard';
import {Link} from "react-router-dom";

class Boards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lists: [],
        };

        this.InputChangeHandler = this.InputChangeHandler.bind(this);
        this.CreateBoard = this.CreateBoard.bind(this)
    }

    componentDidMount() {
        const BoardList = localStorage.getItem('Boards');
        if(BoardList) {
            this.setState({
                lists: JSON.parse(BoardList)
            });
            console.log(this.state.lists)
        }
    }

    CreateBoard() {
        let lists = this.state.lists;
        let checking = lists.filter((list) => {
            return list.name === this.state.name;
        });

        if (!checking.length) {
            lists.push({
                id: this.state.lists.length,
                name: this.state.name
            });
            this.setState({
                // ...this.state,
                lists: lists,
            });
        } else {
            alert('This board already exists');
            return;
        }
        localStorage.setItem('Boards', JSON.stringify(this.state.lists))
    }

    InputChangeHandler(event) {
        this.setState({
                // ...this.state,
                name: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.lists.map((list) => {
                        return (
                            <Link key={list.id} to={`list/${list.name}/${list.id}`} className="links">
                                <CreateNewBoard name={this.state.name} data={list}/>
                            </Link>
                        )
                    })
                }
                <div className="new-board">
                    <input onChange={this.InputChangeHandler} placeholder="Board name" className="form-control"/>
                    <button onClick={this.CreateBoard} className="btn btn-secondary new-board-btn">Create new board</button>
                </div>

            </div>
        )
    }


}

export default Boards;

