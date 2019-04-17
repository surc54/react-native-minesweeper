import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler, Switch } from "react-native";
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { connect } from "react-redux";

import { Confirm, Button } from "./common";
import Tile from "./Tile";
import { setDebug } from "../actions";
import ChooseTestBoardModal from "./ChooseTestBoardModal";

class GamePage extends Component {
    static navigationOptions = {
        // you can set custom options here.
    }

    state = {
        confirmBack: false,
        chooseTestBoardModal: false
    };

    componentWillMount() {
        this.backPressListener = BackHandler.addEventListener("hardwareBackPress", () => {
            this.setState({ confirmBack: true });
            return true;
        });
        this.willFocusListener = this.props.navigation.addListener("willFocus", payload => {
            changeNavigationBarColor("#dddddd", true);
        });
    }

    componentWillUnmount() {
        if (this.backPressListener) {
            this.backPressListener.remove();
        }
        if (this.willFocusListener) {
            this.willFocusListener.remove();
        }
    }

    // eslint-disable-next-line react/sort-comp
    goBack() {
        const { goBack } = this.props.navigation;
        this.setState({ confirmBack: false });
        goBack();
    }

    onDebugToggle(val) {
        this.props.setDebug(val);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        {
                            (() => {
                                const result = [];
                                for (let i = 0; i < 228; i++) {
                                    result.push(
                                        (
                                            <Tile key={i} mine />
                                        )
                                    );
                                }
                                return result;
                            })()
                        }
                    </View>
                </View>

                <View style={styles.bottomBar}>
                    <View style={styles.debugControl}>
                        <Text style={styles.debugControlLabel}>Debug Mode: </Text>
                        <Switch
                            onValueChange={this.onDebugToggle.bind(this)}
                            value={this.props.debug}
                            thumbColor={this.props.debug ? "#007aff" : "#fff"}
                            trackColor={{ false: "#bbb", true: "#6696cc" }}
                        />
                    </View>
                    <Button
                        style={{ flex: 1, alignSelf: "center" }}
                        onPress={() => { this.setState({ chooseTestBoardModal: true }); }}
                    >Load Test Board</Button>

                    <ChooseTestBoardModal
                        visible={this.state.chooseTestBoardModal}
                        onCancel={() => { this.setState({ chooseTestBoardModal: false }); }}
                    />
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
        elevation: 10
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

const mapStateToProps = ({ game }) => {
    const { width, height, debug } = game;
    return {
        width, height, debug
    };
};

export default connect(mapStateToProps, { setDebug })(GamePage);

