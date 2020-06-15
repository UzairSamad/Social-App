
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import notifications from './notificationdata'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class NotificationScreen extends Component {

    renderNotifications = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            {/* <Text style={styles.timestamp}>{}</Text> */}
                        </View>
                        <Text style={styles.timestamp}>{post.timestamp}</Text>
                    </View>
                    <View>

                        <View style={{ flex: 1  }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            {post.text && <Text style={styles.post} style={{ marginTop: 5 }}> {post.text}</Text>}

{post.image && <Image source={post.image} style={styles.notificationImage} resizeMode="cover" />}
                            </View>

                           
                        </View>

                    </View>

                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '3px' }}>Posts</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={notifications}
                    renderItem={({ item }) => this.renderNotifications(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
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
    feed: {
        marginHorizontal: 16

    },
    feedItem: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 18,
        marginRight: 14
    },
    notificationImage:{

        width: 38,
        height: 38,
        borderRadius: 12,
        marginRight: 14,
        marginTop:5
    },
    timestamp: {
        fontSize: 11,
        color: '#C4C6CE',
        marginTop: 4
    },
    name: {
        fontSize: 15,
        color: '#454d65',
        fontWeight: "500"

    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: '#838899'

    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
})
