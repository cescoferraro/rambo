export const blankClub: IClub = {
    id: "",
    startDate: new Date(),
    updateDate: new Date(),
    name: "",
    address: { city: "Porto Alegre", country: "", number: "", state: "", street: "", unit: "" },
    location: {
        type: "",
        coordinates:
            ["30.0346", "51.2177"]
    }
}

export const blankUser: ILoggedUser = {
    _id: "",
    name: "",
    clubId: "",
    clubPercentTicket: 0,
    mail: "",
    token: "",
    profile: "",
    clubs: [blankClub],
    clubName: ""
}
export const blankVoucher = (id): IVoucher => ({
    id,
    startDate: new Date(),
    creationDate: new Date(),
    updateDate: new Date(),
    partyId: "",
    clubId: "",
    customerId: "",
    invoiceId: "",
    partyProductId: "",
    clubName: "",
    customer: {
        birthDate: new Date(),
        creationDate: new Date(),
        firstName: "",
        id: "",
        lastName: "",
        mail: "",
        password: "",
        updateDate: new Date()
    },
    partyName: "",
    customerName: "",
    endDate: new Date(),
    voucherUseDate: "",
    voucherUseUserClubId: "",
    responsibleUserClubId: "",
    voucherUseUserClubName: "",
    status: "",
    price: {
        value: 0,
        currencyIsoCode: "BRL"
    },
    product: {
        id: "",
        name: "",
        nameSort: "",
        type: "",
        category: "",
        creationDate: new Date(),
        updateDate: new Date(),
        image: { fileId: "", mimeType: "", creationDate: new Date() }

    },
    type: ""
})
