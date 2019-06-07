import React from 'react';

const NewListComponent = (props) => {
    const NewList = (
        <div id={props.data.id}>
            {
                props.showComponent && <h3>{props.data.name}</h3>
            }
        </div>
    );

    return <div>{NewList}</div>

};

export default NewListComponent;