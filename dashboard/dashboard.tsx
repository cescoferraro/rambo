import * as React from "react"
import { NavigationActions } from "react-navigation"
import { compose } from "recompose"
import { connect } from "react-redux"
import { Text, View, Button } from "react-native"
import { Constants } from "expo"

export const Dash = compose(
    connect((store) => ({
        cart: store.cart,
        user: store.user,
        app: store.app,
        camera: store.camera,
        reduxform: store.form,
        nav: store.NavigationReducer
    }))
)(class DashClass extends React.Component<ILeitorProps & { dispatch: any, navigation: any }> {
    public static navigationOptions = { title: "ONNi Leitor RAMBO VERSION" }
    public render() {
        return <View>
            <Text>{this.props.user.token}</Text>
            {this.props.cart.vouchers
                .map((voucher: IVoucherRequest) =>
                    (<Text key={Math.random()}> {voucher.id} </Text>))}
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
                    this.props.navigation.dispatch(resetAction)
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
                    this.props.navigation.dispatch(resetAction)
                    this.props.dispatch({ type: "CLEAR_CART" })
                }}
                title="LOGOUT"
            />
        </View>
    }
})
