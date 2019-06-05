import React from 'react';
import './List.css';
import cancel from '../../Images/cancel-music.svg';
import lists from './constList'
import MenuComponent from "../Menu/MenuComponent";

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
            openedListAction: false,
            cardName: ''
        };
        // binding events
        this.toggleListAction = this.toggleListAction.bind(this);
    }

    toggleListAction(e) {
        this.setState({
            openedListAction: !this.state.openedListAction
        })
    }

    addNewCard(e) {
        alert(1);
        e.stopPropagation();
        console.log(this.state.cardName)
    }

    cardNameChange(e) {
        this.setState({cardName: e.target.value})
    }

    render() {
        return (
            <div style={styles.container}>
                <div className='clearfix'>
                    <MenuComponent/>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        {lists.map((value, index) => {
                            return (
                                <div key={value.id} className='col-md listCss'>
                                    <span>{value.id}</span>
                                    <span>{value.name}</span>
                                </div>
                            )
                        })}
                        <div
                            className={!this.state.openedListAction ? 'cardAdd' : 'cardAdd changedHeight'}>  {/*help to change this code part*/}
                            {this.state.openedListAction ?
                                <div onClick={this.toggleListAction}>
                                    <input type="text" style={styles.nameInput} placeholder='Ввести заголовок списка'
                                           value={this.state.cardName} onChange={this.cardNameChange.bind(this)}/>
                                    <button className='addColumn' onClick={this.addNewCard.bind(this)}>Добавить список
                                    </button>
                                    <img src={cancel} className='cancelClass' alt="cancelCard"
                                         onClick={this.toggleListAction}
                                    />
                                </div> : ''
                            }
                            <p onClick={this.toggleListAction} className={'addCard'}>+ Добавьте еще одну колонку</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ListComponent;