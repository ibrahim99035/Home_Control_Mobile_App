import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch, TabBarIOSItem,BackHandler
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width
import * as Constants from "../Constants/Constants"

import LottieView from 'lottie-react-native';



export default class ControllRooms extends React.Component {

    constructor(props) {
        super(props)
        this.myRef1 = React.createRef(null);
        this.myRef2 = React.createRef(null);
        this.myRef3 = React.createRef(null);
        this.myRef4 = React.createRef(null);
        this.handleBackButtonClick=this.handleBackButtonClick.bind(this)

        this.state = {
            roomName: this.props.navigation.getParam('roomName'),
            devices: this.props.navigation.getParam('devices'),
            disableMode: false,
            togVal: false,
            
        }
    }

    ModeFun(index, val) {
        // let ref = this.myRef
        let devices = this.state.devices;

        if (devices[index].id == 1) {
            var ref = this.myRef1
        }
        if (devices[index].id == 2) {
            var ref = this.myRef2
        }
        if (devices[index].id == 3) {
            var ref = this.myRef3
        }
        if (devices[index].id == 4) {
            var ref = this.myRef4
        }
        // devices[index].mode = !devices[index].mode


        // console.log("====>"+ devices[index].mode )


        let currMode = devices[index].currMode;
        console.log("curr1 = " + currMode)
        let originalCurr = currMode;


        if (currMode % 2 == 0) {
            currMode--;

            devices[index].mode = false;

        } else {
            currMode++;
            devices[index].mode = true;

        }
        console.log("curr2 = " + currMode)
        // devices[index].currMode = currMode;


        // if (devices[index].mode == true) {
        //     ref.current?.play(devices[index].start1, devices[index].end1)

        // } else {
        //     ref.current?.play(devices[index].start2, devices[index].end2)
        // }
        // let value = val

        // this.setState({
        //     devices: devices,
        //     togVal: value
        // })

        let changeDone = 0;
        fetch('https://api.thingspeak.com/update?api_key=ZX2DQR29ZAQYJNXW&field1=' + currMode)
            .then(response => response.json())
            .then(data => {
                if (data != '0') {

                    console.log("UPDATED " + data)


                    devices[index].currMode = currMode;


                    if (devices[index].mode == true) {
                        ref.current?.play(devices[index].start1, devices[index].end1)

                    } else {
                        ref.current?.play(devices[index].start2, devices[index].end2)
                    }
                    let value = val

                    this.setState({
                        devices: devices,
                        disableMode: true,
                        togVal: value
                    })

                    setTimeout(() => {
                        this.setState({
                            disableMode: false,

                        })
                    }, 16000);

                }

            });



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
       


    itemRef(index) {
        let devices = this.state.devices;
        if (devices[index].id == 1) {
            var ref = this.myRef1
            // console.log("r1")
        }
        if (devices[index].id == 2) {
            var ref = this.myRef2
            // console.log("r2")
        }
        if (devices[index].id == 3) {
            var ref = this.myRef3
            // console.log("r3")
        }
        if (devices[index].id == 4) {
            var ref = this.myRef4
            // console.log("r4")
        }
        return ref
    }

    render() {

        return (
            <>
                <View style={styles.mainView}>
                    <View style={{ flexDirection: "row",justifyContent:'space-between',width:"95%" }}>
                        <Text style={{ margin: 5, fontSize: (width * 0.02 + height * 0.02), alignSelf: "baseline", fontWeight: "700", color: Constants.mainColor }}>
                            {this.state.roomName}
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.goBack()
                            }
                        >
                            <Icon name='chevron-right'
                                style={{ alignSelf: "flex-end", margin: RFPercentage(1), }}
                                size={RFPercentage(3)}
                            />
                        </TouchableOpacity>
                    </View>
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
                                        <View style={{ alignItems: "center" }}>
                                            <Switch disabled={this.state.disableMode}
                                                value={item.mode}
                                                thumbColor={item.mode ? "#f4f3f4" : "#f4f3f4"}
                                                trackColor={{ false: "#767577", true: "#549cfc" }}
                                                onValueChange={(value) =>
                                                    this.ModeFun(index)

                                                }
                                                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: RFPercentage(1) }}

                                            />
                                            <Text>{item.mode ? "ON" : "OFF"}</Text>
                                        </View>

                                        {
                                            item.mode ?
                                                <>

                                                    <LottieView
                                                        ref={this.itemRef(index)}
                                                        source={item.iconOn}
                                                        style={{ width: RFPercentage(12), height: RFPercentage(12), marginRight: RFPercentage(1) }}
                                                        loop={item.loop}
                                                        autoPlay={false}
                                                    />
                                                </>
                                                :
                                                <>

                                                    <LottieView
                                                        ref={this.itemRef(index)}
                                                        source={item.iconOff}
                                                        style={{ width: RFPercentage(12), height: RFPercentage(12), marginRight: RFPercentage(1) }}
                                                        loop={item.loop}
                                                        autoPlay={false}
                                                    />
                                                </>
                                        }


                                    </View>
                                </View>

                            )
                        }

                    </View>

                </View>
                {/* <Text>11111111111111</Text> */}
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