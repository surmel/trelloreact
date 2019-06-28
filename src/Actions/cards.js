import * as cardsActions from "../Constants/cards";

export const addUser = (data = {}) => ({type: cardsActions.ADD_CARD, data});
export const deleteUser = (id) => ({type: cardsActions.DELETE_CARD, id: id});
