import React from 'react';
import {connect} from "react-redux";


class AddNewTicketNameComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    indexFunction() {
        this.props.clickToggleTicket(this.props.index, this.props.id)
    }

    render() {
        return (
            <React.Fragment>
                <input type="text"/>
                <div onClick={this.indexFunction}>hello</div>
            </React.Fragment>
        )
    }
}

const mapsStateToProps = state => ({
});
const mapsDispatchToProps = dispatch => ({
});

export default  connect(mapsStateToProps, mapsDispatchToProps)(AddNewTicketNameComponent);