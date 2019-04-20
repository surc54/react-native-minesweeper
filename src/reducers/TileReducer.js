import * as types from "../actions/types";

const INITIAL_STATE = [

];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TILE_GEN_TEST: {
            const response = [];
            const { width, height } = action.payload;
            for (let i = 0; i < width * height; i++) {
                response.push({
                    mine: false,
                    flag: false,
                    revealed: false,
                    neighborMines: 3
                });
            }
            return response;
        }
        case types.TILE_CLICK: {
            const response = [...state];
            if (!response[action.payload].flag) {
                response[action.payload].revealed = true;
            }
            return response;
        }
        case types.TILE_LONG_CLICK: {
            const response = [...state];
            if (!response[action.payload].revealed) {
                response[action.payload].flag = !response[action.payload].flag;
            }
            return response;
        }
        case types.LINK_TILES: {
            
            return state;
        }
        case types.CALC_NEIGHBORS: {
            return state;
        }
        default:
            return state;
    }
};
