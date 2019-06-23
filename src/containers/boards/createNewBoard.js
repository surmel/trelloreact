import React from 'react';
import './Boards.css';

const CreateNewBoard = (props) => {
    const NewBoard = (
        <div id={props.data.id} className="boards">
            {
                <h3 className="board-name">{props.data.name}</h3>
            }
        </div>
    );

    return <div>{NewBoard}</div>

};

export default CreateNewBoard;