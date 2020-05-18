import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import 'react-native-gesture-handler';

//setting up firebase
import * as firebase from 'firebase'

 // Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCkPI2qcOkDZSVltrv-bfi1U2S4ntQnsNM",
  authDomain: "socialapp-690ef.firebaseapp.com",
  databaseURL: "https://socialapp-690ef.firebaseio.com",
  projectId: "socialapp-690ef",
  storageBucket: "socialapp-690ef.appspot.com",
  messagingSenderId: "13813232837",
  appId: "1:13813232837:web:c9647de8bc5ed1dfd86cac"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


import LoginScreen from './src/screens/Login'
import RegisterScreen from './src/screens/Register'
import LoadingScreen from './src/screens/LoadingScreen'
import HomeScreen from './src/screens/HomeScreen'

import Tab1 from './src/screens/tabs/tab1'
import Tab2 from './src/screens/tabs/tab2'
import Tab3 from './src/screens/tabs/tab3'

import Detail from './src/component/detail'
import Feed from './src/component/feed'



import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// apperance library for themeing app
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const MaterialBottomTab = createMaterialBottomTabNavigator()
const MaterialTopTab = createMaterialTopTabNavigator()








const App = () => {
  const colorScheme = useColorScheme()
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'purple',
      background: 'rgb(242, 242, 242)',
      card: '#E9446A',
      text: 'white',
      border: 'green',
    },
  };


  createHomeStack = () =>
    <Stack.Navigator>
      {/* you can set custom colors by declarng props  uncomment below to see custom colors */}

      {/* <Stack.Screen name="Feed" component={Feed} options={{ title: 'My Feed', headerStyle: { backgroundColor: "#0081ff" }, headerTintColor: 'white', headerTitleAlign: 'center' }} />  */}
      {/* <Stack.Screen name="Detail" component={Detail} options={{ title: 'Details', headerStyle: { backgroundColor: "#0081ff" }, headerTintColor: 'white', headerTitleAlign: 'center' }} /> */}

      {/* using default themes here*/}
      {/* <Stack.Screen name="Loading" component={LoadingScreen} options={{ title: 'Loading', headerTitleAlign: 'center' }} /> */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false}} />
      <Stack.Screen name="Register" component={RegisterScreen}  options={{ headerShown:false}}/>
      <Stack.Screen name="App" component={HomeScreen} options={{ title: 'Home', headerTitleAlign: 'center' }} />


      <Stack.Screen name="Top Tab" children={createTopTabs} />
      <Stack.Screen name="Bottom Tab" children={createBottomTabs} />
    </Stack.Navigator>

  let createTopTabs = () => {
    return <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="Tab1" component={Tab1} options={{ title: 'Chat' }} />
      <MaterialTopTab.Screen name="Tab2" component={Tab2} options={{ title: 'Status' }} />
      <MaterialTopTab.Screen name="Tab3" component={Tab3} options={{ title: 'Call' }} />
    </MaterialTopTab.Navigator>
  }

  let createBottomTabs = () => {
    return <MaterialBottomTab.Navigator>
      <MaterialBottomTab.Screen name="Tab1" component={Tab1} options={{  tabBarLabel: 'Chat',
        tabBarIcon: () => (
          <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
        )}} />
      <MaterialBottomTab.Screen name="Tab2" component={Tab2} options={{   tabBarLabel: 'Status',
        tabBarIcon: () => (
          <Icon style={[{ color: 'white' }]} size={25} name={'status'} />
        ) }} />
      <MaterialBottomTab.Screen name="Tab3" component={Tab3} options={{
        tabBarLabel: 'Call',
        tabBarIcon: () => (
          <Icon style={[{ color: 'white' }]} size={25} name={'call'} />
        )
      }} />
    </MaterialBottomTab.Navigator>

  }


  return (

    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}>

        <Drawer.Navigator>
          <Drawer.Screen name='Home' children={createHomeStack} />
          {/* <Drawer.Screen name='Contact' component={Screen1} />
          <Drawer.Screen name='Favourite' component={Screen2} />
          <Drawer.Screen name='Settings' component={Screen3} /> */}
        </Drawer.Navigator>
      </NavigationContainer>

    </AppearanceProvider>



  )

}

export default App