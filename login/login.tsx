import * as React from "react"
import { Observable } from "rxjs"
import { Toolbar, Card } from "react-native-material-ui"
declare var Expo: any
import { reduxForm, Field } from "redux-form"
import { NavigationActions } from "react-navigation"
import { compose } from "recompose"
import { connect } from "react-redux"
import { Text, View, Button, Dimensions } from "react-native"
import { Constants } from "expo"
import TextField from "../shared/text"
import { validate } from "./validate"
import { apiURL, Serialize } from "../shared/etc";

export const Login = compose(
    reduxForm({
        form: "signIn",
        initialValues: { email: "francescoaferraro+2@gmail.com", password: "075592" },
        validate
    })
)(class LoginClass extends React.Component<{ handleSubmit: any, dispatch: any }> {
    public static navigationOptions = {
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
    public render() {
        const { width, height } = Dimensions.get("window")
        return (

            <View
                style={{
                    padding: 0,
                    width,
                    margin: 0,
                    backgroundColor: "#606266",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center"
                }}>
                <View style={{
                    width: 0.95 * width,
                    backgroundColor: "#606266"
                }}>
                    <Card style={{
                        backgroundColor: "#606266"
                    }}>
                        <View style={{ padding: 10 }}>
                            <Text>Email</Text>
                            <Field name={"email"}
                                type="email"
                                component={TextField}
                            />
                            <Text>Password</Text>
                            <Field
                                type="password"
                                name={"password"}
                                component={TextField}
                            />
                            <Button
                                onPress={this.props.handleSubmit((payload) => {
                                    console.log()
                                    this.props.dispatch({ type: "LEITOR_LOGIN", payload })
                                })}
                                title="SIGN IN"
                            />
                            <Button
                                onPress={() => {
                                    this.props.dispatch({ type: "FACEBOOK_LOGIN" })
                                }}
                                title="SIGN IN FACEBOOK"
                            />
                        </View>
                    </Card>
                </View>
            </View>
        )
    }
})

