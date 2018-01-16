import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { compose } from "recompose"
import { connect } from "react-redux"
import { addNavigationHelpers } from 'react-navigation'
import { AppNavigator } from "./stack"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

export const OnniApp = compose(
    connect((store) => ({
        app: store.app,
        nav: store.NavigationReducer
    }))
)((props: ILeitorProps & any) => {

    return (
        <AppNavigator navigation={addNavigationHelpers({
            dispatch: props.dispatch,
            state: props.nav
        })} />
    )
})
