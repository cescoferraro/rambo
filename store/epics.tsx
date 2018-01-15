import { combineEpics } from "redux-observable"
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/dom/ajax"
import 'rxjs/Rx';
import { Constants } from 'expo'
const ip = Constants.manifest.debuggerHost.split(':')[0]

const pingEpic = action$ => {
    return action$.ofType('PING').mapTo({ type: 'DASHBOARD' })
};

export const Serialize = (object) => {
    return require("serialize-javascript")(object)
}
export const apiURL = () => (__DEV__ ? "http://" + ip + ":7000/" : "https://api.onni.live/")

const loginEpic = action$ => {
    return action$.ofType('LEITOR_LOGIN')
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
                .catch((err: Response) => { return Observable.empty() })
                .mapTo({ type: 'DASHBOARD' })
        }
        )

};
export const rootEpic = combineEpics(pingEpic, loginEpic);
