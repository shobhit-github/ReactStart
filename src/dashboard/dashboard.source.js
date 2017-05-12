'use strict';

import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    SectionList,
    Text,
    StatusBar,
    DrawerLayoutAndroid,
    ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import {dashboardStyle} from './dashboard.style';


export default class Dashboard extends Component {


    drawerVision = false;

    toggleDrawer() {
        if (!this.drawerVision) {
            openDrawer();
        }
    }

    render() {

        let navigationView = (
            <ScrollView
                backgroundColor="#2A3F54"
                alignItems="flex-end"
                flexDirection="column-reverse"
            >
                <View
                    style={styles.drawerProfile}>
                    <Image
                        source={require('../../public/img/user.png')}
                        style={styles.userImage}
                    />
                    <Text
                        style={styles.username}
                    >
                        Shohbit Sharma
                    </Text>
                    <Text
                        style={styles.email}
                    >
                        shobhitsharma@gmail.com
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



