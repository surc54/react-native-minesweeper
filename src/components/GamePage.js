import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler } from "react-native";
import Tile from "./Tile";

class GamePage extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress.bind(this));
    }

    onBackPress() {
        console.log("Are you sure about that?");
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <Text>Game Page</Text>
                <Tile />
                <Tile revealed neighborMines="2" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    tile: {
        width: 40,
        height: 40,
    }
});

export default GamePage;

