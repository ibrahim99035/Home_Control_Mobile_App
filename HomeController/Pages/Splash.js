import * as React from 'react'
import {
  Text, View, StyleSheet, Image,
  ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
  Dimensions, AppRegistry, ActivityIndicator, Switch, FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import LottieView from 'lottie-react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

export default class Splash extends React.Component {


    constructor(props) {
        super(props)

        this.ref=React.createRef(null)
        this.state = {

        }
    }
    componentDidMount() {
        let log = 1
        setTimeout(() => {
            if (log == 1) {
                this.props.navigation.navigate("MyStack")
            }  else {
                this.props.navigation.navigate("Auth")
    
            }  
        }, 1000)

      
    }

    render() {
        return (
            <>
                   <LottieView
                    ref={this.ref}
                    source={require("../assets/lottie/68902-home.json")}
                    loop={false}
                    autoPlay={true}
                    speed={1.5}
                />
            </>
        )
    }

}


const styles = StyleSheet.create({


})