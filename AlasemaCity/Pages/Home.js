import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width
import * as Constants from "../Constants/Constants"


export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            info: [
                {
                    id: 1,
                    name: "heat",
                    ima: require("../img/heat.png"),
                    num: 35 + " ْ S",
                }
                ,
                {
                    id: 2,
                    name: "rain",
                    ima: require("../img/rain.png"),
                    num: 35 + "%",
                }
                ,
                {
                    id: 3,
                    name: "humidity ",
                    ima: require("../img/cloudy.png"),
                    num: 50 + "%",
                }
            ]


        }
    }



    render() {

        return (
            <>
                <View style={styles.mainView}>
                    <Text style={{ margin: 10, fontSize: (width * 0.02 + height * 0.02), alignSelf: "baseline", fontWeight: "700", color: "#4094B4" }}>
                        Home Iformation
                    </Text>


                    <View style={styles.infoView}>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>
                            {this.state.info.map((item, index) =>
                                <View style={styles.viewOfInfo}>
                                    <View style={{
                                        flexDirection: "row", alignItems: "center", width: "95%", height: RFPercentage(7),
                                        justifyContent: "space-between",
                                    }}>

                                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>{item.name}</Text>
                                        <Image source={item.ima}
                                            style={{ width: RFPercentage(9), height: RFPercentage(9) }}
                                        />
                                    </View>

                                    <Text style={{ alignSelf: "center", fontSize: width * 0.028 + height * 0.028, fontWeight: "800", color: "#fff" }}>{item.num}</Text>
                                </View>


                            )
                            }
                        </ScrollView>
                    </View>

                    <View style={{ width: "100%", height: "60%", alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.buttonStyle}
                          onPress={
                            ()=>{
                                this.props.navigation.navigate("Rooms")
                            }
                        }
                        >
                            <Text style={styles.mainFont}>Controller</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={styles.mainFont}>Summery</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{width:"90%"}}>
                        <Image source={require("../img/logo.png")}
                            style={{alignSelf:"flex-end" }}
                        />
                    </View>
                </View>

            </>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: 816,
        // backgroundColor: "#f0f",
        // justifyContent: "center",
        alignItems: "center"
    }
    ,
    infoView: {
        width: "98%",
        height: height * 0.14,
        // backgroundColor: "#0f0f",
        flexDirection: "row",

    }
    ,
    viewOfInfo: {
        width: width * .38,
        height: "100%",
        backgroundColor: Constants.mainColor,
        marginHorizontal: width * 0.03,
        borderRadius: 10,
        padding: 10,
        elevation: 5

    }
    ,
    buttonStyle: {
        width: "80%",
        height: RFPercentage(15),
        borderRadius: RFPercentage(7),
        backgroundColor: "#BF8686",
        alignItems: "center",
        justifyContent: "center",
        padding: RFPercentage(2),
        elevation: 5,
        shadowColor: "#000",
        marginVertical: RFPercentage(4)
    }
    ,
    mainFont: { fontSize: Constants.fontSize, color: Constants.fontColor }
})