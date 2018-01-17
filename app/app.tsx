import * as React from "react"
import { BackHandler } from "react-native"
import { compose } from "recompose"
import { addNavigationHelpers, NavigationActions } from "react-navigation"
import { connect } from "react-redux"
import { AppNavigator } from "./stack"

export const OnniApp = compose(
    connect((store) => ({
        app: store.app,
        camera: store.app,
        cart: store.app,
        reduxform: store.form,
        nav: store.NavigationReducer
    }))
)(
    class OnniClass extends React.Component<ILeitorProps & any> {
        constructor(props) {
            super(props)
            this.onBackPress = this.onBackPress.bind(this)
        }
        public componentDidMount() {
            BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
        }
        public componentWillUnmount() {
            BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
        }
        public onBackPress() {
            const { dispatch, nav } = this.props
            if (nav.index === 0) {
                return false
            }
            this.props.dispatch(NavigationActions.back())
            return true
        }
        public render() {
            return (
                <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })} />
            )
        }
    })
