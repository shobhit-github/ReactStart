'use strict';


import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'


import Login from './src/login/login.source';
import Dashboard from './src/dashboard/dashboard.source';


export default class Navigation extends Component {


    render() {
        return (

            <Router />
        );
    }

}


const Router = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions:{
            header:null
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions:{
            header:null
        }
    }
});

