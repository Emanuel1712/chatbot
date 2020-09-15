import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBarAnimation} from "react-native";
import firebase from 'firebase';
import { StatusBar } from "expo-status-bar";
export default class loginScreen extends React.Component {

    state = {
        Email:"",
        Password:"",
        errorMessage: null
    };

    handlelogin = () =>{
        const {Email, Password} = this.state;
       
        firebase
            .auth()
            .signInWithEmailAndPassword(Email, Password)
            .catch(error => this.setState({errorMessage: error.message }));
    };
  
    render() {
        return(
            <View style={style.container}>
                <Text style={style.greeting}>{'Ola.\nSeja bem vindo!'}</Text>
       
                <View style={style.erroMessage}>
                    {this.state.errorMessage && <Text style={style.error}>{this.state.errorMessage}</Text>}
                </View>   

                <View style={style.form}>
                    
                    <View>
                        <Text style={style.inputTitle}>Email Address</Text>
                        <TextInput style={style.TextInput}
                         autoCapitalize="none" 
                         onChangeText={Email => this.setState({Email})}
                        value={this.state.Email}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={style.inputTitle}>Password</Text>
                        <TextInput style={style.TextInput} 
                        secureTextEntry autoCapitalize="none" 
                        onChangeText={Password => this.setState({Password})}
                        value={this.state.Password}
                        ></TextInput>
                    </View>
                </View>   
                 
                <TouchableOpacity style={style.button} onPress={this.handlelogin}>
                    <Text style={{color:"#FFF", fontWeight:"500"}}>Sing in</Text>    
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:"center", marginTop:32}} onPress={ () => this.props.navigation.navigate("register")}>
                    <Text style={{color:"#414959", fontSize:13}}>
                        New to App? <Text style={{fontWeight:"500", color:"#E9446A"}}>Sing Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>

       
        );
    }
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    },
    greeting: {
        marginTop:32,
        fontSize:18,
        fontWeight: "400",
        textAlign: "center"
    },
    erroMessage: {
        height:72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161f3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});