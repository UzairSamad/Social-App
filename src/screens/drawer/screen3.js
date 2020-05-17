import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../../styles/styles'

const Screen3 = () => {
    const [screenMode, setScreenMode] = React.useState(true)
    
    console.log(screenMode)
    return (
        <View style={styles.center}>
            <Text style={styles.text}> Setting </Text>
            <Button title='Switch To Dark mode' onPress={(screenMode) => { setScreenMode(!screenMode)}} />
        </View>
    )
}

export default Screen3
