import React from 'react';
import '../../components/lists/css/List.css';
import {connect} from "react-redux";
import {addList} from "../../actions/lists/lists";
import cancel from '../../Images/cancel-music.svg';

const styles = {
    nameInput: {
        width: '97%',
        borderRadius: '3px',
        border: 'none',
        boxShadow: 'none',
        float: 'left',
        fontSize: '13px',
        height: '23px',
        margin: '0',
        padding: '4px',
        lineHeight: '19px',
        zIndex: '1',
    },
};

class AddNewListNameComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            openedListAction: false,
            listName: ''
        };
        // binding events
        this.createLists = this.createLists.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    createLists() {
        if (this.state.listName.length) {
            let newListName = this.state.listName;
            this.setState({
                listName: ''
            });
            this.props.addList(newListName);
        } else {
            alert('Please enter valid name')
        }
    }

    inputChangeHandler(event) {
        this.setState({
                listName: event.target.value
            }
        )
    }

    render() {
        return (

            <div>
                <div className='cardAdd changedHeight'>
                    <input type="text" id="listNameInput" style={styles.nameInput} onChange={this.inputChangeHandler}
                           placeholder='Enter list title... '/>
                    <button className='addColumn' onClick={this.createLists}>Add List</button>
                    <img src={cancel} className='cancelClass' alt="cancelCard" onClick={this.props.clickToggleList}/>
                </div>
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    lists: state.lists
});
const mapsDispatchToProps = dispatch => ({
    addList: (name) => dispatch(addList(name)),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(AddNewListNameComponent);