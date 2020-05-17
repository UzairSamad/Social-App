import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from '../styles/styles'
import { useNavigation,useRoute} from '@react-navigation/native'

const Feed = () => {

   
    const navigation = useNavigation() //YOU CAN SIMPLE NAVIGATE BY CALLING IT AND .NAVIGATE
    const route  = useRoute() //RECEVING PROPS IN IT THROUGH MAIN APP COMPONENT NAVIGATIONS FUNC
    
    return (
        <View style={styles.center} >
            <Text style={styles.title} > {route.name} </Text>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Detail') }} >
                <Text style={{ color: 'white' }} >Go To Detail</Text>
            </TouchableOpacity>

        </View>
    )

}
export default Feed
