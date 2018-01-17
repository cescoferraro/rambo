export const snack = (
    state: ISnackStore = {
        visible: true,
        message: "message template",
        action: () => { },
        actionText: "UNDO"
    },
    action
) => {
    switch (action.type) {
        case "SET_SNACK":
            return action.payload
        case "TOOGLE_SNACK":
            return { ...state, visible: !state.visible }
        default:
            return state
    }
}
