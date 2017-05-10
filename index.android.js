"use strict";
/**
 * Storing multiple constant values inside of an object
 * Keep in mind the values in the object mean they can be modified
 * Which makes no sense for a constant, use wisely if you do this
 */


import React, {Component} from 'react';
import {AppRegistry, StyleSheet, StatusBar, BackHandler} from 'react-native';


import Navigation from './Navigation';


export default class ReactStart extends Component {


    render() {

        return (

            <Navigation />

        );
    }
}


AppRegistry.registerComponent('ReactStart', () => ReactStart);
