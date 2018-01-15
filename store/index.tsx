import { createStore, combineReducers } from "redux"

const app = (state = { title: "sdkfjn" }, action) => {
    return state
}

const reducers = combineReducers({ app })

export const configureStore = (initial) => {
    return createStore(reducers, initial)
}
