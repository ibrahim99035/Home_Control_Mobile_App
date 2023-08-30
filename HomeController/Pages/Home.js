import * as React from 'react'
import {
    Text, View, StyleSheet, Image,
    ScrollView, ImageBackground, TouchableOpacity, Alert, Button, TextInput, Modal,
    Dimensions, AppRegistry, ActivityIndicator, Switch, BackHandler
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
var height = Dimensions.get("screen").height
var width = Dimensions.get("screen").width
import * as Constants from "../Constants/Constants"


export default class Home extends React.Component {


    componentDidMount() {

        setInterval(() => this.getData(), 1000)

    }
    getData() {

        let info = this.state.info;

        // heat ===========================



        fetch('https://api.thingspeak.com/channels/1977214/feeds.json?api_key=584IQLK6N6LKHU1V&results=2')           //api for the get request
            .then(response => response.json())
            .then(data => {
                // console.log(data['feeds'])
                let len = data['feeds'].length;
                // console.log('len ' + len)
                console.log("heat")
                let heat = 0;

                if (len > 1) heat = data['feeds'][1]['field1']
                else if (len == 1) heat = data['feeds'][0]['field1']

                info[0].num = heat;
                this.setState({ info: info })


                // else console.log("empty")
            });


        // rain==========================

        fetch('https://api.thingspeak.com/channels/1977209/feeds.json?api_key=VM5OX331U3BKPNNP&results=2')           //api for the get request
            .then(response => response.json())
            .then(data => {
                // console.log(data['feeds'])
                // console.log("rain")
                let rain = 0;

                let len = data['feeds'].length;
                if (len > 1) rain = data['feeds'][1]['field1']
                else if (len == 1) rain = data['feeds'][0]['field1']
                info[1].num = parseInt(rain) ? "YES" : "NO";
                this.setState({ info: info })


                // console.log(data['feeds'].length)
            });




        // humidity=====================================================



        fetch('https://api.thingspeak.com/channels/1977220/feeds.json?api_key=CB6D3GO0VD9DDYST&results=2')           //api for the get request
            .then(response => response.json())
            .then(data => {
                // console.log(data['feeds'])
                let len = data['feeds'].length;
                // console.log('len ' + len)
                // console.log("humidity")
                let humidity = 0;

                if (len > 1) humidity = data['feeds'][1]['field1']
                else if (len == 1) humidity = data['feeds'][0]['field1']
                info[2].num = humidity;
                this.setState({ info: info })


                // else console.log("empty")
                // console.log(data['feeds'].length)
            });



        // gas ===========================



        fetch('https://api.thingspeak.com/channels/1977578/feeds.json?api_key=V2O1X0IWAEJND11Y&results=2')           //api for the get request
            .then(response => response.json())
            .then(data => {
                // console.log(data['feeds'])
                let len = data['feeds'].length;
                // console.log('len ' + len)
                // console.log("heat")
                let gas = 0;

                if (len > 1) gas = data['feeds'][1]['field1']
                else if (len == 1) gas = data['feeds'][0]['field1']


                info[3].num = parseInt(gas) ? "YES" : "NO";
                this.setState({ info: info })


                // else console.log("empty")
            });



        // fire ===========================



        fetch('https://api.thingspeak.com/channels/1977576/feeds.json?api_key=Y1HIXQWH3MWU1EFY&results=2')           //api for the get request
            .then(response => response.json())
            .then(data => {
                // console.log(data['feeds'])
                let len = data['feeds'].length;
                // console.log('len ' + len)
                // console.log("heat")
                let fire = 0;

                if (len > 1) fire = data['feeds'][1]['field1']
                else if (len == 1) fire = data['feeds'][0]['field1']


                info[4].num = parseInt(fire) ? "YES" : "NO";
                this.setState({ info: info })


                // else console.log("empty")
            });



        console.log("save changes")

        // this.setState({ info: info })

    }
    constructor(props) {
        super(props)
        this.state = {
            info: [
                {
                    id: 1,
                    name: "heat",
                    ima: require("../img/heat.png"),
                    num: 35
                }
                ,
                {
                    id: 2,
                    name: "rain",
                    ima: require("../img/rain.png"),
                    num: "NO"
                }
                ,
                {
                    id: 3,
                    name: "humidity",
                    ima: require("../img/cloudy.png"),
                    num: 50
                }
                ,
                {
                    id: 4,
                    name: "Gas",
                    ima: require("../img/gaas.png"),
                    num: "NO"
                }
                ,
                {
                    id: 5,
                    name: "fire",
                    ima: require("../img/fire.png"),
                    num: "NO"
                }
            ]


        }
    }





    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        BackHandler.exitApp();
        return true;
    }


    render() {

        return (
            <>
                <View style={styles.mainView}>
                    <Text style={{ margin: 10, fontSize: (width * 0.02 + height * 0.02), alignSelf: "baseline", fontWeight: "700", color: Constants.mainColor }}>
                        Home Iformation
                    </Text>

                    <Image source={require("../img/one_titled.png")}
                        style={{
                            alignSelf: "center",
                            width: "25%",
                            height: RFPercentage(12),
                            marginVertical: RFPercentage(1)

                        }}
                    />

                    <View style={styles.infoView}>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>
                            {this.state.info.map((item, index) =>
                                <TouchableOpacity style={styles.viewOfInfo}>
                                    <View style={{
                                        flexDirection: "row", alignItems: "center", width: "98%", height: RFPercentage(7),
                                        justifyContent: "space-between",
                                    }}>

                                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>{item.name}</Text>
                                        <Image source={item.ima}
                                            style={{ width: RFPercentage(8), height: RFPercentage(8), resizeMode: "contain" }}
                                        />
                                    </View>

                                    <Text style={{ alignSelf: "center", fontSize: width * 0.028 + height * 0.028, fontWeight: "800", color: "#fff" }}>{item.num}{item.name == 'heat' ? " ْ S" : item.name == "humidity" ? "%" : ""}</Text>
                                </TouchableOpacity>


                            )
                            }
                        </ScrollView>
                    </View>

                    <View style={{ width: "100%", height: RFPercentage(60), alignItems: "center", justifyContent: "center", margin: RFPercentage(2), }}>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={
                                () => {
                                    this.props.navigation.navigate("Rooms")
                                }
                            }
                        >
                            <Text style={styles.mainFont}>Controller</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => {
                                this.props.navigation.navigate("ViedoPlayer")
                            }
                            }
                        >
                            <Text style={styles.mainFont}>video conference</Text>
                        </TouchableOpacity> */}
                    </View>


                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: 820,
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
        elevation: 5,

    }
    ,
    buttonStyle: {
        width: "70%",
        height: RFPercentage(11),
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
    mainFont: { fontSize: RFPercentage(4), color: Constants.fontColor }
})