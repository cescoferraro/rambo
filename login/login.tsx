import * as React from "react"
import { Toolbar, Card } from "react-native-material-ui"
import { reduxForm, Field } from "redux-form"
import { NavigationActions } from "react-navigation"
import { compose } from "recompose"
import { connect } from "react-redux"
import { Text, View, Button } from "react-native"
import { Constants } from "expo"
import TextField from "../shared/text"
import { validate } from "./validate"

export const Login = compose(
    reduxForm({
        form: "signIn",
        initialValues: { email: "francescoaferraro+2@gmail.com", password: "075592" },
        validate
    })
)((props) => {
    return (
        <View>
            <Card>
                <View style={{ padding: 10, height: 350 }}>

                    <Button title="PING" onPress={() => {
                        const ip = Constants.experienceUrl
                        console.log(ip)
                    }} />
                    <Text>Email</Text>
                    <Field name={"email"}
                        type="email"
                        component={TextField}
                    />
                    <Text> {"\n"} </Text>
                    <Text>Password</Text>
                    <Field
                        type="password"
                        name={"password"}
                        component={TextField}
                    />
                    <Text> {"\n"} </Text>
                    <Button
                        onPress={props.handleSubmit((payload) => {
                            console.log()
                            props.dispatch({ type: "LEITOR_LOGIN", payload })
                        })}
                        title="SIGN IN"
                    />
                </View>
            </Card>
        </View>
    )
})
