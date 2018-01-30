export const camera = (
    state: ICameraStore = {
        multiple: false,
        side: "back",
        flash: "off"
    },
    action
) => {
    switch (action.type) {
        case "TOGGLE_CAMERA_SIDE":
            return { ...state, side: state.side === "front" ? "back" : "front" }
        case "TOGGLE_CAMERA_FLASH":
            return { ...state, flash: state.flash === "on" ? "off" : "on" }
        case "CAMERA_TOGGLE_MULTIPLE":
            return { ...state, multiple: !state.multiple }
        default:
            return state
    }
}
