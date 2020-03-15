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
                const { up, down, left, right } = response[action.payload].links;
                // while
                if (up) up.revealed = true;
                if (down) down.revealed = true;
                if (left) left.revealed = true;
                if (right) right.revealed = true;
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
            const { width, height } = action.payload;

            if (state.length < width * height) {
                console.log("Width and height does not match tile list length");
                return state;
            }

            const tiles = [...state];

            for (let i = 0; i < (width * height); i++) {
                let up;
                let down;
                let left;
                let right;

                if (i < width) {
                    up = null;
                } else {
                    up = tiles[i - width];
                }

                if (i >= (width * (height - 1))) {
                    down = null;
                } else {
                    down = tiles[i + width];
                }

                if (i % width === 0) {
                    left = null;
                } else {
                    left = tiles[i - 1];
                }

                if (i % width === width - 1) {
                    right = null;
                } else {
                    right = tiles[i + 1];
                }

                tiles[i].links = {
                    up, down, left, right
                };
            }
            return state;
        }
        case types.CALC_NEIGHBORS: {
            return state;
        }
        default:
            return state;
    }
};
