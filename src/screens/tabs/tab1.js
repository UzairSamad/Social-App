import React  from 'react'
import { Text, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'



const  Tab1 = () => {
    const isFocused = useIsFocused()
    console.log(isFocused)
    return (
        <View>
            <Text>tab1 here </Text>
        </View>
    )
}
export default Tab1 
