import {combineReducers} from "@reduxjs/toolkit";
import MainServerStore from "./main/mainServerStore";
import eventServerStore from "./event/eventServerStore";
import statServerStore from "./stat/statServerStore";

const serverStore = combineReducers({
    main : MainServerStore.reducer,
    event : eventServerStore.reducer,
    stat : statServerStore.reducer
})

export default serverStore;