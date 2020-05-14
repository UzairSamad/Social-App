import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'

import {styles} from '../styles/styles'

export default class Feed extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.center} >
                <Text style={styles.title} > Feed Component </Text>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Detail')}} >
                    <Text  style={{color:'white'}} >Go To Detail</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
