import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"

import thunk from "redux-thunk"
import { FeaturedbrandReducer } from "./FeaturedBrands/FeaturedBrands.reducer";
import { searchReducer } from "./searchbar/searchbar.reducer";
import { slidebarReducer } from "./slidebar/slidebar.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer =  combineReducers({searchbar: searchReducer, slidebar:slidebarReducer , featuredbrand:FeaturedbrandReducer})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))
