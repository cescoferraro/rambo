import { apiURL, Serialize } from "../../shared/etc"
import { Observable } from "rxjs"
import { Facebook } from "expo"
import { Alert } from "react-native"

export const facebookLoginEpic = (action$) => {
    return action$.ofType("FACEBOOK_LOGIN")
        .mergeMap((action) => {
            return (
                Observable.fromPromise(
                    Facebook.logInWithReadPermissionsAsync("727259887478727", {
                        permissions: ["public_profile", "email"],
                        /* behaviour: "native"*/
                    }))
                    .catch(error => {
                        console.log(11111)
                        console.log(error)
                        return Observable.empty()
                    })
                    .mergeMap(({ expires, token, type }: any) => {
                        if (type === "success") {
                            return Observable.ajax({
                                method: "GET",
                                crossDomain: true,
                                url: `https://graph.facebook.com` +
                                    `/v2.11/me?fields=id,name,email&access_token=${token}`,
                                responseType: "json"
                            })
                                .catch(error => {
                                    console.log(22222)
                                    console.log(error)
                                    return Observable.empty()
                                })
                                .mergeMap((another: any) => {
                                    return Observable.ajax({
                                        method: "POST",
                                        crossDomain: true,
                                        body: Serialize({ email: another.response.email }),
                                        headers: { ONNI_MAGIC: "kerpenmuitogostoso" },
                                        url: apiURL() + "user/leitor/oauth2",
                                        responseType: "json"
                                    })
                                })
                                .catch(error => {
                                    console.log(33333)
                                    console.log(error)
                                    Alert.alert(JSON.stringify(error));
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
                        return [Observable.of({ error: "not facebbok successs" })
                            .catch(error => {
                                console.log(4444)
                                console.log(error)
                                return Observable.of({ type: "MERDA" })
                            })
                        ]
                    }))
        })
}
