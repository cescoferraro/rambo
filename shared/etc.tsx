import { Constants } from 'expo'
const ip = Constants.linkingUri.split(':')[1]
export const apiURL = () => (__DEV__ ? "http:" + ip + ":7000/" : "https://api.onni.live/")
export const Serialize = (object) => {
    return require("serialize-javascript")(object)
}
