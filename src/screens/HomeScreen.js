import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity ,FlatList,Image} from 'react-native'
import * as firebase from 'firebase'
import posts from './postdata'


export default class HomeScreen extends Component {
    state = {
        email:'me',
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

    renderPost= post =>{
        return(
            <View style={styles.feedItem}> 
                <Image source={post.avatar} style={styles.avatar}/>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <Text>{post.name}</Text>
                            <Text>{post.timestamp}</Text>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
   
    render() {
        
        return (
            <View style={styles.container}>
                {/* <View style={styles.header}>
                <Text style={{color:'white', fontSize:20,  fontWeight:'5px'}}>Home</Text>
                </View>
                <View style={styles.inner} >
                    <Text> Home  here </Text>
                    <TouchableOpacity onPress={()=>{this.signOut()}}><Text>signOut</Text></TouchableOpacity>
                </View> */}
                <FlatList
                 style={styles.feed}
                  data={posts} 
                   renderItem={({item})=>this.renderPost(item)}
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
     borderBottomColor:'black',
     borderBottomWidth:0.2,
     shadowOpacity:20,
     shadowColor:'grey',
     padding:15,
     backgroundColor:'#E9446A',
     alignItems:'center',

     },
    inner:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    feed:{
        marginHorizontal:16

    },
    feedItem:{
        backgroundColor:'#FFF',
        borderRadius:5,
        padding:8,
        flexDirection:'row',
        marginVertical:8
    },
    avatar:{
        width:36,
        height:36,
        borderRadius:18,
        marginRight:16
    }
})


