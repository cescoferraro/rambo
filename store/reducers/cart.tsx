export const cart = (
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
