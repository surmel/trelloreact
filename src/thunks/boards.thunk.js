import {showBoard} from "../actions/boards/boards";

export const getBoardsAsync = (name) => {
    return (dispatch, getState) => {
            fetch('/boards/boards.json')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    dispatch(showBoard(data));
                })
                .catch(err => {
                    return err
                })
        }
};