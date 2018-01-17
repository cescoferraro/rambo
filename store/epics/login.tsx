import { apiURL, Serialize } from "../../shared/etc"
import { Observable } from "rxjs"

export const loginEpic = (action$) => {
    return action$.ofType("LEITOR_LOGIN")
        .mergeMap((action) => {
            console.log(apiURL())
            return Observable.ajax({
                url: apiURL() + "user/leitor/login",
                body: Serialize(action.payload),
                method: "POST",
                responseType: "json",
                crossDomain: true
            })
                .map((respo) => {
                    return respo
                })
                .catch((err: Response) => {
                    console.log(err)
                    return Observable.empty()
                })
                .flatMap((data: any) => [
                    { type: "SET_USER", payload: data.response },
                    {
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
