import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Button } from "./common";
import lang from "../lang.json";

class LandingPage extends Component {

    componentWillMount() {
        changeNavigationBarColor("white", true);
    }

    componentDidMount() {
        this.onPressPlay();
    }
    
    onPressPlay() {
        const { navigate } = this.props.navigation;
        navigate("Game");
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
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
        flex: 1
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        marginTop: 100
    },
    buttonWrapper: {
        flexDirection: "row",
        marginTop: 200,
        paddingLeft: 50,
        paddingRight: 50
    }
});

export default LandingPage;

