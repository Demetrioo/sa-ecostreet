import React from 'react'
import {View, ScrollView} from 'react-native'
import { Login } from './src/components/Login'

const App = () => {

  return(
    <ScrollView>
    <View>
      <Login />
    </View>
    </ScrollView>
  )
}


export default App