import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler, Image } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { connect } from "react-redux";

import { Button } from "./common";
import lang from "../lang.json";
import { reset } from "../actions";

class LandingPage extends Component {

    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        this.willFocusListener = this.props.navigation.addListener("willFocus", payload => {
            changeNavigationBarColor("white", true);
        });
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.onPressPlay();
        // }, 200);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
        if (this.willFocusListener) {
            this.willFocusListener.remove();
        }
    }

    onBackPress() {
        console.log("LANDING: BACK");
        BackHandler.exitApp();
        return true;
    }

    onPressPlay() {
        const { navigate } = this.props.navigation;
        this.props.reset();
        navigate("Game");
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <Image source={require("../images/LandingLogo.png")} />
                <Text style={styles.title}>
                    {lang.app.name}
                </Text>
                <View style={styles.buttonWrapper}>
                    <Button onPress={this.onPressPlay.bind(this)}>
                        Play
                </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingBottom: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
    buttonWrapper: {
        flexDirection: "row",
        paddingLeft: 50,
        paddingRight: 50
    }
});

export default connect(null, { reset })(LandingPage);

