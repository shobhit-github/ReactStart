'use strict';

import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, Image, StatusBar, TextInput, TouchableHighlight, Text, ToastAndroid} from 'react-native';


import {loginStyle} from './login.style';
import Auth from './login.network';
import {Config} from '../../Config';


export default class Login extends Component {


    appLogo = Config.IMG_DIR + 'react-logo.png';
    Auth = new Auth();


    doLogin(data) {

        this.Auth.doLogin(data, (res) => {

            if (!res.success) {
                return ToastAndroid.show("Invalid Credentials", ToastAndroid.SHORT);
            }

            this.props.navigation.dispatch(navigateAction);
        })

    }


    render() {

        let frmObj = {};

        console.log(this.appLogo);

        return (

            <View style={styles.container}>

                <Image
                    source={require('../../public/img/react-logo.png')}
                    style={{width: 150, height: 150}}
                />
                <StatusBar
                    backgroundColor="#2C3E50"
                    barStyle="light-content"
                />
                <TextInput
                    underlineColorAndroid="transparent"
                    style={[styles.field, {marginTop: 30}]}
                    onChangeText={(user) => frmObj.username = user }
                    placeholder={"Username"}
                    placeholderTextColor={"#999"}
                />
                <TextInput
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    style={[styles.field]}
                    onChangeText={(pass) => frmObj.password = pass }
                    placeholder={"Password"}
                    placeholderTextColor={"#999"}
                />
                <TouchableHighlight
                    style={styles.loginBtn}
                    onPress={ () => this.doLogin(frmObj) }
                >
                    <Text style={styles.loginBtnTxt}>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const navigateAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Dashboard'})
    ]
});


const styles = StyleSheet.create(loginStyle);



