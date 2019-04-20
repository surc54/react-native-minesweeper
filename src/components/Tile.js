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
            const images = [
                null,
                require("../images/number_1.png"),
                require("../images/number_2.png"),
                require("../images/number_3.png"),
                require("../images/number_4.png"),
                require("../images/number_5.png"),
                require("../images/number_6.png"),
                require("../images/number_7.png"),
                require("../images/number_8.png")
            ];

            return (
                <Image
                    source={images[neighborMines]}
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
