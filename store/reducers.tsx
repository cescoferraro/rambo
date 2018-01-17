import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import { cart } from "./reducers/cart"
import { camera } from "./reducers/camera"
import { user } from "./reducers/user"
import { app } from "./reducers/app"
import { snack } from "./reducers/snack"
import { NavigationReducer } from "./reducers/nav"

export const reducers = combineReducers({
    app, NavigationReducer, form, cart, camera, user, snack
})
