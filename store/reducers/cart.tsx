export const cart = (
    state = { vouchers: [] },
    action: {
        type: string,
        payload: any
    }
) => {
    switch (action.type) {
        case "WRITE_VOUCHER_INFO":
            const toReplace = state.vouchers.filter(
                (voucher: IVoucherRequest) => (voucher.id === action.payload.id))
            state.vouchers[state.vouchers.indexOf(toReplace)]

            return { ...state, vouchers: [...state.vouchers] }
        case "ADD_VOUCHER":
            return { ...state, vouchers: [...state.vouchers, action.payload] }
        case "CLEAR_CART":
            return { ...state, vouchers: [] }
        default:
            return state
    }
};
