import { createEpicMiddleware, combineEpics } from "redux-observable"
import { loginEpic } from "./epics/login"
import { readVoucherEpic } from "./epics/readVoucher"
import { useVoucherEpic } from "./epics/useVoucher"
import { facebookLoginEpic } from "./epics/facebookLogin"

export const rootEpic = combineEpics(loginEpic, readVoucherEpic, useVoucherEpic, facebookLoginEpic)
export const epicMiddleware = createEpicMiddleware(rootEpic)
