import * as React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal, Dimensions, AppRegistry, ActivityIndicator } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width







export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <>
        <View>
         <Text style={{textAlign:"center",fontSize:35,alignSelf:"center"}}>
          بسم الله الرحمن الرحيم 
         </Text>

        </View>

      </>
    )
  }
}





const styles = StyleSheet.create({

})