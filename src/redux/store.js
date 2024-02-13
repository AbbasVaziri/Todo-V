import {configureStore , combineReducers} from "@reduxjs/toolkit";
import todoReducer from './todoSlice.js'
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    todo: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store