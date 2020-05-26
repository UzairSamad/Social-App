import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'


export default class HomeScreen extends Component {
    state = {
        email:'me',
        displayName: ''
    }


      // componentDidMount() {
    //     const { email, displayName } = firebase.auth().currentUser
    //     this.setState({ email, displayName })
    // }
    signOut = () => {
        firebase.auth().signOut()
        // this.props.navigation.navigate('Login')
        console.log("clicked")
    }   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={{color:'white', fontSize:20,  fontWeight:'5px'}}>Home</Text>
                </View>
                <View style={styles.inner} >
                    <Text> Home  here </Text>
                    <TouchableOpacity onPress={()=>{this.signOut()}}><Text>signOut</Text></TouchableOpacity>
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


