import React from 'react';
import './css/List.css';

class NewListButtonComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='cardAdd' onClick={this.props.clickToggleList} style={{backgroundColor: '#0000001f'}}>
                    <p className='addCard'>+ Add another list</p>
                </div>
            </div>
        )
    }
}

export default NewListButtonComponent;