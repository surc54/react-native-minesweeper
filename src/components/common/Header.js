
// Import libraries
import React from "react";
import { Platform, Text, View } from "react-native";

// Make a component
const Header = (props) => (
    // Alternative way to put style of textStyle
    // const { textStyle } = styles; // destructures the object.
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
            {props.headerText || "Header"}
        </Text>
    </View>
);

const styles = {
    textStyle: {
        fontSize: 20,
        color: "black"
    },
    viewStyle: {
        height: 64,
        backgroundColor: "#f8f8f8",
        justifyContent: "center", // alt: flex-end, flex-start (default)
        alignItems: "center", // alt: flex-end, flex-start (default)
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        ...Platform.select({
            ios: {
                paddingTop: 15,
                shadowOpacity: 0.2
            },
            android: {
                elevation: 10,
            }
        })
    }
};

// Make the component available to other parts of the app
export { Header };
