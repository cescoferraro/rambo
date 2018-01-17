import * as React from "react"
import { NavigationActions } from "react-navigation"
import { compose } from "recompose"
import { connect } from "react-redux"
import { Text, View, Button } from "react-native"
import { Constants } from "expo"

export const Dash = compose(
    connect((store) => ({
        cart: store.cart,
        user: store.user
    }))
)((props) => {
    return <View>
        <Text>Cesco TRUE lAst shot</Text>
        <Text>{props.user.token}</Text>
        {props.cart.vouchers.map((voucher) => (<Text key={Math.random()}> {voucher.id} </Text>))}
        <Button
            title="TEST"
            onPress={() => {
                const ip = Constants.linkingUri.split(":")[1]
                console.log(ip)
            }}
        />
        <Button
            onPress={() => {
                const resetAction = NavigationActions.navigate({ routeName: "Camera" })
                props.navigation.dispatch(resetAction)
            }}
            title="CAMERA"
        />
        <Button
            onPress={() => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: "Login" })
                    ]
                })
                props.navigation.dispatch(resetAction)
                props.dispatch({ type: "CLEAR_CART" })
            }}
            title="LOGOUT"
        />
    </View>
})
