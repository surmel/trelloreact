import React from 'react';
import './css/List.css';
import constLists from './constList'
import constTicket from './constTicket'
import MenuComponent from "../Menu/MenuComponent";

import NewListButtonComponent from './NewListButtonComponent';
import AddNewListNameComponent from "./AddNewListNameComponent";
import ListsComponent from "./ListsComponent";

const styles = {
    container: {
        padding: '10px'
    },
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

class MainListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            openedListAction: false,
            lists: constLists,
            tickets: constTicket,
            listName: ''
        };
        // binding events
        this.toggleListAction = this.toggleListAction.bind(this);
        this.createLists = this.createLists.bind(this);
        this.InputChangeHandler = this.InputChangeHandler.bind(this);
    }

    toggleListAction(e) {
        this.setState({
            openedListAction: !this.state.openedListAction
        })
    }

    createLists() {
        let lists = this.state.lists;
        if (this.state.listName.length) {
            lists.push({
                id: this.state.lists.length,
                name: this.state.listName
            });
            this.setState({
                showComponent: true,
                lists: lists,
            });

        } else {
            alert('lav ches anum')
        }

    }

    InputChangeHandler(event) {
        this.setState({
                listName: event.target.value
            }
        )
    }

    render() {
        return (
            <div style={styles.container}>
                <div className='clearfix'>
                    <MenuComponent/>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <ListsComponent lists={this.state.lists} />
                        {this.state.openedListAction ? <AddNewListNameComponent clickToggleList={this.toggleListAction}
                                                                                createLists={this.createLists}
                                                                                inputChangeHandler={this.InputChangeHandler}/> :
                            <NewListButtonComponent clickToggleList={this.toggleListAction}/>}
                    </div>
                </div>
            </div>
        )
    }
}


export default MainListComponent;