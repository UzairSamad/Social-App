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



import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'



const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const MaterialBottomTab = createMaterialBottomTabNavigator()
const MaterialTopTab = createMaterialTopTabNavigator()








class App extends Component {

  render() {
    createHomeStack = () =>

      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>


    return (

      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' children={createHomeStack} />
          <Drawer.Screen name='Contact' component={Screen1} />
          <Drawer.Screen name='Favourite' component={Screen2} />
          <Drawer.Screen name='Settings' component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>


    )
  }
}

export default App