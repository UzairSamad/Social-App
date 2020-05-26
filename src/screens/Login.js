import React, { Component } from 'react'
import {
    Text,
    View, StyleSheet,
    TouchableOpacity,
    TextInput, ActivityIndicator,
    Image, StatusBar, LayoutAnimation, ImageBackground
} from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends Component {

    state = {
        errorMessage: null,
        email: "",
        password: "",
        isLoading: null
    }
    handleLogin = () => {
        this.setState({ isLoading: true })
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email.trim(), password).then(
            this.props.navigation.navigate('App'))
            .catch(error => this.setState({ errorMessage: error.message, isLoading: false }))


    }
    render() {
        return (
            <View style={styles.container}>

                {/* <Image source={require("../images/bg.jpg")}
               style={{marginTop:-156,marginLeft:-50}}></Image> */}
                <Text style={styles.greetings}>{"Hello again \n Welcomeback,"} </Text>
                <View style={styles.erorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                        > </TextInput>
                    </View>

                </View>
                {
                    this.state.isLoading === true ? <ActivityIndicator size="small" /> : <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{ color: '#FFF', fontWeight: "500" }}>Sign in</Text>
                    </TouchableOpacity>
                }


                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => { this.props.navigation.navigate('Register') }}>
                    <Text style={{ color: '#414959', fontWeight: "13" }}>
                        New to Social App <Text style={{ color: '#E9446A', fontWeight: "500" }}>Sign Up</Text> </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    greetings: {
        marginTop: 32,
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center"
    },
    erorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30

    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        fontSize: 10,
        color: "#8A8F9E",
        textTransform: "uppercase"

    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"

    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})
