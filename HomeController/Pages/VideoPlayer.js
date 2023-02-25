import * as React  from 'react'
import {
  Text, View, StyleSheet, Image,
  ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
  Dimensions, AppRegistry, ActivityIndicator, Switch, FlatList,BackHandler
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'



export default class ViedoPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    
    this.handleBackButtonClick=this.handleBackButtonClick.bind(this)

  }


  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack()
    return true;
  }
  
  render() {

    return (
      <>
      <Text>AAAAAAAAA</Text>
      <TouchableOpacity style={{width:50,height:50,backgroundColor:"#0ff"}}
      
      onPress={()=>
      this.props.navigation.goBack()
      }
      >

      </TouchableOpacity>
      </>
    )
  }
}

