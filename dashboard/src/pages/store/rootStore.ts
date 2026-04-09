import {combineReducers} from "@reduxjs/toolkit";
import viewStore from "./view/viewStore";
import serverStore from "./server/serverStore";

const rootStore = combineReducers({
    view:viewStore,
    server : serverStore
})

export type RootState = ReturnType<typeof rootStore>
export default rootStore;