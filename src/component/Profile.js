import React, { Component } from 'react'
import { View, Text,Button } from 'react-native'

class Profile extends Component {

    render() {
        return (
            <View>
                <Text style={{ fontSize: 25, margin: 5 }}> Profile Screen </Text>
                <Button> Press Me</Button>
            </View>
        )
    }
}

export default Profile