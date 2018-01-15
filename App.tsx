import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Boot } from "./boot/boot"

export default class App extends React.Component<any, any> {
    public render() {
        return (<Boot app="onni" />)
    }
}
