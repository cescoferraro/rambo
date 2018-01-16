import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

export const styles = StyleSheet.create({
    switch: {
        position: 'absolute'
    },
    button: { backgroundColor: "red" },
    camera: {
        flex: 1,
        alignSelf: "stretch",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    }
})
