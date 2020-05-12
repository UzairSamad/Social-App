import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Header from './src/component/Header'
import Home from './src/component/Home'



class App extends Component {
  render() {

    return (
      <View>
        <Header />
        <Home />
      </View>

    )
  }
}

export default App