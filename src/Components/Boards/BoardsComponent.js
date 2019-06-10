import React, {Component} from 'react';
import CreateNewBoard from './CreateNewBoard';
import {Link} from "react-router-dom";

class BoardsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            name: '',
            boards: [],
        };

        this.InputChangeHandler = this.InputChangeHandler.bind(this);
        this.CreateBoard = this.CreateBoard.bind(this)
    }

    CreateBoard() {
        let boards = this.state.boards;
        let checking = boards.filter((board) => {
            return board.name === this.state.name;
        });

        if (!checking.length) {
            boards.push({
                id: this.state.boards.length,
                name: this.state.name
            });
            this.setState({
                showComponent: true,
                boards: boards,
            });
        } else {
            alert('mi ara');
            return;
        }
    }

    InputChangeHandler(event) {
        this.setState({
                name: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.boards.map((board) => {
                        return (
                            <Link key={board.id} to={`list/${board.name}/${board.id}`}>
                                <CreateNewBoard name={this.state.name} showComponent={this.state.showComponent}
                                                data={board}/>
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

export default BoardsComponent;

