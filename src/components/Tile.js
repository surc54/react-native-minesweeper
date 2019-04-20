import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Vibration
} from "react-native";
import { connect } from "react-redux";
import { tileClick, tileLongClick } from "../actions";

const sampleProp = {
    mine: false,
    neighborMines: 2,
    revealed: false,
    length: "23",
    tileIndex: 2
};

class Tile extends Component {

    tilePress() {
        if (this.props.revealed || this.props.flag) return;
        Vibration.vibrate(5);
        this.props.tileClick(this.props.tileIndex);
    }

    tileLongPress() {
        if (this.props.revealed) return;
        Vibration.vibrate(5);
        this.props.tileLongClick(this.props.tileIndex);
    }

    renderSecondarySprite() {
        const {
            mine = false,
            neighborMines = "0",
            size = "32",
            debug = false,
            revealed = false,
            flag = false
        } = this.props;

        const response = [];

        if (flag && !revealed) {
            response.push(
                (
                    <Image
                        source={require("../images/flag.png")}
                        style={{
                            width: Number(size),
                            height: Number(size),
                            marginTop: (Number(size) * -1)
                        }}
                    />
                )
            );
        }

        if (mine) {
            if (revealed || debug) {
                response.push((
                    <Image
                        source={require("../images/mine.png")}
                        style={{
                            width: Number(size),
                            height: Number(size),
                            marginTop: (Number(size) * -1)
                        }}
                    />
                ));

                return response;
            }
        } else if (revealed) {
            let image = null;

            switch (neighborMines) {
                case 1:
                    image = require("../images/number_1.png");
                    break;
                case 2:
                    image = require("../images/number_2.png");
                    break;
                case 3:
                    image = require("../images/number_3.png");
                    break;
                case 4:
                    image = require("../images/number_4.png");
                    break;
                case 5:
                    image = require("../images/number_5.png");
                    break;
                case 6:
                    image = require("../images/number_6.png");
                    break;
                case 7:
                    image = require("../images/number_7.png");
                    break;
                case 8:
                    image = require("../images/number_8.png");
                    break;
                default:
                image = null;
            }

            return (
                <Image
                    source={image}
                    style={{
                        width: Number(size),
                        height: Number(size),
                        marginTop: (Number(size) * -1)
                    }}
                />
            );
        }
        if (response.length > 0) {
            return response.length === 1 ? response[0] : response;
        }
    }

    render() {
        const { revealed = false, size = "32" } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={this.tilePress.bind(this)}
                disabled={revealed}
                onLongPress={this.tileLongPress.bind(this)}
            >
                <View>
                    <Image
                        source={revealed
                            ? require("../images/tile_revealed.png")
                            : require("../images/tile_hidden.png")}
                        style={{
                            width: Number(size),
                            height: Number(size)
                        }}
                    />
                    {this.renderSecondarySprite()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({});

export default connect(null, { tileClick, tileLongClick })(Tile);
