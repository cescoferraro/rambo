import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { compose } from "recompose"
import { connect } from "react-redux"

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
        location: store.location,
        app: store.app,
        camera: store.camera,
        cart: store.cart,
        reduxform: store.form
    }))
)((props: ILeitorProps) => {
    return (
        <View style={styles.container}>
            <Text>RAMBO</Text>
            <Text>TYPESCRIPT</Text>
            <Text>Material</Text>
            <Text>REDUX</Text>
            <Text>{props.app.title}</Text>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    )
})
