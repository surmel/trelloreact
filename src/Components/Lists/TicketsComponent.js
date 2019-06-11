import React from 'react'
import constTicket from './constTicket'

class TicketsComponent extends React.Component {


    render() {
        return (
            <React.Fragment>
                {constTicket.map((value, index) => {
                    return (
                        this.props.listId === value.columnID &&
                        <div key={index}>
                            <div style={{padding: '10px'}}>{value.name}</div>
                        </div>


                    )
                })}
            </React.Fragment>
        )
    }
}

export default TicketsComponent