import React, {Component} from 'react';
import './Boards.css';
import CreateNewBoard from './createNewBoard';
import {Link} from "react-router-dom";

class BoardsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            boards: [],
        };

        this.InputChangeHandler = this.InputChangeHandler.bind(this);
        this.CreateBoard = this.CreateBoard.bind(this)
    }

    componentDidMount() {
        const boardList = localStorage.getItem('Boards');
        if (boardList) {
            this.setState({
                boards: JSON.parse(boardList)
            });
        }
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
            alert('This board already exists');
            return;
        }
        localStorage.setItem('Boards', JSON.stringify(this.state.boards))
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
                    this.state.boards ? this.state.boards.map((board) => {
                        return (
                            <Link key={board.id} to={`list/${board.name}/${board.id}`}>
                                <CreateNewBoard name={this.state.name} showComponent={this.state.showComponent}
                                                data={board}/>
                            </Link>
                        )
                    }) : null
                }
                <div className="new-board">
                    <input onChange={this.InputChangeHandler} placeholder="Board name" className="form-control"/>
                    <button onClick={this.CreateBoard} className="btn btn-secondary new-board-btn">Create new board
                    </button>
                </div>

            </div>
        )
    }


}

export default BoardsComponent;

