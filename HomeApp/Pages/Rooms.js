import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch, FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width
import * as Constants from "../Constants/Constants"


import {LottieView} from 'lottie-react-native'

export default class Rooms extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rooms: [
                {
                    id:1,
                    name:"Garden",
                    img: require("../img/garden.jpg"),
                    devices:[
                        {
                            deviceName: "All lighting",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                        {
                            deviceName: "Left lighting",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                        {
                            deviceName: "Right lighting",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                    ]

                }
                ,
                {
                    id: 2,
                    name: "Living room",
                    img: require("../img/living.jpg"),
                    devices: [
                        {
                            deviceName: "Balcony",
                            mode: false,
                            iconOff:require("../img/cWindow.png"),
                            iconOn: require("../img/oWindow.png")
                        }
                        ,
                        {
                            deviceName: "Heater",
                            mode: false,
                            iconOff: require("../img/heaterOff.png"),
                            iconOn: require("../img/heaterOn.png")
                        }
                        ,
                        {
                            deviceName: "LED",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                        {
                            deviceName: "Fan",
                            mode: false,
                            iconOff:require("../img/fan.png"),
                            iconOn: require("../img/fan.png"),
                        }

                    ]
                }
                ,
                {
                    id: 3,
                    name: "Guest toilet",
                    img: require("../img/guest.jpg"),
                    devices: [
                
                        {
                            deviceName: "LED",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                     

                    ]
                }
                ,
                  
                {
                    id: 4,
                    name: "Kitchen",
                    img: require("../img/kit.jpg"),
                    devices: [
               
                        {
                            deviceName: "Hoods",
                            mode: false,
                            iconOff: require("../img/cWindow.png"),
                            iconOn: require("../img/oWindow.png")
                        }
                        ,
                        {
                            deviceName: "LED",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,

                    ]
                }
                ,
                {
                    id: 5,
                    name: "Master room",
                    img: require("../img/master.jpg"),
                    devices: [
                        {
                            deviceName: "Balcony",
                            mode: false,
                            iconOff: require("../img/cWindow.png"),
                            iconOn: require("../img/oWindow.png")
                        }
                        ,
                        {
                            deviceName: "Heater",
                            mode: false,
                            iconOff: require("../img/heaterOff.png"),
                            iconOn: require("../img/heaterOn.png")
                        }
                        ,
                        {
                            deviceName: "LED",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                        {
                            deviceName: "Fan",
                            mode: false,
                            iconOff:require("../img/fan.png"),
                            iconOn: require("../img/fan.png"),
                        }

                    ]
                }
                
                ,
                {
                    id: 6,
                    name: "Master Bathroom",
                    img: require("../img/masterbath.jpg"),
                    devices: [
                
                        {
                            deviceName: "LED",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                     

                    ]
                }
                ,
                {
                    id: 7,
                    name: "second bedroom",
                    img: require("../img/bedroom1.jpg"),
                    devices: [
                        {
                            deviceName: "Window",
                            mode: false,
                            iconOff: require("../img/cWindow.png"),
                            iconOn: require("../img/oWindow.png")
                        }
                        ,
                        {
                            deviceName: "Heater",
                            mode: false,
                            iconOff: require("../img/heaterOff.png"),
                            iconOn: require("../img/heaterOn.png")
                        }
                        ,
                        {
                            deviceName: "LED",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                        {
                            deviceName: "Fan",
                            mode: false,
                            iconOff:require("../img/fan.png"),
                            iconOn: require("../img/fan.png"),
                        }

                    ]
                }
    
                ,
                {
                    id: 8,
                    name: "Main bathroom",
                    img: require("../img/bath.jpg"),
                    devices: [
                
                        {
                            deviceName: "LED",
                            mode: false,
                            iconOff:require("../img/lightOff.png"),
                            iconOn: require("../img/lightOn.png"),
                        }
                        ,
                     

                    ]
                }

            ]
            ,
            // modalVis: false,
            // dataInRooms: '',
            // roomName: ''
        }
    }



    render() {

        return (
            <>
                <View style={styles.mainView}>
                    <View style={{ width: "90%" }}>
                        <Image source={require("../img/logo.png")}
                            style={{ width: RFPercentage(12), height: RFPercentage(12), borderRadius: 35, alignSelf: "center", marginTop: RFPercentage(2) }}
                        />
                    </View>
                    <ScrollView style={{ width: "80%", }}
                        showsVerticalScrollIndicator={false}
                    >

                        {
                            this.state.rooms.map((room, index) =>

                                <TouchableOpacity style={styles.buttonStyle}
                                    onPress={
                                        () => {
                                            this.props.navigation.navigate("ControllRooms",  {
                                                devices: this.state.rooms[index].devices,
                                                roomName: this.state.rooms[index].name,
                                            })
                                          
                                        }
                                    }
                                >

                                    <Image source={room.img}
                                        style={{ height: RFPercentage(15), width: "100%", borderRadius: RFPercentage(7), }}
                                    />
                                    <Text style={styles.CateFont}>{room.name}</Text>

                                </TouchableOpacity>
                            )
                        }

                    </ScrollView>
                </View>



                {/* <Modal
                    visible={this.state.modalVis}
                    onRequestClose={() =>
                        this.setState({
                            modalVis: false
                        })}
                >
                    <View style={styles.mainView}>
                        <Text style={{ margin: 10, fontSize: (width * 0.02 + height * 0.02), alignSelf: "baseline", fontWeight: "700", color: "#4094B4" }}>
                            {this.state.roomName}
                        </Text>
                        <View style={{ width: "100%", alignItems: "center", }}>


                            <FlatList
                                data={this.state.dataInRooms}

                                renderItem={({ item, index }) =>
                                    <View style={styles.controlDevice}>
                                        <Text style={{ fontSize: RFPercentage(3), color: Constants.mainColor, fontWeight: "500" }}>
                                            {item.deviceName}
                                        </Text>

                                        <View style={{
                                            width: "100%", height: 100, alignSelf: "center", alignItems: "center",
                                            flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ff0"
                                        }}>
                                            <Switch
                                                value={this.state.dataInRooms.mode}
                                                onValueChange={() => this.setState({
                                                    mode: !this.state.dataInRooms.mode
                                                })
                                                }
                                                trackColor={{ false: "#767577", true: "#0f0" }}
                                                style={ {width:RFPercentage(8),height:RFPercentage(15)}}

                                            />

                                        </View>
                                    </View>
                                }
                            />
                        </View>

                    </View>

                </Modal> */}
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
        width: RFPercentage(50),
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