export const camera = (state = { multiple: false }, action) => {
    switch (action.type) {
        case "CAMERA_TOGGLE_MULTIPLE":
            return { ...state, multiple: !state.multiple }
        default:
            return state
    }
}
