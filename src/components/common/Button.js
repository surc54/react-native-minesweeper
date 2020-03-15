import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    Platform,
    View,
    Vibration
} from "react-native";

const Button = (props) => {
    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback
                style={styles.nativeTouch}
                onPress={() => {
                    Vibration.vibrate(15);
                    if (props.onPress) props.onPress();
                }}
                background={TouchableNativeFeedback.SelectableBackground()}
            >
                <View style={[styles.button(props.color || "#007aff"), props.style]}>
                    <Text style={styles.buttonText(props.color || "#007aff")}>
                        {props.children}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }

    return (
        <TouchableOpacity
            style={[styles.button(props.color || "#077aff"), props.style]}
            onPress={() => {
                Vibration.vibrate(5);
                if (props.onPress) props.onPress();
            }}
        >
            <Text style={styles.buttonText(props.color || "#007aff")}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    nativeTouch: {
        // Tried to round corners
    },
    button: (color) => {
        return {
            flex: 1,
            alignSelf: "stretch",
            backgroundColor: "#fff",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: color,
            marginLeft: 5,
            marginRight: 5,
            minHeight: 44
        };
    },
    buttonText: (color) => {
        return {
            alignSelf: "center",
            color,
            fontSize: 16,
            fontWeight: "600",
            paddingTop: 10,
            paddingBottom: 10
        };
    }
});

export { Button };
