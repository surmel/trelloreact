import * as boardsActions from '../../constants/boards/boards';

export const showBoard = (data) => ({type: boardsActions.SHOW_BOARD, data});
export const addBoard = (data) => ({type: boardsActions.ADD_BOARD, data});
