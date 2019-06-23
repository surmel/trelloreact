import {combineReducers} from "redux";
import cards from "./lists/cards";
import lists from "./lists/lists";
// import boards from "./boards/boards";

const rootReducer = combineReducers({
    cards,
    lists,
    // boards
});

export default rootReducer