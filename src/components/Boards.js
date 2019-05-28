import React,{Component} from 'react';
import CreateNewBoard from './create_new_board';

class Boards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            name: [],
            showComponent: false
        }
        this.InputChangeHandler = this.InputChangeHandler.bind(this);
        this.CreateBoard = this.CreateBoard.bind(this)
    }

    CreateBoard() {
        this.setState({
            showComponent: true,
            name: [...this.state.name, this.state.term],
            term: ''
        })
    }

    InputChangeHandler(event) {
        this.setState({term: event.target.value})
    }

    render() {
        return(
            <div>
                <h3>Boards</h3>
                <CreateNewBoard name={this.state.name} showComponent={this.state.showComponent}/>
                <input onChange={this.InputChangeHandler} placeholder="Board name"/>
                <button onClick={this.CreateBoard} className="btn btn-secondary">Create new board</button>
            </div>
        )
    }

}


export default Boards;

