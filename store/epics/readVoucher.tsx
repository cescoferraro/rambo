import { apiURL, Serialize } from "../../shared/etc"
import { Observable } from "rxjs"

export const readVoucherEpic = (action$, store) => {
    return action$.ofType("READ_VOUCHER")
        .mergeMap((action) => {
            console.log(apiURL())
            return Observable.ajax({
                url: apiURL() + "vouchers/" + action.payload,
                method: "GET",
                responseType: "json",
                headers: {
                    "Content-type": "application/json",
                    "JWT_TOKEN": store.getState().user.token
                },
                crossDomain: true
            })
                .flatMap((data: any) => {
                    console.log("reading a voucher")
                    delete data.response.customer.musicStyles
                    return [
                        {
                            type: "WRITE_VOUCHER_INFO", payload: { ...data.response, state: "read" }
                        }
                    ]
                })
                .catch((err) => {
                    console.log(err.xhr)
                    return Observable.empty()
                })
        }
        )

}
