'use strict';

import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, Image, StatusBar, TextInput, TouchableHighlight, Text, ToastAndroid, AsyncStorage} from 'react-native';
import {loginStyle} from './login.style';


import Auth from './login.network';
import Token from '../../Token';


export default class Login extends Component {

    Auth = new Auth();
    Token= new Token();


    doLogin(data) {

        this.Auth.doLogin(data, (res) => {

            if (!res.success) {
                return ToastAndroid.show(res.message, ToastAndroid.SHORT);
            }

            this.Token.set(res.token);
            this.props.navigation.dispatch(navigateAction);
        })

    }


    render() {

        let frmObj = {};

        return (

            <Image
                source={require('../../public/img/bg-login.jpg')}
                style={styles.container}
            >

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
                    placeholderTextColor={"#FFF"}
                />
                <TextInput
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    style={[styles.field]}
                    onChangeText={(pass) => frmObj.password = pass }
                    placeholder={"Password"}
                    placeholderTextColor={"#FFF"}
                />
                <TouchableHighlight
                    style={styles.loginBtn}
                    onPress={ () => this.doLogin(frmObj) }
                >
                    <Text style={styles.loginBtnTxt}>
                        Login
                    </Text>
                </TouchableHighlight>
            </Image>
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



