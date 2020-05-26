
import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'

export default class NotificationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    
                    <Text style={{color:'white', fontSize:20,  fontWeight:'5px'}}>Notifications</Text>
                </View>
                <View style={styles.inner} >

                    <Text> NotificationScreen 3 here </Text>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    header: {
     borderBottomColor:'black',
     borderBottomWidth:0.2,
     shadowOpacity:20,
     shadowColor:'grey',
     padding:15,
     backgroundColor:'#E9446A',
     alignItems:'center',

     },
    inner:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       
    }
})
