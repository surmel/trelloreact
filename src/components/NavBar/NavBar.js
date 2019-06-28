import React from 'react';
import './navbar.css';
import trelloLogo from '../../Images/trelloLogo.svg'
import homeButton from '../../Images/homeButton.svg'
import board from '../../Images/board.svg'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar_custom'>
                <div className='leftPart'>
                    <Link to='/'>
                        <button className='homeButton1'><img src={homeButton} id='homeButton' alt=''/></button>
                    </Link>
                    <Link to='/boards' style={{ textDecoration: 'none'}}>
                        <div className='board1'>
                            <button className='board'>
                                <img src={board} alt='' style={{width: '20px'}}/>
                                <div style={{fontSize: '14px',fontWeight: 'bold'}}>Boards</div>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className='middlePart'><img src={trelloLogo} className='trelloLogo' alt=''/></div>
            </div>

        )
    }
}

export default NavBar;