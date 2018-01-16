import * as React from "react"
import { NavigationActions } from 'react-navigation'
import { connect } from "react-redux"
import { compose } from "recompose"
import { StyleSheet, Text, View, Dimensions, Button } from "react-native"
import { BarCodeScanner, Permissions } from "expo"
import { styles } from "./styles"

class BarCodeCamera extends React.Component<ILeitorProps & any,
    { disabled: boolean, hasCameraPermission: any }
    > {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            disabled: false
        }
        this._handleBarCodeRead = this._handleBarCodeRead.bind(this)
    }
    static navigationOptions = { header: null }
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
                        onBarCodeRead={this._handleBarCodeRead}
                        style={StyleSheet.absoluteFill}
                    />
                </View>
            )
        }
    }

    public _handleBarCodeRead({ type, data }) {
        if (!this.state.disabled) {
            if (this.props.camera.multiple) {
                this.props.dispatch({ type: "ADD_VOUCHER", payload: { id: data } })
                this.setState({ disabled: true })
                setTimeout(() => { this.setState({ disabled: false }) }, 2000)
            } else {
                this.setState({ disabled: true })
                this.props.dispatch({ type: "Navigation/BACK" })
                alert(`Bar with type ${type} and data ${data} has been scanned!`);
                this.props.dispatch({ type: "ADD_VOUCHER", payload: { id: data } })
            }
        }
    }
}

export const Camera = compose(
    connect(
        (store) => ({ camera: store.camera, cart: store.cart })
    )
)(BarCodeCamera)
