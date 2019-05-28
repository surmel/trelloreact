import React from 'react';

const CreateNewBoard = (props) => {
    const NewBoard = props.name.map((names) => {
        return (
            <div key={names}>
                {
                    props.showComponent && <h3>{names}</h3>
                }
            </div>
        )
    })

    return (
        <div>{NewBoard}</div>
    )

}

export default CreateNewBoard;