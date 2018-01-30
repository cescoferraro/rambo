interface IVoucherRequest extends IVoucher {
    state: "inserted" | "read" | "used" | "error"
    errorStatus?: number
    error?: string
}

interface ILocation {
    type: string
    coordinates: string[]
}

interface IAddress {
    city: string
    state: string
    country: string
    street: string
    number: string
    unit: string
}

interface IClub {
    id: string
    startDate: Date
    updateDate: Date
    name: string
    address: IAddress
    location: ILocation
}

interface ICartStore {
    vouchers: []IVoucherRequest
}
interface ICameraStore {
    multiple: boolean
    side: "front" | "back"
    flash: "on" | "off"
}

interface ILeitorProps {
    app: any
    cart: ICartStore
    camera: ICameraStore
    reduxform: any
    user: ILoggedUser
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
    clubs: IClub[]
    clubName: string
    clubPercentTicket: number
}


interface IVoucher {
    id: string
    creationDate: Date
    updateDate: Date
    customerId: string
    partyId: string
    clubId: string
    invoiceId: string
    partyProductId: string
    clubName: string
    partyName: string
    customerName: string
    customer: ICustomer
    startDate: Date
    endDate: Date
    voucherUseDate: string
    voucherUseUserClubId: string
    responsibleUserClubId: string
    voucherUseUserClubName: string
    status: string
    price: IPrice
    product: IProduct
    type: string
}

interface IProduct {
    id: string
    creationDate: Date
    updateDate: Date
    name: string
    nameSort: string
    category: string
    type: string
    image: IOnniImage
}


interface IOnniImage {
    fileId: string
    mimeType: string
    creationDate: Date
}


interface IPrice {
    value: number
    currencyIsoCode: string
}
