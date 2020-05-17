import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import {styles  } from '../styles/styles'
import { useNavigation,useRoute} from '@react-navigation/native'

 const Detail = () => {

    const navigation = useNavigation() //YOU CAN SIMPLE NAVIGATE BY CALLING IT AND .NAVIGATE
    const route  = useRoute() //RECEVING PROPS IN IT THROUGH MAIN APP COMPONENT NAVIGATIONS FUNC
        return (
            <View style={styles.center}>
                <Text style={styles.text} >{route.name}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Bottom Tab')}} >
                    <Text  style={{color:'white'}} >View Bottom Tab </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Top Tab')}} >
                    <Text  style={{color:'white'}} >View Top Tab</Text>
                </TouchableOpacity>
            </View>
        )
    
}
export default Detail
