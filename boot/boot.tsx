import * as React from "react"
import { Provider } from "react-redux"
import { StyleSheet, Text, View } from "react-native"
import { Font } from "expo"
import { OnniApp } from "../app/app"
import { uiTheme } from "../shared/theme"
import { ThemeProvider } from "react-native-material-ui"
import { configureStore } from "../store"

const store = configureStore({ app: { title: "ONNi TRU" } })

interface IBootProps {
    app: string
}
export class Boot extends React.Component<IBootProps, { isReady: boolean }> {

    constructor(props) {
        super(props)
        this.state = { isReady: false }
    }

    public componentWillMount() {
        this.loadFonts()
    }
    public loadFonts() {
        Font.loadAsync({
            Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
            Roboto_medium: require("../assets/fonts/Roboto-Medium.ttf")
        }).then((result) => {
            this.setState({ isReady: true })
        })
    }

    public render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />
        }
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Provider store={store}>
                    <OnniApp />
                </Provider>
            </ThemeProvider>
        )
    }

}
