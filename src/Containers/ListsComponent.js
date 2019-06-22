import React from 'react'
import {connect} from "react-redux";
import AddNewListNameComponent from "./AddNewListNameComponent";
import NewListButtonComponent from "../components/Lists/NewListButtonComponent";
import '../components/Lists/css/List.css';

class ListsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            openedListAction: false,
            lists: [],
        };
        this.toggleListAction = this.toggleListAction.bind(this);
    }

    toggleListAction() {
        this.setState({
            openedListAction: !this.state.openedListAction
        })
    }
    render() {
        return (
            <React.Fragment>
                {this.props.lists.map((value, index) => {
                    return (
                        <div key={value.id} className='listCss' style={{padding: '0'}}>
                            <div style={{padding: '10px'}}>{value.name}</div>
                            {/*<TicketsComponent listId={value.id}/>*/}
                            <div className='ticket'>+Add a card</div>
                        </div>
                    )
                })}
                {this.state.openedListAction ? <AddNewListNameComponent allLists={this.state.lists} /> :
                    <NewListButtonComponent clickToggleList={this.toggleListAction}/>}
            </React.Fragment>
        )
    }
}

const mapsStateToProps = state => ({
    lists: state.lists
});

export default connect(mapsStateToProps)(ListsComponent);