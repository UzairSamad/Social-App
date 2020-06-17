
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import Data from './GroupMessageData'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CheckIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Badge } from 'react-native-paper'


export default class NotificationScreen extends Component {

    renderNotifications = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                        </View>
                        {post.badge && <Badge style={{ backgroundColor: '#1390dd', marginVertical: 5, marginHorizontal: 4 }}>{post.badge}</Badge>}
                    </View>
                    <View>

                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styles.post} >{`${post.lastMessageSender} : ${post.lastMessage}`}</Text>
                                <View></View>
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
                <FlatList
                    style={styles.feed}
                    data={Data}
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
        marginHorizontal: 1

    },
    feedItem: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 6,
        flexDirection: 'row',
        marginVertical: 1
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 18,
        marginRight: 14
    },
    notificationImage: {

        width: 38,
        height: 38,
        borderRadius: 12,
        marginRight: 14,
        marginTop: 5
    },
    timestamp: {
        fontSize: 11,
        color: '#C4C6CE',
        marginTop: 4
    },
    name: {
        fontSize: 15,
        color: '#000000',
        fontWeight: "500",


    },
    post: {
        marginTop: 4,
        fontSize: 14,
        color: '#454d65',
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
})
