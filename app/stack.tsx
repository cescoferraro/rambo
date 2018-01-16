import { StackNavigator } from "react-navigation"
import TextField from "./text"
import * as React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { reduxForm, Field } from "redux-form"
import { Toolbar, Card } from "react-native-material-ui"
import { compose } from "recompose"
import { connect } from "react-redux"
import { NavigationActions } from 'react-navigation'
import { Constants } from 'expo'
import { Camera } from "../barcode/index";

const Dash = compose(
    connect((store) => ({ cart: store.cart }))
)((props) => {
    return <View>
        <Text>Cesco TRUE lAst shot</Text>
        {props.cart.vouchers.map((voucher) => (<Text key={Math.random()}> {voucher.id} </Text>))}
        <Button
            title="TEST"
            onPress={() => {
                props.dispatch({ type: 'HOME' })

                const ip = Constants.linkingUri.split(':')[1]
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

const Login = compose(
    reduxForm({
        form: "signIn",
        initialValues: { email: "francescoaferraro+2@gmail.com", password: "075592" },
        validate: (values) => {
            const errors: any = {}
            if (!values.email) {
                errors.email = "Required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address"
            }
            if (!values.password) {
                errors.password = "Required"
            } else if (values.password.length < 5) {
                errors.password = "Must be 5 characters or less"
            }
            return errors
        }
    })

)((props) => {
    return <View>
        <Card>
            <View style={{ padding: 10, height: 350 }}>

                <Button title="PING" onPress={() => {
                    const ip = Constants.experienceUrl
                    console.log(ip)
                }} />
                <Text>Email</Text>
                <Field name={'email'}
                    type="email"
                    component={TextField}
                />
                <Text> {"\n"} </Text>
                <Text>Password</Text>
                <Field
                    type="password"
                    name={'password'}
                    component={TextField}
                />
                <Text> {"\n"} </Text>
                <Button
                    onPress={props.handleSubmit((payload) => {
                        console.log()
                        props.dispatch({ type: "LEITOR_LOGIN", payload })
                    })}
                    title="LOGIN" />
            </View>
        </Card>
    </View>
}
    )
export const AppNavigator = StackNavigator({
    Login: { screen: Login },
    Camera: { screen: Camera },
    Dash: { screen: Dash }
})
