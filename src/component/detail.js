import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'
import { useNavigation, useRoute, useFocusEffect,useNavigationState } from '@react-navigation/native'

const Detail = () => {

    const navigation = useNavigation() //YOU CAN SIMPLE NAVIGATE BY CALLING IT AND .NAVIGATE
    const route = useRoute() //RECEVING PROPS IN IT THROUGH MAIN APP COMPONENT NAVIGATIONS FUNC
    const state = useNavigationState(state => state)  //it availables us with the stateof routse 

    useFocusEffect(                         //it will call the function every time you go toscreen
        React.useCallback(() => {
            fetch("https://restcountries.eu/rest/v2/capital/tallinn")
                .then(res => {
                    res.json().
                        then(data => console.log(data))
                })
        })
    )


return (
    <View style={styles.center}>
        <Text style={styles.text} >{route.name}</Text>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Bottom Tab') }} >
            <Text style={{ color: 'white' }} >View Bottom Tab </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Top Tab') }} >
            <Text style={{ color: 'white' }} >View Top Tab</Text>
        </TouchableOpacity>
    </View>
)

}
export default Detail
