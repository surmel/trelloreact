import {combineReducers} from "redux";
import cards from "./lists/cards";
import lists from "./lists/lists";
import boards from "./boards/boards";
import tickets from "./tickets/tickets";

const rootReducer = combineReducers({
    cards,
    lists,
    boards,
    tickets
});

export default rootReducer