import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {styles  } from '../../styles/styles'

export default class Screen2 extends Component {
    render() {
        return (
            <View  style={styles.center}>
            <Text style={styles.text}> Favourite </Text>
        </View>
        )
    }
}
