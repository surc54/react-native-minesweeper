import * as types from "./types";

export const reset = () => {
    return {
        type: types.GAME_RESET,
    };
};

export const setDebug = (val) => {
    return {
        type: types.DEBUG_CHANGED,
        payload: val
    };
};
