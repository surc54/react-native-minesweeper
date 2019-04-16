import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

const sampleProp = {
    mine: false,
    neighborMines: 2,
    revealed: false,
    length: "23"
};

class Tile extends Component {
    renderSecondarySprite() {
        const { mine = false, neighborMines = "0", size = "32" } = this.props;

        if (mine || (neighborMines && Number(neighborMines) !== 0)) {
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
                    source={mine
                        ? require("../images/mine.png")
                        : images[neighborMines]}
                    style={{
                        width: Number(size),
                        height: Number(size),
                        marginTop: (Number(size) * -1)
                    }}
                />
            );
        }
    }

    render() {
        const { mine = false, revealed = false, size = "32" } = this.props;

        return (
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
        );
    }
}

const styles = StyleSheet.create({});

export default Tile;
