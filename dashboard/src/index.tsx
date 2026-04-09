import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Root from "./pages/components/root";
import {Reset} from "styled-reset";

import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";



// dashboard

import "./public/static/dashboard/css/common.css";
import "./public/static/dashboard/css/dashContainer.css";
import "./public/static/dashboard/css/dashDetailContainer.css";
import "./public/static/dashboard/css/gisLocArea.css";
import "./public/static/dashboard/css/scrollStyle.css";
import "./public/static/dashboard/css/selectBox.css";
import "./public/static/common/css/scroll.css";


//event

import "./public/static/dashboard/event/css/scrollStyle.css";
import "./public/static/dashboard/event/css/event.css";
import "./public/static/dashboard/event/css/eventSensorContainer.css";
import "./public/static/dashboard/event/css/eventListContainer.css";
import "./public/static/dashboard/event/css/selectBox.css";
import "./public/static/dashboard/event/css/evtReleasePopup.css";
import "./public/static/dashboard/event/css/evtReOccurPopup.css";
import "./public/static/dashboard/event/css/evtSpreadPopup.css";
import "./public/static/dashboard/event/css/manualSpreadPopup.css";
import "./public/static/dashboard/event/css/pastEvtHistoryPopup.css";
import "./public/static/dashboard/event/css/selectEvtTargetPopup.css";


//stat
import "./public/static/dashboard/stat/css/scrollStyle.css";
import "./public/static/dashboard/stat/css/statisContainer.css";
import "./public/static/dashboard/stat/css/selectBox.css";

//cctvFull



//  common

import "./public/static/common/css/checkBox.css";
import "./public/static/common/css/common.css";
import "./public/static/common/css/datePicker.css";
import "./public/static/common/css/fontStyle.css";
import "./public/static/common/css/gisArea.css";
import "./public/static/common/css/gisCctvPopup.css";
// import "./public/static/common/css/gisClusterPopup.css";
import "./public/static/common/css/gisIcon.css";
import "./public/static/common/css/gisSensorPopup.css";
import "./public/static/common/css/legendArea.css";
import "./public/static/common/css/modalPopup.css";
import "./public/static/common/css/navArea.css";
import "./public/static/common/css/pagination.css";
import "./public/static/common/css/radioButton.css";
import "./public/static/common/css/reset.css";
import "./public/static/common/css/scrollStyle.css";
import "./public/static/common/css/tooltip.css";
import "./public/static/common/css/tree.css";

import rootStore from "./pages/store/rootStore";
import rootSaga from "./pages/saga/rootSaga";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : rootStore,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

root.render(
    <Provider store={store}>
        <Reset/>
        <Root/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

