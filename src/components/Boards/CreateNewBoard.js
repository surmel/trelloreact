import React from 'react';

const CreateNewBoard = (props) => {
    const NewBoard = (
        <div id={props.data.id}>
            {
                props.showComponent && <h3>{props.data.name}</h3>
            }
        </div>
    );

    return <div>{NewBoard}</div>

};

export default CreateNewBoard;