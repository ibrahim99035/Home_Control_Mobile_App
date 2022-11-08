import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch, TabBarIOSItem,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width
import * as Constants from "../Constants/Constants"

// import {LottieView} from 'lottie-react-native'



export default class ControllRooms extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roomName: this.props.navigation.getParam('roomName'),
            devices: this.props.navigation.getParam('devices'),
            togVal: false
        }
    }

    ModeFun(index,val) {
        let devices = this.state.devices;
        devices[index].mode = !devices[index].mode
         let value = val

        this.setState({
            devices: devices,
            togVal:value
        })

    }

    // togSwitch=(value)=>{
    //     this.setState({
    //         togVal:value
    //     })
    // }

    render() {

        return (
            <>
                <View style={styles.mainView}>
                    <Text style={{ margin: 10, fontSize: (width * 0.02 + height * 0.02), alignSelf: "baseline", fontWeight: "700", color: "#4094B4" }}>
                        {this.state.roomName}
                    </Text>
                    <View style={{ width: "100%", alignItems: "center", }}>

                        {
                            this.state.devices.map((item, index) =>
                                <View style={styles.controlDevice}>
                                    <Text style={{ fontSize: RFPercentage(3), color: Constants.mainColor, fontWeight: "500" }}>
                                        {item.deviceName}
                                    </Text>

                                    <View style={{
                                        width: "95%", height: 100, alignSelf: "center", alignItems: "center",
                                        flexDirection: "row", justifyContent: "space-between",
                                    }}>
                                        <View style={{alignItems:"center"}}>
                                        <Switch
                                            value={item.mode}
                                            thumbColor={item.mode ? "#f4f3f4" : "#f4f3f4"}
                                            trackColor={{ false: "#767577", true: "#549cfc" }}
                                            onValueChange={(value) =>
                                               this.ModeFun(index)

                                            }
                                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: RFPercentage(1) }}

                                        />
                                        <Text>{item.mode?"ON":"OFF"}</Text>
                                        </View>
                                        
                                        {
                                            item.mode ?
                                                <>
                                                    <Image
                                                        source={item.iconOn}
                                                        style={{ width: RFPercentage(12), height: RFPercentage(12), marginRight: RFPercentage(1) }}
                                                    />
                                                </>
                                                :
                                                <>
                                                    <Image
                                                        source={item.iconOff}
                                                        style={{ width: RFPercentage(12), height: RFPercentage(12), marginRight: RFPercentage(1) }}
                                                    />
                                                </>
                                        }


                                    </View>
                                </View>

                            )
                        }

                    </View>

                </View>
                <Text>11111111111111</Text>
            </>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: "100%",
        // backgroundColor: "#f0f",
        // justifyContent: "center",
        alignItems: "center"
    }

    ,
    buttonStyle: {
        width: "100%",
        height: RFPercentage(14),
        borderRadius: RFPercentage(7),
        // backgroundColor: "#BF8686",
        // alignItems: "center",
        // justifyContent: "center",
        // padding: RFPercentage(2),
        elevation: 5,
        shadowColor: "#000",
        marginVertical: RFPercentage(4),
        // borderWidth: 1
    }
    ,
    CateFont: {
        alignSelf: "center",
        marginTop: RFPercentage(-10),
        fontSize: 25, color: "#fff",
        letterSpacing: 1.5,
        // borderWidth:1
    }
    ,
    controlDevice: {
        width: "90%",
        height: RFPercentage(20),
        backgroundColor: "#fbfbfb",
        marginBottom: RFPercentage(2),
        // borderWidth:1,
        padding: RFPercentage(1),
        elevation: 5,
        shadowColor: "#000",
        borderRadius: RFPercentage(2)
    }
})