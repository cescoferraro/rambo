import { apiURL, Serialize } from "../../shared/etc"
import { Observable } from "rxjs"

export const readVoucherEpic = (action$, store) => {
    return action$.ofType("READ_VOUCHER")
        .mergeMap((action) => {
            console.log(apiURL())
            return Observable.ajax({
                url: apiURL() + "vouchers/read/" + action.payload,
                method: "POST",
                responseType: "json",
                headers: {
                    "Content-type": "application/json",
                    "JWT_TOKEN": store.getState().user.token
                },
                crossDomain: true
            })
                .map((respo) => {
                    return respo
                })
                .catch((err: Response) => {
                    console.log(err)
                    return Observable.empty()
                })
                .flatMapTo([{
                    type: "Navigation/RESET",
                    index: 0,
                    actions: [{
                        type: "Navigation/NAVIGATE",
                        routeName: "Dash"
                    }]
                }])
        }
        )

}
