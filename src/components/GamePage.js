import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    BackHandler,
    Dimensions,
    Text
} from "react-native";
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import { Confirm } from "./common";
import Tile from "./Tile";
import { setDebug, reset, tileGenTest } from "../actions";
import ChooseTestBoardModal from "./ChooseTestBoardModal";
import { ImageButton } from "./ImageButton";

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
                <StatusBar barStyle="dark-content" backgroundColor="white" translucent={false} />
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            paddingTop: 5,
                            paddingBottom: 20
                        }}
                    >
                        {
                            (() => {
                                const result = [];
                                for (let i = 0; i < this.props.tiles.length; i++) {
                                    const tile = this.props.tiles[i];
                                    result.push(
                                        (
                                            <Tile
                                                key={i}
                                                mine={tile.mine}
                                                debug={this.props.debug}
                                                neighborMines={tile.neighborMines}
                                                revealed={tile.revealed}
                                                flag={tile.flag}
                                                tileIndex={i}
                                            />
                                        )
                                    );
                                }
                                if (result.length === 0) {
                                    return (
                                        <Text
                                            style={{ marginTop: 100, fontSize: 20 }}
                                        >
                                            Click the smiley face to start
                                        </Text>
                                    );
                                } else {
                                    return result;
                                }
                            })()
                        }
                    </View>
                </ScrollView>

                <View style={styles.bottomBar}>
                    <View style={styles.bottomLayer}>
                        <ImageButton
                            source={require("../images/debug.png")}
                            onPress={() => { this.props.setDebug(!this.props.debug); }}
                        />
                        <ImageButton
                            source={require("../images/face_happy.png")}
                            onPress={() => {
                                let { height, width } = Dimensions.get('window');
                                // MIGHT CAUSE PROBLEMS!! UPDATE LATER
                                height = Math.floor(height / 32) - 5;
                                width = Math.floor(width / 32);
                                this.props.tileGenTest({ width, height });
                                // Alert.alert("Feature not implemented.", "It's coming soon!");
                            }}
                        />
                        <ImageButton
                            source={require("../images/test_1.png")}
                            onPress={() => { this.setState({ chooseTestBoardModal: true }); }}
                        />

                        <ChooseTestBoardModal
                            visible={this.state.chooseTestBoardModal}
                            onCancel={() => { this.setState({ chooseTestBoardModal: false }); }}
                        />
                    </View>
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
        flexDirection: "column",
        paddingLeft: 16,
        paddingRight: 11,
        elevation: 10,
    },
    bottomLayer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 20
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

const mapStateToProps = ({ game, tiles }) => {
    const { width, height, debug } = game;
    return {
        width, height, debug, tiles
    };
};

export default connect(mapStateToProps, { setDebug, reset, tileGenTest })(GamePage);

