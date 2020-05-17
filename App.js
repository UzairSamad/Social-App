import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import 'react-native-gesture-handler';

import Screen1 from './src/screens/drawer/screen1'
import Screen2 from './src/screens/drawer/screen2'
import Screen3 from './src/screens/drawer/screen3'

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
      card: 'black',
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
      <Stack.Screen name="Feed" component={Feed} options={{ title: 'My Feed', headerTitleAlign: 'center' }} />
      <Stack.Screen name="Detail" component={Detail} options={{ title: 'Details', headerTitleAlign: 'center' }} />

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
          <Drawer.Screen name='Contact' component={Screen1} />
          <Drawer.Screen name='Favourite' component={Screen2} />
          <Drawer.Screen name='Settings' component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>

    </AppearanceProvider>



  )

}

export default App