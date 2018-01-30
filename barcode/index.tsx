import * as React from "react"
import { NavigationActions } from "react-navigation"
import { connect } from "react-redux"
import { compose } from "recompose"
import { StyleSheet, Text, View, Dimensions, Button, Vibration } from "react-native"
import { BarCodeScanner, Permissions } from "expo"
import { styles } from "./styles"
import { blankVoucher } from "../shared/blank"
const ObjectID = require("bson-objectid")

class BarCodeCamera extends React.Component<ILeitorProps & any,
    { disabled: boolean, hasCameraPermission: any }
    > {
    public static navigationOptions = { header: null }
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            disabled: false
        }
        this._handleBarCodeRead = this._handleBarCodeRead.bind(this)
    }
    public componentWillMount() {
        Permissions.askAsync(Permissions.CAMERA)
            .catch((err) => { console.log(err) })
            .then((resolve) => {
                console.log(33)
                console.log(resolve)
                this.setState({ hasCameraPermission: resolve.status === "granted" })
            })
    }
    public render() {
        console.log(this.props.camera)
        const { hasCameraPermission } = this.state
        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            zIndex: 100,
                            display: "flex",
                            position: "absolute",
                            left: 10,
                            top: 20
                        }}>
                        <Button
                            color="#841584"
                            onPress={() => {
                                this.props.dispatch({ type: "TOGGLE_CAMERA_SIDE" })
                            }}
                            title={this.props.camera.side ? "FRONT" : "BACK"} />
                    </View>
                    <View
                        style={{
                            zIndex: 100,
                            display: "flex",
                            position: "absolute",
                            right: 10,
                            top: 20
                        }}>
                        <Button
                            color="#841584"
                            onPress={() => {
                                this.props.dispatch({ type: "TOGGLE_CAMERA_FLASH" })
                            }}
                            title={this.props.camera.flash ? "OFF" : "ON"} />
                    </View>
                    <View
                        style={{
                            zIndex: 100,
                            display: "flex",
                            position: "absolute",
                            left: 10,
                            bottom: 20
                        }}>
                        <Button
                            color="#841584"
                            onPress={() => {
                                this.props.dispatch({ type: "CAMERA_TOGGLE_MULTIPLE" })
                            }}
                            title={this.props.camera.multiple ? "MULTIPLE" : "SINGLE"} />
                    </View>
                    <View
                        style={{
                            zIndex: 100,
                            display: "flex",
                            position: "absolute",
                            right: 10,
                            bottom: 20
                        }}>
                        <Button
                            color="#841584"
                            onPress={() => {
                                const resetAction = NavigationActions.back()
                                this.props.navigation.dispatch(resetAction)
                            }}
                            title={this.props.camera.multiple ? this.props.cart.vouchers.length + " Finish" : "FINISH"}
                        />
                    </View>
                    <BarCodeScanner
                        torchMode={this.props.camera.flash}
                        type={this.props.camera.side}
                        onBarCodeRead={this._handleBarCodeRead}
                        style={StyleSheet.absoluteFill}
                    />
                </View>
            )
        }
    }

    public _handleBarCodeRead({ type, data }) {
        console.log("this.is valid object id? " + ObjectID.isValid(data) ? "yes" : "no")
        if (!this.state.disabled) {
            if (ObjectID.isValid(data)) {
                alert(`Bar with type ${type} and data ${data} has been scanned!`)
                this.setState({ disabled: true })
                const timeout = setTimeout(() => { this.setState({ disabled: false }) }, 3000)
                if (!this.props.cart.vouchers.map((voucher) => (voucher.id)).includes(data)) {
                    Vibration.vibrate([0, 200], false)
                    this.props.dispatch({
                        type: "ADD_VOUCHER",
                        payload: { ...blankVoucher(data), state: "inserted" }
                    })
                    this.props.dispatch({ type: "READ_VOUCHER", payload: data })
                    this.props.dispatch({ type: "USE_VOUCHER", payload: data })
                    if (!this.props.camera.multiple) {
                        clearTimeout(timeout)
                        this.props.dispatch({ type: "Navigation/BACK" })
                    }
                } else {
                    alert(`voucher already scanned`)
                }
            } else {
                alert(`this is defenetly not a onni qr code`)
                this.setState({ disabled: true })
                setTimeout(() => { this.setState({ disabled: false }) }, 2000)
            }
        }
    }
}

export const Camera = compose(
    connect(
        (store) => ({ camera: store.camera, cart: store.cart })
    )
)(BarCodeCamera)
