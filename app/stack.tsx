import { StackNavigator } from "react-navigation"
import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

export const AppNavigator = StackNavigator({
    Login: { screen: () => { return <View><Text>Education</Text></View> } }
})
