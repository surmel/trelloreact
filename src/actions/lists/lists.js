import * as listsAction from '../../constants/list/lists';

export const addList = (boardId, data) => ({type: listsAction.ADD_LIST, boardId, data});
export const openNewTicket = (id, bool) => ({type: listsAction.SHOW_TICKET_INPUT, id, bool});
export const showLists = (data) => ({type: listsAction.SHOW_LIST, data});