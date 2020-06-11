import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Fire from '../Fire'

export default class PostScreen extends Component {
    state = {
        filePath: null,
        fileData: null,
        fileUri: '',
        text:''
    }

    handlePost =()=>{
        Fire.shared.addPost({text:this.state.text.trim(),localUri:this.state.image})
        .then(ref =>{
            this.setState({text:"",image:null})
            this.props.naigation.goBack()
        }).catch(err=>{
            alert(err)
        })

    }

    pickImage = () => {
        let options = {
            title: 'Select Image',

            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // const source = { uri: response.uri };
                // You can also display the image using data:
                const source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log(source)


                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: source.uri
                });
            }
        });
    }
    renderFileUri() {
        if (this.state.fileUri) {
            return <Image
                source={this.state.fileUri }
            />
        } else {
            return <Image
                source={require('../images/bg.jpg')}
                style={styles.images}
            />
        }
    }

    renderFileData() {
        if (this.state.fileData) {
            return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
            />
        } else {
            return <Image
                source={require('../images/bg.jpg')}
                style={styles.images}
            />
        }
    }




    render() {
        console.log(this.state)
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <MaterialIcon style={[{ color: 'lightgrey' }]} size={25} name='arrow-back' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePost}>
                        <Text style={{ fontSize: 20, fontWeight: '5px' }}> Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inner}>
                    <Image source={require('../images/bg.jpg')} style={styles.avatar} />
                    <TextInput autoFocus={true} multiline={true} numberOfLines={4} style={{ flexl: 1, marginTop: -20 }} 
                    placeholder='Want to share something...' onChange={(e)=>{this.setState({text:e.target.value})}}>
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.camera} onPress={() => { this.pickImage() }}>
                    <MaterialIcon style={[{ color: 'lightgrey' }]} size={35} name='camera-alt' />

                </TouchableOpacity>
                <View>
                    {/* {this.renderFileUri()} */}
                    {
                        this.renderFileData
                    }
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
    },
    camera: {
        alignItems: "flex-end",
        marginHorizontal: 20
    }
})
