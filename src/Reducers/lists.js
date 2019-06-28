import * as listsActions from '../Constants/lists';

const initialState = [];

export default function lists(state = initialState, action){
    switch (action.type) {
        case listsActions.ADD_LIST:
            let id = state.length + 1;
            return [
                ...state,
                {
                    id: id,
                    name: action.data.name,
                }
            ];
        default:
            return state;
    }
}