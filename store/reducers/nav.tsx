import { AppNavigator } from "../../app/stack"

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("Login")
)

export const NavigationReducer = (state = initialState, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
}
