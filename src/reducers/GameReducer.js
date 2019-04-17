import * as types from "../actions/types";

const INITIAL_STATE = {
    width: 0,
    height: 0,
    debug: true,
};

export default (state = INITIAL_STATE, action) => {
    console.log("ACTION: ", action.type);
    switch (action.type) {
        case types.GAME_RESET:
            return {
                ...INITIAL_STATE
            };
        case types.DEBUG_CHANGED:
            return {
                ...state,
                debug: action.payload
            };
        default:
        return state;
    }
};
