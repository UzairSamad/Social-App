import React, { Component } from 'react'
import { View, Text } from 'react-native'





class Header extends Component {
    render() {
        return (
            
                <View style={{ backgroundColor: 'blue', padding: 20, alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 25 }}>Header</Text>
                </View>
            
        )
    }
}
export default Header