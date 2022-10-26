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

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: "",
            pass: "",
            secpass: true,
            eyeName: "",

        }
    }

    login_Fun() {
        let password = this.state.pass
        let userName = this.state.user
        // if (userName != "" && userName.includes("@") && userName.includes(".com")) {
        //     if (password != "" && password.length >= 4) {
        //         alert(this.state.user + "    " + this.state.pass)
        //         this.setState({
        //             category_visable: true

        //         })
        //     }
        if(password==1&&userName=="a"){
            this.props.navigation.navigate("Home")
        
        } else {
            alert("Username or password is not true")
        }
        this.setState({
            user: "",
            pass: "",
        })
    }

    render() {

        return (
            <>
            <ScrollView>
                <View style={styles.mainView}>
                    <View style={{
                        width: "100%", height: "35%", backgroundColor: Constants.mainColor,
                        alignItems: "center",
                    }}>
                        <Image source={require("../img/logo.png")}
                            style={{ width: RFPercentage(30), height: RFPercentage(30) }}
                        />
                    </View>
                    <View style={styles.loginView}>
                        <Text style={{ fontSize: RFPercentage(5), color: "#000", fontWeight: "600", letterSpacing: 1.7 }}>Login</Text>

                        <View style={{
                            width: "90%", height: RFPercentage(8), backgroundColor: "#efefef",
                            marginVertical: RFPercentage(2), flexDirection: "row", padding: RFPercentage(1),
                            justifyContent: "space-between", alignItems: "center", borderRadius: RFPercentage(1)
                        }}>

                            <Icon name='user-alt' size={RFPercentage(3)} color="#000" />
                            <TextInput
                                style={{
                                    width: "90%", height: RFPercentage(8), backgroundColor: "#efefef",
                                    padding: 10,
                                }}
                                placeholder="username"
                                keyboardType='email-address'
                                value={this.state.user}
                                onChangeText={(value) =>
                                    this.setState({
                                        user: value
                                    })
                                }
                            />
                        </View>

                        <View style={{
                            width: "90%", height: RFPercentage(8), backgroundColor: "#efefef",
                            marginVertical: RFPercentage(2), flexDirection: "row", padding: RFPercentage(1),
                            justifyContent: "space-between", alignItems: "center", borderRadius: RFPercentage(1)
                        }}>

                            <Icon name='key' size={RFPercentage(3)} color="#000" />
                            <TextInput
                                style={{
                                    width: "80%", height: RFPercentage(8), backgroundColor: "#efefef",
                                    padding: 10,
                                }}
                                placeholder="Password"
                                keyboardType='default'
                                secureTextEntry={this.state.secpass}
                                value={this.state.pass}
                                onChangeText={(value) =>
                                    this.setState({
                                        pass: value
                                    })
                                }
                            />
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({
                                        secpass: !this.state.secpass
                                    })}
                            >
                                <Icon name={this.state.secpass ? "eye" : "eye-slash"} size={RFPercentage(3)} color="#000" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={{
                            width: "75%", height: RFPercentage(8), backgroundColor: Constants.mainColor, padding: RFPercentage(1),
                            borderRadius: RFPercentage(4), marginVertical: RFPercentage(6), alignItems: "center", justifyContent: "center"
                        }}
                            onPress={() =>
                                this.login_Fun()
                            }
                        >
                            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "400" }}>Login</Text>
                        </TouchableOpacity>


                     
                    </View>



                </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: 750,
        // backgroundColor: "#f0f",
        // justifyContent: "center",
        alignItems: "center"
    }
    ,
    loginView: {
        width: "90%",
        height: RFPercentage(70),
        backgroundColor: "#fff",
        elevation: 10,
        borderRadius: RFPercentage(4),
        marginTop: RFPercentage(-11),
        padding: RFPercentage(2),
        alignItems: "center"
    }
})