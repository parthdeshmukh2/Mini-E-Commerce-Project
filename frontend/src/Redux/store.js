import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import {reducer as CartReducer} from "./CartReducer/reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({AppReducer, AuthReducer, CartReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));