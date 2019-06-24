import * as boardsActions from '../../constants/boards/boards';

const initialState = [];

export default function boards(state = initialState, action) {

    switch (action.type) {
        case boardsActions.SHOW_BOARD: {
            return [
                ...action.data,
            ];
        }
        case boardsActions.ADD_BOARD: {
            {
                let id = state.length + 1;
                return [
                    ...state,
                    {
                        id: id,
                        name: action.data,
                    },
                    // localStorage.setItem('Boards', JSON.stringify(state))
                ]


            }



        }
        default:
            return state;
    }
}