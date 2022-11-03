import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch, FlatList,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width

import LottieView from 'lottie-react-native'


export default class Lottie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ch: false
        }
    }


 
    render() {

        return (
            <>
                <View style={{ alignItems: "center", flex: 1 }}>
                    <LottieView
                    ref={animation}
                        source={require("../assets/lottie/121399-idea-bulb.json")}
                        style={{ width: 100, height: 100 }}
                        autoPlay={false}
                        loop={false}
                    />

                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: "#0ff" }}
                        onPress={() =>
                            this.setState({ ch:!this.state.ch })
                        }
                    >

                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
/**
 * 816    || 432
 */



const styles = StyleSheet.create({

})