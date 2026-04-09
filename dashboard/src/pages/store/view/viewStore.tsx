import {combineReducers} from "@reduxjs/toolkit";
import mainStore from "./main/mainStore";
import eventStore from "./event/eventStore";
import statStore from "./stat/statStore";

const viewStore = combineReducers({
    main:mainStore.reducer,
    event : eventStore,
    stat : statStore.reducer,
})

export default viewStore;