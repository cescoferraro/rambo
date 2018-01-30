import { apiURL, Serialize } from "../../shared/etc"
import { Observable } from "rxjs"

export const useVoucherEpic = (action$, store) => {
    return action$.ofType("USE_VOUCHER")
        .mergeMap((action) => {
            console.log(apiURL())
            return Observable.ajax({
                url: apiURL() + "vouchers/use/" + action.payload,
                method: "POST",
                responseType: "json",
                body: Serialize({ type: "TICKET", clubId: "skdjnf" }),
                headers: {
                    "Content-type": "application/json",
                    "JWT_TOKEN": store.getState().user.token
                },
                crossDomain: true
            })
                .flatMap((data: any) => {
                    return [
                        {
                            type: "WRITE_USED_VOUCHER_INFO", payload: { ...data.response, state: "used" }
                        }
                    ]
                })
                .catch((err) => {
                    console.log(err.xhr)
                    if (err.xhr.status === 416) {
                        console.log("************")
                        console.log("************")
                        console.log(err.xhr._response)
                        console.log("************")
                        console.log("************")
                        console.log("************")
                        return Observable.of({
                            type: "WRITE_ERROR_USING_VOUCHER",
                            payload: {
                                id: action.payload,
                                error: err.xhr.response,
                                status: err.xhr.status
                            }
                        })
                    }
                    return Observable.empty()
                })
        }
        )

}
