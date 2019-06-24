import * as cardsActions from "../../constants/list/cards";

const initialState = [];

export default function cards(state = initialState, action) {
    switch (action.type) {
        case cardsActions.ADD_CARD:
            action.data.id = state.length + 1;
            return [
                ...state,
                action.data
            ];
        // case userActions.UPDATE_USER:
        // case userActions.DELETE_USER:
        // case userActions.SHOW_USER:
        default:
            return state;
    }
}