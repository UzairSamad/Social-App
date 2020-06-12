import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import * as firebase from 'firebase'
import posts from './postdata'
import Ionicons from 'react-native-vector-icons/Ionicons'



export default class HomeScreen extends Component {
    state = {
        email: 'me',
        displayName: ''
    }


    // componentDidMount() {
    //     const { email, displayName } = firebase.auth().currentUser
    //     this.setState({ email, displayName })
    // }
    signOut = () => {
        firebase.auth().signOut()
        // this.props.navigation.navigate('Login')
        console.log("clicked")
    }

    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{post.timestamp}</Text>
                        </View>
                        <Ionicons name='ios-more' size={24} color='#73788B' />
                    </View>
                    {post.text && <Text style={styles.post}> {post.text}</Text>}
                    {post.image && <Image source={post.image} style={styles.postImage} resizeMode="cover" />}

                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name='ios-heart-empty' size={24} color='#73788B' style={{ marginRight: 16 }} />
                        <Ionicons name='ios-chatboxes' size={24} color='#73788B' />

                    </View>
                </View>
            </View>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                <Text style={{color:'white', fontSize:15,  fontWeight:'3px'}}>Posts</Text>
                </View>
               
                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
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


