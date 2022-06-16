import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"

import thunk from "redux-thunk"
import { searchReducer } from "./searchbar/searchbar.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = searchReducer
// combineReducers({counter: counterreducer, todo: todoreducer})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))
