import React from 'react';

// import './css/List.css';

class NewTicketButtonComponent extends React.Component {

    indexFunction() {
        this.props.clickToggleTicket(this.props.index, this.props.id)
    }

    render() {
        return (
            <div>
                <div className='cardAdd' onClick={this.indexFunction.bind(this)}>
                    <p className='addCard'>+ Add card</p>
                </div>
            </div>
        )
    }
}

export default NewTicketButtonComponent;