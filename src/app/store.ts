import {combineReducers, configureStore} from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"
import {characterReducer} from './../reducers/character'

const rootReducer = combineReducers({
    character: characterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>
