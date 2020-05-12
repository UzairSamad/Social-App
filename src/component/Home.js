import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

class Home extends Component {

    render() {
        return (
            <View >
                <Text style={{ fontSize: 25, margin: 5 }}>Home Screen</Text>
                <Button title='press me' />
                <TouchableOpacity  style={{backgroundColor:'black',width:80,height:50,marginLeft:150,marginTop:30,borderRadius:3}}>
                    <Text style={{color:'white',display:'flex',padding:8}}>Press me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home