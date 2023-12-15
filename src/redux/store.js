import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Reducer } from "./reducers/Reducer";



const rootReducer = combineReducers({Reducer})

export const store=legacy_createStore(rootReducer)