import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler, Switch } from "react-native";
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Confirm, Button } from "./common";
import Tile from "./Tile";

class GamePage extends Component {
    static navigationOptions = {
        // you can set custom options here.
    }

    state = {
        confirmBack: false
    };

    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        this.willFocusListener = this.props.navigation.addListener("willFocus", payload => {
            changeNavigationBarColor("#dddddd", true);
        });
    }

    componentWillUnmount() {
        console.log("COMPONENT UNMOUNT");
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
        if (this.willFocusListener) {
            this.willFocusListener.remove();
        }
    }
    
    onBackPress() {
        console.log("GAME: BACK");
        this.setState({ confirmBack: true });
        return true;
    }

    goBack() {
        const { goBack } = this.props.navigation;
        this.setState({ confirmBack: false });
        goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <View>
                    <Text>Game Page</Text>
                    <Tile />
                    <Tile revealed neighborMines="2" />
                    <Tile revealed mine />
                </View>

                <View style={styles.bottomBar}>
                    <View style={styles.debugControl}>
                        <Text style={styles.debugControlLabel}>Debug Mode: </Text>
                        <Switch />
                    </View>
                    <Button style={{ flex: 1, alignSelf: "center" }}>Load Test Board</Button>
                </View>

                <Confirm
                    visible={this.state.confirmBack}
                    onAccept={this.goBack.bind(this)}
                    onDecline={() => { this.setState({ confirmBack: false }); }}
                >
                    Are you sure you want to exit?
                </Confirm>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    tile: {
        width: 40,
        height: 40,
    },
    bottomBar: {
        backgroundColor: "#ddd",
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 11,
        alignSelf: "flex-end",
        elevation: 4
    },
    debugControl: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
    },
    debugControlLabel: {
        fontWeight: "bold",
    }
});

export default GamePage;

