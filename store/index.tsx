import { createStore, combineReducers, applyMiddleware } from "redux"
import { AppNavigator } from "../app/stack"
import { reducer as form } from "redux-form"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import "rxjs"
import "rxjs/Rx"

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


import { Constants } from 'expo'
import { Observable } from "rxjs";
const ip = Constants.experienceUrl.split(':')[1]

const pingEpic = action$ => {
    return action$.ofType('PING').mapTo({ type: 'DASHBOARD' })
};

export const Serialize = (object) => {
    return require("serialize-javascript")(object)
}
export const apiURL = () => (__DEV__ ? "http:" + ip + ":7000/" : "https://api.onni.live/")

const loginEpic = action$ => {
    return action$.ofType('LEITOR_LOGIN')
        .mergeMap((action) => {
            console.log(apiURL())
            return Observable.ajax({
                url: apiURL() + "user/leitor/login",
                body: Serialize(action.payload),
                method: "POST",
                responseType: "json",
                crossDomain: true
            })
                .map((respo) => {
                    return respo
                })
                .catch((err: Response) => { return Observable.empty() })
                .flatMapTo([{
                    type: "Navigation/RESET",
                    index: 0,
                    actions: [{
                        type: "Navigation/NAVIGATE",
                        routeName: "Dash"
                    }]
                }])
        }
        )

};
export const rootEpic = combineEpics(pingEpic, loginEpic)
const epicMiddleware = createEpicMiddleware(rootEpic)

const camera = (state = { multiple: false }, action) => {
    switch (action.type) {
        case "CAMERA_TOGGLE_MULTIPLE":
            return { ...state, multiple: !state.multiple }
        default:
            return state
    }
};
const cart = (
    state = { vouchers: [] },
    action: {
        type: string,
        payload: IVoucherRequest
    }
) => {
    switch (action.type) {
        case "ADD_VOUCHER":
            return { ...state, vouchers: [...state.vouchers, action.payload] }
        case "CLEAR_CART":
            return { ...state, vouchers: [] }
        default:
            return state
    }
};
const reducers = combineReducers({ app, NavigationReducer, form, cart, camera })
export const configureStore = (initial) => {
    return createStore(reducers, initial, applyMiddleware(epicMiddleware))
}
