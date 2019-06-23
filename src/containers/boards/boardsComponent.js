import React, {Component} from 'react';
import './Boards.css';
import CreateNewBoard from './createNewBoard';
import {Link} from "react-router-dom";
import {showBoard, addBoard} from "../../actions/boards/boards";
import {connect} from "react-redux";

class BoardsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            localBoards: []
        };

        this.InputChangeHandler = this.InputChangeHandler.bind(this);
        this.createBoard = this.createBoard.bind(this)
    }

    componentDidMount() {
        const boardList = localStorage.getItem('Boards');
        if (boardList) {
            this.props.showBoard(JSON.parse(boardList))
        } else {
            this.props.showBoard([])
        }
    }

    createBoard() {
        let boards = this.props.showBoards;
        let checking = boards.filter((board) => {
            return board.name === this.state.name;
        });
        if (this.state.name.length) {
            if (!checking.length) {
                this.setState({
                    showComponent: true,
                    name: ''
                });
                this.props.addBoard(this.state.name);
            } else {
                alert('This board already exists');
            }
        } else {
            alert('Please fill valid name');
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
                    this.props.showBoards ? this.props.showBoards.map((board, index) => {
                        return (
                            <Link key={index} to={`list/${board.name}/${board.id}`}>
                                <CreateNewBoard name={this.state.name} showComponent={this.state.showComponent}
                                                data={board}/>
                            </Link>
                        )
                    }) : null
                }
                <div className="new-board">
                    <input onChange={this.InputChangeHandler} placeholder="Board name" className="form-control"
                           value={this.state.name}/>
                    <button onClick={this.createBoard} className="btn btn-secondary new-board-btn">Create new board
                    </button>
                </div>

            </div>
        )
    }


}

// export default BoardsComponent;
const mapsStateToProps = state => ({
    showBoards: state.boards,
    addBoards: state.boards
});
const mapsDispatchToProps = dispatch => ({
    showBoard: (name) => dispatch(showBoard(name)),
    addBoard: (name) => dispatch(addBoard(name))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(BoardsComponent);
