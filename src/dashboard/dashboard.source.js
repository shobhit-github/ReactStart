'use strict';

import React, {Component} from 'react';
import {StyleSheet, Image, View, ScrollView, SectionList, Text, StatusBar, DrawerLayoutAndroid, ListView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import {dashboardStyle} from './dashboard.style';
import {Home} from './dashboard.network';


export default class Dashboard extends Component {


    home = new Home();

    constructor(props) {
        super(props);
        this.state = {user: new Object()};

        this.home.checkAuth((res)=>{

            this.setState({ user: res.response});
        })
    }


    render() {

        console.log(this.state.user.picture);

        let navigationView = (
            <ScrollView
                backgroundColor="#2A3F54"
                alignItems="flex-end"
                flexDirection="column-reverse"
            >
                <View
                    style={styles.drawerProfile}>
                    <Image
                        source={(!this.state.user.picture ? require('../../public/img/user.png') : {uri:this.state.user.picture}) }
                        style={styles.userImage}
                    />
                    <Text
                        style={styles.username}
                    >
                        {this.state.user.firstname} {this.state.user.lastname}
                    </Text>
                    <Text
                        style={styles.email}
                    >
                        {this.state.user.email}
                    </Text>
                </View>


                <View
                    style={styles.actionList}
                >

                    <Icon
                        style={styles.listCons}
                        name="home"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Home
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="bar-chart"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;Presentation
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="desktop"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Elements
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="clone"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Layout
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="home"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Home
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="bar-chart"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;Presentation
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="desktop"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Elements
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="clone"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Layout
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="home"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Home
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="bar-chart"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;Presentation
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="desktop"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Elements
                        </Text>
                    </Icon>

                    <Icon
                        style={styles.listCons}
                        name="clone"
                        // onPress={this.loginWithFacebook}
                    >
                        <Text
                            style={styles.actionTxt}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp; Layout
                        </Text>
                    </Icon>


                </View>

                <View
                    style={styles.actionBottom}
                >
                    <Icon
                        style={styles.botCons}
                        name="unlock-alt"
                        // onPress={this.loginWithFacebook}
                    />

                    <Icon
                        style={styles.botCons}
                        name="key"
                        // onPress={this.loginWithFacebook}
                    />

                    <Icon
                        style={styles.botCons}
                        name="gear"
                        // onPress={this.loginWithFacebook}
                    />

                    <Icon
                        style={styles.botCons}
                        name="power-off"
                        // onPress={this.loginWithFacebook}
                    />

                </View>

            </ScrollView>
        );

        return (

            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
            >
                <View
                    style={styles.container}
                >

                    <StatusBar
                        backgroundColor="#172D44"
                        barStyle="light-content"
                    />

                    <Text
                        style={styles.contTxt}
                    >
                        Dashboard Screen
                    </Text>

                </View>

            </DrawerLayoutAndroid>

        );
    }
}


const styles = StyleSheet.create(dashboardStyle);



