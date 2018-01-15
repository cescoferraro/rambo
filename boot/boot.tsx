import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Font } from "expo"
import { OnniApp } from "../app/app"
declare const Expo: any
import { uiTheme } from "../shared/theme"
import { ThemeProvider } from "react-native-material-ui"

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
                <OnniApp />
            </ThemeProvider>
        )
    }

}
