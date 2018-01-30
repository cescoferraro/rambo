export const cart = (
    state = { vouchers: [] },
    action: {
        type: string,
        payload: any
    }
) => {
    switch (action.type) {
        case "WRITE_USED_VOUCHER_INFO":
            console.log("redux using a voucher")
            const atoReplace = state.vouchers.filter(
                (voucher: IVoucherRequest) =>
                    (voucher.id === action.payload.id))[0]
            const aindex = state.vouchers.indexOf(atoReplace)
            state.vouchers[aindex] = action.payload
            return { ...state }
        case "WRITE_VOUCHER_INFO":
            console.log("redux reading a voucher")
            const toReplace = state.vouchers.filter(
                (voucher: IVoucherRequest) =>
                    (voucher.id === action.payload.id))[0]
            const index = state.vouchers.indexOf(toReplace)
            console.log('state before writing info')
            console.log(toReplace.state)
            if (toReplace.state === "used") {
                state.vouchers[index] = { ...action.payload, state: "used" }
                return { ...state }
            }
            if (toReplace.state === "error") {
                state.vouchers[index] = {
                    ...action.payload,
                    state: "error",
                    error: state.vouchers[index].error
                }
                return { ...state }
            }
            state.vouchers[index] = action.payload
            return { ...state }
        case "WRITE_ERROR_USING_VOUCHER":
            console.log("trigguer happy")
            console.log("redux reading a voucher")
            const btoReplace = state.vouchers.filter(
                (voucher: IVoucherRequest) =>
                    (voucher.id === action.payload.id))[0]
            const bindex = state.vouchers.indexOf(btoReplace)
            console.log("state before erroring")
            console.log(btoReplace.state)
            state.vouchers[bindex] = {
                ...state.vouchers[bindex],
                state: "error",
                error: action.payload.error,
                errorStatus: action.payload.status
            }
            console.log("state after error")
            console.log({ ...state })
            return { ...state }
        case "ADD_VOUCHER":
            return { ...state, vouchers: [...state.vouchers, action.payload] }
        case "CLEAR_CART":
            return { ...state, vouchers: [] }
        default:
            return state
    }
}
