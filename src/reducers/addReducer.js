import { combineReducers } from "redux";

const addReducer = (state = 1, action) => {
    switch(action.type) {
        case "ADD_DATA":
        return state + 1;
        case "BACK_DATA":
        return state - 1;
    default:
        return state;
    };
};

const addReducers = combineReducers({
count: addReducer
});

export default addReducers;

