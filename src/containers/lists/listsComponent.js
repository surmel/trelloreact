import React from 'react'
import {connect} from "react-redux";
import AddNewListNameComponent from "./addNewListNameComponent";
import NewListButtonComponent from "../../components/lists/NewListButtonComponent";
import '../../components/lists/css/List.css';
import {openNewTicket} from '../../actions/lists/lists';
import AddNewTicketNameComponent from "../tickets/addNewTicketNameComponent";
import NewTicketButtonComponent from "../../components/tickets/newTicketButtonComponent";

class ListsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            openedListAction: false,
            lists: [],
        };
        this.toggleListAction = this.toggleListAction.bind(this);
        this.toggleTicketsAction = this.toggleTicketsAction.bind(this);
    }

    toggleListAction() {
        this.setState({
            openedListAction: !this.state.openedListAction
        })
    }

    toggleTicketsAction(index, id) {
        let ticketId = id;
        let bool = !this.props.lists[index].addNewTicketInput;
        this.props.openNewTicket(ticketId, bool)
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {

                    this.props.lists ? this.props.lists.map((value, index) => {
                        return (
                            <div key={index} className='listCss' style={{padding: '0'}}>
                                <div style={{padding: '10px'}}>{value.name}</div>
                                {
                                    this.props.lists[index].addNewTicketInput ?
                                        <AddNewTicketNameComponent id={value.id} index={index}
                                                                   clickToggleTicket={this.toggleTicketsAction}/> :
                                        <NewTicketButtonComponent id={value.id} index={index}
                                                                  clickToggleTicket={this.toggleTicketsAction}/>
                                }

                            </div>
                        )
                    }) : null
                }
                {
                    this.state.openedListAction ?
                        <AddNewListNameComponent clickToggleList={this.toggleListAction} allLists={this.state.lists}/> :
                        <NewListButtonComponent clickToggleList={this.toggleListAction}/>
                }
            </React.Fragment>
        )
    }
}

const mapsStateToProps = state => ({
    lists: state.lists,
    tickets: state.tickets
});
const mapsDispatchToProps = dispatch => ({
    openNewTicket: (id, bool) => dispatch(openNewTicket(id, bool))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(ListsComponent);