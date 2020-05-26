import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


export default class PostScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <MaterialIcon style={[{ color: 'lightgrey' }]} size={25} name='arrow-back' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: '5px' }}> Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inner}>
                    <Image source={require('../images/bg.jpg')} style={styles.avatar} />
                    <TextInput autoFocus={true} multiline={true} numberOfLines={4} style={{ flexl: 1, marginTop: -20 }} placeholder='Want to share something...'>
                    </TextInput>
                </View>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#D8D9DB"


    },
    inner: {
        margin: 18,
        flexDirection: 'row'

    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 24,
        marginRight: 12,
    }
})
