import React from 'react';
import './css/List.css';
import constLists from './constList'
import MenuComponent from "../Menu/MenuComponent";

import NewListButtonComponent from './NewListButtonComponent';
import AddNewListComponent from "./AddNewListComponent";
import NewListComponent from "./NewListComponent";

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

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            openedListAction: false,
            lists: [],
            listName: ''
        };
        // binding events
        this.toggleListAction = this.toggleListAction.bind(this);
        this.createLists = this.createLists.bind(this);
    }

    toggleListAction(e) {
        this.setState({
            openedListAction: !this.state.openedListAction
        })
    }

    createLists() {
        let lists = this.state.lists;

        lists.push({
            id: this.state.lists.length,
            name: this.state.listName
        });
        this.setState({
            // ...this.state,
            showComponent: true,
            lists: lists,
        });
    }


    render() {
        return (
            <div style={styles.container}>
                <div className='clearfix'>
                    <MenuComponent/>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        {constLists.map((value, index) => {
                            return (
                                <div key={value.id} className='col-md listCss'>
                                    <span>{value.id}</span>
                                    <span>{value.name}</span>
                                </div>
                            )
                        })}
                        <NewListComponent  data={this.state.listName} showComponent={this.state.showComponent}/>
                        {this.state.openedListAction ? <AddNewListComponent clickToggleList={this.toggleListAction} createList={this.createLists}/> :
                            <NewListButtonComponent clickToggleList={this.toggleListAction}/>}
                    </div>
                </div>
            </div>
        )
    }
}


export default ListComponent;