import { createStore, combineReducers } from "redux"
import { AppNavigator } from "../app/stack"
const app = (state = { title: "sdkfjn" }, action) => {
    return state
}

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("Login")
)

const NavigationReducer = (state = initialState, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
}

const reducers = combineReducers({ app, NavigationReducer })

export const configureStore = (initial) => {
    return createStore(reducers, initial)
}
