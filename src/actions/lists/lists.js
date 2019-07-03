import * as listsAction from '../../constants/list/lists';

export const addList = (data) => ({type: listsAction.ADD_LIST, data});
export const openNewTicket = (id, bool) => ({type: listsAction.SHOW_TICKET_INPUT, id, bool});
export const showLists = (data) => ({type: listsAction.SHOW_LIST, data});