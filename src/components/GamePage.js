import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler } from "react-native";
import { Confirm } from "./common";
import Tile from "./Tile";

class GamePage extends Component {
    static navigationOptions = {
        // you can set custom options here.
    }

    state = {
        confirmBack: false
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress.bind(this));
    }

    onBackPress() {
        this.setState({ confirmBack: true });
        return true;
    }

    goBack() {
        const { goBack } = this.props.navigation;
        goBack();
        this.setState({ confirmBack: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <Text>Game Page</Text>
                <Tile />
                <Tile revealed neighborMines="2" />
                <Tile revealed mine />

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
        backgroundColor: "white"
    },
    tile: {
        width: 40,
        height: 40,
    }
});

export default GamePage;

