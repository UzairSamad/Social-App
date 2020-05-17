import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

export default class LoginScreen extends Component {
    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greetings}>{"Hello again \n Welcomeback,"} </Text>
                <View style={styles.erorMessage}>
                    <Text>Error</Text>
                </View>
           
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{ 
        flex:1,
       
    },
    greetings:{
        marginTop:32,
        fontSize:20,
        fontWeight:"400",
        textAlign:"center" 
    },
    erorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30

    }
})
