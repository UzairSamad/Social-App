import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity} from 'react-native'

export default class LoginScreen extends Component {
    
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Login </Text>
                <TouchableOpacity>
                    <Text onPress={() => { this.props.navigation.navigate('Auth') }}>Create an account?</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{ 
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

