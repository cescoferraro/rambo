import { blankUser } from "../../shared/blank"

export const user = (state: ILoggedUser = blankUser, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload
        case "SET_CLUB":
            const club = action.payload
            return {
                ...state,
                clubId: club.id,
                clubName: club.name,
                clubPercentTicket: club.clubPercentTicket
            }
        default:
            return state
    }
}
