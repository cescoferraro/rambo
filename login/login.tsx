import * as React from "react"
import { Toolbar, Card } from "react-native-material-ui"
import { reduxForm, Field } from "redux-form"
import { NavigationActions } from "react-navigation"
import { compose } from "recompose"
import { connect } from "react-redux"
import { Text, View, Button, Dimensions } from "react-native"
import { Constants } from "expo"
import TextField from "../shared/text"
import { validate } from "./validate"

export const Login = compose(
    reduxForm({
        form: "signIn",
        initialValues: { email: "francescoaferraro+2@gmail.com", password: "075592" },
        validate
    })
)(class LoginClass extends React.Component<{ handleSubmit: any, dispatch: any }> {
    public static navigationOptions = { title: "ONNi Leitor RAMBO VERSION" }
    public render() {
        const { width, height } = Dimensions.get("window")
        return (
            <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
                <Card>
                    <View style={{ padding: 10, height: 200, width: 0.8 * width }}>
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
                    </View>
                </Card>
            </View>
        )
    }
})
