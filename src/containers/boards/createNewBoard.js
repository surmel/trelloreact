import React from 'react';
import './Boards.css';
import Col from "react-bootstrap/Col";

const CreateNewBoard = (props) => {
    return <Col md={2} id={props.data.id} className="boards">
            {
                <span className="board-name">{props.data.name}</span>
            }
        </Col>


};

export default CreateNewBoard;