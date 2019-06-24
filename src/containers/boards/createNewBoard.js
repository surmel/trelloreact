import React from 'react';
import './Boards.css';

const CreateNewBoard = (props) => {
    return <div id={props.data.id} className="boards">
            {
                <h3 className="board-name">{props.data.name}</h3>
            }
        </div>


};

export default CreateNewBoard;