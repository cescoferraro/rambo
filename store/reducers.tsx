import { combineReducers, Reducer } from 'redux';
import { reducer as form } from 'redux-form'

const app = (state = { title: 'sdkfjn' }, action) => {
    return state;
};
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
        default:
            return state
    }
};


export default (location): Reducer<ILeitorProps> =>
    combineReducers({
        app,
        cart,
        location,
        camera,
        form
    });
