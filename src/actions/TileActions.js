import * as types from "./types";

export const tileGenTest = ({ width, height }) => {
    return {
        type: types.TILE_GEN_TEST,
        payload: { width, height }
    };
};

export const tileClick = (tileIndex) => {
    return {
        type: types.TILE_CLICK,
        payload: tileIndex
    };
};

export const tileLongClick = (tileIndex) => {
    return {
        type: types.TILE_LONG_CLICK,
        payload: tileIndex
    };
};

export const linkTiles = ({ width, height }) => {
    return {
        type: types.LINK_TILES,
        payload: {
            width,
            height
        }
    };
};

export const calculateNeighbors = () => {
    return {
        type: types.CALC_NEIGHBORS
    };
};
