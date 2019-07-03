import * as listsActions from '../../constants/list/lists';

const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case listsActions.SHOW_LIST: {
            console.log(action.data);
            return [
                ...action.data,
            ];
        }
        case listsActions.ADD_LIST: {
            let id = state.length + 1;
            console.log(action)
            return [
                ...state,
                {
                    id: id,
                    name: action.data,
                    boardId: action.boardId,
                    addNewTicketInput: false,
                }
            ];
        }
        case listsActions.SHOW_TICKET_INPUT: {
            return state.map(lists =>
                lists.id === action.id ? {...lists, addNewTicketInput: action.bool} : {
                    ...lists,
                    addNewTicketInput: !action.bool
                }
            )

        }
        default:
            return state;
    }
}