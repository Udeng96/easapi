import {combineReducers} from "@reduxjs/toolkit";
import eventListStore from "./list/eventListStore";
import eventGisStore from "./gis/eventGisStore";
import eventBoxStore from "./box/eventBoxStore";

const eventStore = combineReducers({
    list : eventListStore.reducer,
    gis : eventGisStore.reducer,
    box : eventBoxStore.reducer
    
})

export default eventStore;