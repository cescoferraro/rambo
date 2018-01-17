import { blankUser } from "../../shared/blank"

export const user = (state: ILoggedUser = blankUser, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload
        default:
            return state
    }
}
