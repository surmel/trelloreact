import React from 'react'
import TicketsComponent from "./TicketsComponent";

class ListsComponent extends React.Component{

    render(){
        return (
            <React.Fragment>
                {this.props.lists.map((value, index) => {
                    return (
                        <div key={index} className='col-md listCss' style={{padding: '0'}}>
                            <div style={{padding: '10px'}}>{value.name}</div>
                            <TicketsComponent listId={value.id} />
                            <div className='ticket'>+Add a card</div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default ListsComponent