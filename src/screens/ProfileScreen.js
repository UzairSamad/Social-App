
import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar ,Image} from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop:64,alignItems:'center'}}>
                    <View style={styles.avatarContainer}>
                       <Image style={styles.avatar} source={require('../images/me.jpg')} />                  
                    </View>
                    <Text style={styles.username}>Muhammad Uzair</Text>
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
       
    },
    avatarContainer:{
        shadowColor:'#151734',
        shadowRadius:30,
        shadowOpacity:0.4
    },
    avatar:{
        width:136,
        height:136,
        borderRadius:68
    },
    username:{
        marginTop:24,
        fontSize:16,
        fontWeight:"600"
    }
})
