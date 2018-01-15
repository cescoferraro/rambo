import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})


export const OnniApp = ({ }) => {
    return (
        <View style={styles.container}>
            <Text>RAMBO</Text>
            <Text>TYPESCRIPT</Text>
            <Text>Material</Text>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    )
}
