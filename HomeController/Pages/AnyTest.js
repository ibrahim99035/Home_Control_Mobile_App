import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch, FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width

import LottieView from 'lottie-react-native';

export default class AnyTest extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef(null);

        this.state = {
            plaay: false
        }
    }

    mode() {
        let like = this.state.plaay
        let ref = this.myRef
        like = !like
        if (like == false) {
            ref.current?.play(0, 0)

        } else {
            ref.current?.play(1, 65)
        }
      
        this.setState({
            plaay: like

        })
        ref = React.createRef(null);
    }


    render() {

        return (
            <>
                <LottieView
                    ref={this.myRef}
                    source={require("../assets/lottie/lf30_editor_eqrgy6bw.json")}
                    loop={false}
                    autoPlay={false}
                    // speed={1.5}
                />
                <TouchableOpacity style={{ width: 100, height: 50, backgroundColor: "#0fff" }}
                    onPress={() =>
                        this.mode()
                    }
                >

                </TouchableOpacity>
            </>
        )
    }
}