
'use strict';

import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, Text, StatusBar} from 'react-native';


import {dashboardStyle} from './dashboard.style';



export default class Dashboard extends Component {


    render() {

        let frmObj = {};

        return (

            <View
                style={styles.container}
            >

                <StatusBar
                    backgroundColor="#2C3E50"
                    barStyle="light-content"
                />

                <Text
                    style={styles.contTxt}
                >
                    Dashboard Screen
                </Text>
            </View>
        );
    }
}


const navigateAction = NavigationActions.navigate({
    routeName: 'Dashboard',
    action: NavigationActions.navigate({routeName: 'Dashboard'})
});


const styles = StyleSheet.create(dashboardStyle);



