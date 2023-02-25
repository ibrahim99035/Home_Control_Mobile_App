import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch, FlatList, BackHandler
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width
import * as Constants from "../Constants/Constants"



export default class Rooms extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            rooms: [
                {
                    id: 1,
                    name: "Garden",
                    img: require("../img/garden.jpg"),
                    devices: [
                        {
                            id: 1,
                            deviceName: "All lighting",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 1,
                            /*
                            Start1 & End1 ==> part of animation turn on 
                            Start2 & end2 ==> part of animation turn off
                            */


                        }
                        ,
                        {
                            id: 2,
                            deviceName: "Left lighting",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 3,



                        }
                        ,
                        {
                            id: 3,
                            deviceName: "Right lighting",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 5,


                        }
                    ]

                }
                ,
                {
                    id: 2,
                    name: "The passages",
                    img: require("../img/passage.png"),
                    devices: [

                        {
                            id: 1,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 41,

                        }
                        ,


                    ]
                }
                ,
                {
                    id: 3,
                    name: "Living room",
                    img: require("../img/living.jpg"),
                    devices: [
                        {
                            id: 1,
                            deviceName: "Balcony",
                            mode: false,
                            iconOff: require("../assets/lottie/lf30_editor_eqrgy6bw.json"),
                            iconOn: require("../assets/lottie/lf30_editor_eqrgy6bw.json"),
                            loop: false,
                            start1: 1,
                            end1: 65,
                            start2: 1,
                            end2: 1,
                            currMode: 7,

                        }
                        ,
                        {
                            id: 2,
                            deviceName: "Heater",
                            mode: false,
                            iconOff: require("../assets/lottie/off_fire.json"),
                            iconOn: require("../assets/lottie/66488-fire-feu-fuego.json"),
                            loop: true,
                            start1: 0,
                            end1: 120,
                            start2: 0,
                            end2: 0,
                            currMode: 9,

                        }
                        ,
                        {
                            id: 3,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 11,

                        }
                        ,
                        {
                            id: 4,
                            deviceName: "Fan",
                            mode: false,
                            iconOff: require("../assets/lottie/85584-curved-fan-animation.json"),
                            iconOn: require("../assets/lottie/85584-curved-fan-animation.json"),
                            loop: true,
                            start1: 0,
                            end1: 180,
                            start2: 0,
                            end2: 0,
                            currMode: 13,

                        }

                    ]
                }
                ,
                {
                    id: 4,
                    name: "Guest toilet",
                    img: require("../img/guest.jpg"),
                    devices: [

                        {
                            id: 1,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 15,

                        }
                        ,


                    ]
                }
                ,

                {
                    id: 5,
                    name: "Kitchen",
                    img: require("../img/kit.jpg"),
                    devices: [

                        {
                            id: 1,
                            deviceName: "Suction",
                            mode: false,
                            iconOff: require("../assets/lottie/85584-curved-fan-animation.json"),
                            iconOn: require("../assets/lottie/85584-curved-fan-animation.json"),
                            loop: true,
                            start1: 0,
                            end1: 180,
                            start2: 0,
                            end2: 0,
                            currMode: 17,

                        }
                        ,
                        {
                            id: 2,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 19,

                        }
                        ,

                    ]
                }
                ,
                {
                    id: 6,
                    name: "Master room",
                    img: require("../img/master.jpg"),
                    devices: [
                        {
                            id: 1,
                            deviceName: "Balcony",
                            mode: false,
                            iconOff: require("../assets/lottie/lf30_editor_eqrgy6bw.json"),
                            iconOn: require("../assets/lottie/lf30_editor_eqrgy6bw.json"),
                            loop: false,
                            start1: 1,
                            end1: 65,
                            start2: 1,
                            end2: 1,
                            currMode: 21,

                        }
                        ,
                        {
                            id: 2,
                            deviceName: "Heater",
                            mode: false,
                            iconOff: require("../assets/lottie/off_fire.json"),
                            iconOn: require("../assets/lottie/66488-fire-feu-fuego.json"),
                            loop: true,
                            start1: 0,
                            end1: 120,
                            start2: 0,
                            end2: 0,
                            currMode: 23,

                        }
                        ,
                        {
                            id: 3,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 25,

                        }
                        ,
                        {
                            id: 4,
                            deviceName: "Fan",
                            mode: false,
                            iconOff: require("../assets/lottie/85584-curved-fan-animation.json"),
                            iconOn: require("../assets/lottie/85584-curved-fan-animation.json"),
                            loop: true,
                            start1: 0,
                            end1: 180,
                            start2: 0,
                            end2: 0,
                            currMode: 27,

                        }

                    ]
                }

                ,
                {
                    id: 7,
                    name: "Master Bathroom",
                    img: require("../img/masterbath.jpg"),
                    devices: [

                        {
                            id: 1,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 29,

                        }
                        ,


                    ]
                }
                ,
                {
                    id: 8,
                    name: "second bedroom",
                    img: require("../img/bedroom1.jpg"),
                    devices: [
                        {
                            id: 1,
                            deviceName: "Window",
                            mode: false,
                            iconOff: require("../assets/lottie/lf30_editor_eqrgy6bw.json"),
                            iconOn: require("../assets/lottie/lf30_editor_eqrgy6bw.json"),
                            loop: false,
                            start1: 1,
                            end1: 65,
                            start2: 1,
                            end2: 1,
                            currMode: 31,

                        }
                        ,
                        {
                            id: 2,
                            deviceName: "Heater",
                            mode: false,
                            iconOff: require("../assets/lottie/off_fire.json"),
                            iconOn: require("../assets/lottie/66488-fire-feu-fuego.json"),
                            loop: true,
                            start1: 0,
                            end1: 120,
                            start2: 0,
                            end2: 0,
                            currMode: 33,

                        }
                        ,
                        {
                            id: 3,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 35,

                        }
                        ,
                        {
                            id: 4,
                            deviceName: "Fan",
                            mode: false,
                            iconOff: require("../assets/lottie/85584-curved-fan-animation.json"),
                            iconOn: require("../assets/lottie/85584-curved-fan-animation.json"),
                            loop: true,
                            start1: 0,
                            end1: 180,
                            start2: 0,
                            end2: 0,
                            currMode: 37,

                        }

                    ]
                }

                ,
                {
                    id: 9,
                    name: "Main bathroom",
                    img: require("../img/bath.jpg"),
                    devices: [

                        {
                            id: 1,
                            deviceName: "LED",
                            mode: false,
                            iconOff: require("../assets/lottie/lighto.json"),
                            iconOn: require("../assets/lottie/lighto.json"),
                            loop: false,
                            start1: 1,
                            end1: 60,
                            start2: 17,
                            end2: 17,
                            currMode: 39,

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
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
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

                <View style={styles.mainView}>
                    <View style={{ width: "90%", }}>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.goBack()
                            }
                        >
                            <Icon name='chevron-right'
                                style={{ alignSelf: "flex-end", marginBottom: RFPercentage(-4), marginTop: RFPercentage(2) }}
                                size={RFPercentage(3)}
                            />
                        </TouchableOpacity>


                        <Image source={require("../img/one_titled.png")}
                            style={{ width: RFPercentage(13), height: RFPercentage(13), borderRadius: 35, alignSelf: "center", marginTop: RFPercentage(1) }}
                        />
                    </View>
                    <ScrollView style={{ width: "80%", }}
                    // showsVerticalScrollIndicator={false}
                    >

                        {
                            this.state.rooms.map((room, index) =>

                                <TouchableOpacity style={styles.buttonStyle}
                                    onPress={
                                        () => {
                                            this.props.navigation.navigate("ControllRooms", {
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
        marginVertical: RFPercentage(2.2),
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