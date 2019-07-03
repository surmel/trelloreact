import React, {Component} from 'react';
import './Boards.css';
import CreateNewBoard from './createNewBoard';
import {Link} from "react-router-dom";
import {showBoard, addBoard} from "../../actions/boards/boards";
import {connect} from "react-redux";
import board from '../../Images/board.svg'
import pulse from '../../Images/5fd1b4ba8b.png'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {getBoardsAsync} from "../../thunks/boards.thunk";

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
        this.props.getBoardsAsync()
    }

    createBoard() {
        let boards = this.props.boards;
        let checking = boards.filter((board) => {
            return board.name === this.state.name;
        });
        if (this.state.name.length) {
            if (!checking.length) {
                this.setState({
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
            <Container style={{marginTop: '50px'}}>
                <Col md={12}>
                    <Row>
                        <Col md={2} style={{borderRight: '1px solid #ccc'}}>
                            <Link to='/boards' style={{textDecoration: 'none'}}>
                                <div className='board' style={{
                                    background: '#e4f0f6',
                                    width: '100%'
                                }}>
                                    <img src={board} alt='' style={{width: '20px'}}/>
                                    <div style={{fontSize: '14px', fontWeight: 'bold', flex: '1 1 auto'}}>Boards</div>
                                </div>
                            </Link>
                            <Link to='/' style={{textDecoration: 'none'}}>
                                <div className='board' style={{
                                    color: 'black',
                                    width: '100%'
                                }}>
                                    <img src={pulse} alt='' style={{width: '20px'}}/>
                                    <div style={{fontSize: '14px', fontWeight: 'bold', flex: '1 1 auto'}}>Home</div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={10}>
                            {
                                this.props.boards ? this.props.boards.map((board, index) => {
                                    return (
                                        <Link key={index} to={`list/${board.name}/${board.id}`} params={{name: board.name, id: board.id}}>
                                            <CreateNewBoard name={this.state.name}
                                                            data={board}/>
                                        </Link>
                                    )
                                }) : null
                            }
                            <Col md={3} className="new-board" style={{float: 'left'}}>
                                <input onChange={this.InputChangeHandler} placeholder="Board name"
                                       className="form-control"
                                       value={this.state.name}/>
                                <button onClick={this.createBoard} className="btn btn-secondary new-board-btn"
                                        style={{width: '100%'}}>Create new board
                                </button>
                            </Col>
                        </Col>

                    </Row>
                </Col>

            </Container>
        )
    }


}

const mapsStateToProps = state => ({
    boards: state.boards,
});
const mapsDispatchToProps = dispatch => ({
    getBoardsAsync: (name) => dispatch(getBoardsAsync(name)),
    addBoard: (name) => dispatch(addBoard(name))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(BoardsComponent);
