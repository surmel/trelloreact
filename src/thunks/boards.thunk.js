import {showBoard} from "../actions/boards/boards";

export const getBoardsAsync = (name) => {
    return (dispatch, getState) => {
        const boardList = localStorage.getItem('Boards');
        if (boardList) {
            dispatch(showBoard(JSON.parse(boardList)));
        } else {
            fetch('http://localhost:3001/boards/boards.json')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    dispatch(showBoard(data));
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
};