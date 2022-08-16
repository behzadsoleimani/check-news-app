import { createStore } from "redux";

import reducer from "./reducer";
import { IGlobalState } from "./types";

const initialState : IGlobalState = {
    themeMode: "light"
}
export default createStore(reducer , initialState);
