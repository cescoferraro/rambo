interface IVoucherRequest {
    id: string
}

interface ICartStore {
    vouchers: []IVoucherRequest
}

interface ILeitorProps {
    app: any
    cart: ICartStore
    camera: {
        multiple: boolean
    }
    reduxform: any
    user:ILoggedUser
    nav: any
}

interface IDispatch {
    dispatch: IAction
}

interface IAction {
    type: string
    payload: any
}

interface ILoggedUser {
    _id: string
    token: string
    profile: string
    name: string
    mail: string
    clubId: string
    clubName: string
    clubPercentTicket: number
}
