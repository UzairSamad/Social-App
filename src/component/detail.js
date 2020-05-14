import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {styles  } from '../styles/styles'

export default class Detail extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.text} > Detail Componnet </Text>
            </View>
        )
    }
}
