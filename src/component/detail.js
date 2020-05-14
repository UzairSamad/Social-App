import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import {styles  } from '../styles/styles'

export default class Detail extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.text} > Detail Componnet </Text>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Bottom Tab')}} >
                    <Text  style={{color:'white'}} >View Bottom Tab </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Top Tab')}} >
                    <Text  style={{color:'white'}} >View Top Tab</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
