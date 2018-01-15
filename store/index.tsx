import { createLogger } from "redux-logger"
import { createEpicMiddleware } from "redux-observable"
import { rootEpic } from "./epics"
import { applyMiddleware, compose, createStore } from "redux"
import reducers from "./reducers"
import createHistory from "history/createMemoryHistory"
import { connectRoutes } from "redux-first-router"
import { routesMap } from "../src/routes"


const epicMiddleware = createEpicMiddleware(rootEpic)

export const configureStore = (initial) => {
    const { reducer, middleware, enhancer } = connectRoutes(
        createHistory(),
        routesMap
    )

    return createStore(
        reducers(reducer),
        initial,
        compose(
            enhancer,
            applyMiddleware(middleware, epicMiddleware)
        )
    )
}
