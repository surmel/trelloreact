import React from 'react';
import {connect} from "react-redux";
import cancel from "../../Images/cancel-music.svg";
import Form from "react-bootstrap/Form";

class AddNewTicketNameComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    indexFunction() {
        this.props.clickToggleTicket(this.props.index, this.props.id)
    }

    render() {
        return (
            <React.Fragment>
                <Form style={{padding: '6px'}}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="2" placeholder='Enter the title for this card...'/>
                    </Form.Group>
                    <button className='addColumn'>Add List</button>
                    <img src={cancel} className='cancelClass' alt="cancelCard" style={{cursor: 'pointer'}} onClick={this.indexFunction.bind(this)}/>
                </Form>
            </React.Fragment>
        )
    }
}

const mapsStateToProps = state => ({});
const mapsDispatchToProps = dispatch => ({});

export default connect(mapsStateToProps, mapsDispatchToProps)(AddNewTicketNameComponent);