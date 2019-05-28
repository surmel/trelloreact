import React from 'react';

const CreateNewBoard = (props) => {
    const NewBoard = props.name.map((value, index) => {
        return props.name === value ? null :
            <div key={index}>
                {
                    props.showComponent && <h3>{value}</h3>
                }
            </div>


    });

    return <div>{NewBoard}</div>

};

export default CreateNewBoard;