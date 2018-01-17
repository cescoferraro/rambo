import { createEpicMiddleware, combineEpics } from "redux-observable"
import { loginEpic } from "./epics/login"
import { readVoucherEpic } from "./epics/readVoucher";

export const rootEpic = combineEpics(loginEpic, readVoucherEpic)
export const epicMiddleware = createEpicMiddleware(rootEpic)
