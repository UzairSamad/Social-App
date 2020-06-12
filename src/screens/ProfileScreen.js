
import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Button } from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 64, alignItems: 'center' }}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={require('../images/me.jpg')} />
                    </View>
                    <Text style={styles.username}>Muhammad Uzair</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 32 }}>
                    <View style={styles.stats}>
                        <Text style={styles.statsAmount}>21</Text>
                        <Text style={styles.statsTitle}>Post</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={styles.statsAmount}>754</Text>
                        <Text style={styles.statsTitle}>Followers</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={styles.statsAmount}>156</Text>
                        <Text style={styles.statsTitle}>Following</Text>
                    </View>
                </View>
                <View style={{ width: '50%' ,marginLeft:90 ,marginTop:32}}>
                    <Button title='Log out'  />

                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        shadowOpacity: 20,
        shadowColor: 'grey',
        padding: 15,
        backgroundColor: '#E9446A',
        alignItems: 'center',

    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatarContainer: {
        shadowColor: '#151734',
        shadowRadius: 30,
        shadowOpacity: 0.4
    },
    avatar: {
        width: 136,
        height: 136,
        borderRadius: 68
    },
    username: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: "600"
    },
    stats: {
        alignItems: 'center',
        flex: 1
    },
    statsAmount: {
        color: '#4F566D',
        fontSize: 18,
        fontWeight: "300"
    },
    statsTitle: {
        color: '#C3C5CD',
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4
    }
})
