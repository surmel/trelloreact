import {showLists} from "../actions/lists/lists";

export const getListsAsync = (name) => {
    return (dispatch, getState) => {
        fetch('/lists/lists.json')
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch(showLists(data));
            })
            .catch(err => {
                return err
            })
    }
};