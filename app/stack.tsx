import { StackNavigator } from "react-navigation"
import { Camera } from "../barcode/index"
import { Dash } from "../dashboard/dashboard"
import { Login } from "../login/login"

export const AppNavigator = StackNavigator({
    Login: { screen: Login },
    Camera: { screen: Camera },
    Dash: { screen: Dash }
})
