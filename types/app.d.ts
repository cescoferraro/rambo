interface IVoucherRequest {
    id: string
}

interface ICartStore {
    vouchers: []IVoucherRequest
}

interface ILeitorProps {
    location: any
    app: any
    cart: ICartStore
    camera: {
	multiple: boolean
    } 
    reduxform:any
}

interface IDispatch {
    dispatch: IAction
}

interface IAction {
    type: string
    payload:any 
}
