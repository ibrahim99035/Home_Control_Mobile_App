import * as React from 'react'
import {
  Text, View, StyleSheet, Image,
  ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
  Dimensions, AppRegistry, ActivityIndicator, Switch, FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width

// import {LottieView} from 'lottie-react-native'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Rooms from './Pages/Rooms'
import ControllRooms from './Pages/ControllRooms'
import SignUp from './Pages/SignUP'

import Splash from './Pages/Splash'

// export default class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }



//   render() {

//     return (
//       <>
//       <AnyTest/>
//       </>
//     )
//   }
// }
/**
 * 816    || 432
 */

const Auth = createStackNavigator(
  {
    Login: {
      screen: Login
    }
    ,
    SignUp: {
      screen: SignUp
    }
  }
  ,
{
  headerMode:false,
  
}
)

const Intro = createStackNavigator(
  {
    Splash: {
      screen: Splash
    }
    
  }
  ,
{
  headerMode:false,
  
}
)

const MyStack = createStackNavigator(
  {
   
    Home: {
      screen: Home
    }
    ,
    Rooms: {
      screen: Rooms
    }
    ,
    ControllRooms: {
      screen: ControllRooms
    }
  }
  ,
  {
    headerMode: false
  }
)

export default createAppContainer(
  createStackNavigator(
    {
      Intro:Intro,
      Auth: Auth,
      MyStack: MyStack

    }


    ,
    {
      headerMode: false,
      
    }
  )
)

const styles = StyleSheet.create({

})