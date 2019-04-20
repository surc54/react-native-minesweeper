import { combineReducers } from "redux";
import GameReducer from "./GameReducer";
import TileReducer from "./TileReducer";

export default combineReducers({
    game: GameReducer,
    tiles: TileReducer
});
