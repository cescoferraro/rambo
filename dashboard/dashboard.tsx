import * as React from "react"
import { NavigationActions } from "react-navigation"
import { compose } from "recompose"
import { connect } from "react-redux"
import { Text, View, Button, Dimensions } from "react-native"
import { Constants } from "expo"
import { Cart } from "../cart/cart"
import { blankClub } from "../shared/blank"
import { Dropdown } from "react-native-material-dropdown"

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
    public static navigationOptions = ({ navigation, screenProps }) => {
        return {
            headerRight: (
                <Button
                    title="Logout"
                    onPress={
                        () => {
                            const resetAction = NavigationActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({ routeName: "Login" })
                                ]
                            })
                            navigation.dispatch(resetAction)
                            navigation.dispatch({ type: "CLEAR_CART" })
                        }}
                />
            ),
            title: "Staff ONNi",
            headerTintColor: "#Ffffff",
            headerStyle: {
                backgroundColor: "#16171B",
                borderBottomColor: "#212121",
                borderBottomWidth: 3
            },
            headerTitleStyle: {
                fontSize: 18
            }
        }
    }
    public render() {
        const currentClub = (): IClub => {
            const current = this.props.user.clubs.filter((club) => (club.id === this.props.user.clubId))[0]
            return current ? current : blankClub
        }
        const data = this.props.user.clubs.map((club) => ({ value: club.name }))
        const { width, height } = Dimensions.get("window")
        return (
            <View
                style={{
                    position: "absolute",
                    backgroundColor: "red",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
            >
                <View
                    style={{
                        backgroundColor: "purple",
                    }}
                >
                    <Dropdown
                        /* style={{ position: "relative", bottom: 20, }}*/
                        /* dropdownPosition={this.props.user.clubs.length}*/
                        onChangeText={(value, index) => {
                            console.log(value)
                            const payload = this.props.user.clubs.filter((club) => (club.name === value))[0]
                            this.props.dispatch({ type: "SET_CLUB", payload })
                            console.log(index)
                        }}
                        label="Current Club"
                        value={currentClub().name}
                        data={data}
                    />
                </View>
                <View
                    style={{
                        position: 'relative',
                        backgroundColor: "green",
                        top: 0
                    }}
                >
                    <Text>{this.props.user.mail}</Text>
                    <View >
                        <Text>{currentClub().id}</Text>
                        <Text>{currentClub().name}</Text>
                    </View>
                </View>
                <Cart cart={this.props.cart} />
                <View
                    style={{
                        position: 'relative',
                        backgroundColor: "green",
                        top: 0
                    }}
                >
                    <Button
                        onPress={() => {
                            const resetAction = NavigationActions.navigate({ routeName: "Camera" })
                            this.props.navigation.dispatch(resetAction)
                        }}
                        title="CAMERA"
                    />
                </View>
            </View>
        )
    }
})
