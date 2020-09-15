import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import firebase from 'firebase';

export default class homeScreen extends React.Component {
    state = {
        email:"",
        displayName: ""
    };

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;
        console.log(firebase.auth().currentUser.email)
        this.setState({email, displayName});
    }

    singOutUser = () =>{
        firebase.auth.singOut();
    }

    render() {
        return(
            <View style={style.container}>
                <Text>Ola {this.state.email}!</Text>

                <TouchableOpacity style={{ marginTop:32 }} onPress={this.singOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});