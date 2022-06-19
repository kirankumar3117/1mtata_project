import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"

import thunk from "redux-thunk"
import { FeaturedbrandReducer } from "./LandingPage/FeaturedBrands/FeaturedBrands.reducer";
import { PopularcatogeryReducer } from "./LandingPage/popularcatogery/popularcatogery.reducer";
import { HealthconcernReducer } from "./LandingPage/ShopbyHealthConcern/Healthconcern.reducer";
import { searchReducer } from "./searchbar/searchbar.reducer";
import { slidebarReducer } from "./slidebar/slidebar.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer =  combineReducers({searchbar: searchReducer, slidebar:slidebarReducer , featuredbrand:FeaturedbrandReducer,popularcatogery:PopularcatogeryReducer,healthconcern:HealthconcernReducer})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))
