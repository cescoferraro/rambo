import "rxjs"
import { createStore, applyMiddleware } from "redux"
import { epicMiddleware } from "./epics"
import { reducers } from "./reducers"

export const configureStore = (initial) => {
    return createStore(reducers, initial, applyMiddleware(epicMiddleware))
}
