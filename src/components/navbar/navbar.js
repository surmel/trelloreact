import React from 'react';
import './navbar.css';
import trelloLogo from '../../Images/trelloLogo.svg'
import homeButton from '../../Images/homeButton.svg'
import board from '../../Images/board.svg'


class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='leftPart'>
                    <button className='homeButton1'><img src={homeButton} id='homeButton' alt=''/></button>
                    <div className='board1'>
                        <button className='board'><img src={board} alt=''/> Boards</button>
                    </div>
                </div>
                <div className='middlePart'><img src={trelloLogo} className='trelloLogo' alt=''/></div>
            </div>
        )
    }
}

export default NavBar;