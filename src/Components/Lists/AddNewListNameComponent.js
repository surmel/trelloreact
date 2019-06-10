import React from 'react';
import './css/List.css';
import cancel from '../../Images/cancel-music.svg';

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


class AddNewListNameComponent extends React.Component {

    render() {
        return (

            <div>
                <div className='cardAdd changedHeight'>
                    <input type="text" style={styles.nameInput} onChange={this.props.inputChangeHandler} placeholder='Ввести заголовок списка'/>
                    <button className='addColumn' onClick={this.props.createLists}>Add List</button>
                    <img src={cancel} className='cancelClass' alt="cancelCard" onClick={this.props.clickToggleList}/>
                </div>
            </div>
        )
    }
}

export default AddNewListNameComponent;