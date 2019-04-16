import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    Platform,
    View
} from "react-native";

const Button = (props) => {
    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback
                style={styles.nativeTouch}
                onPress={props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}
            >
                <View style={[styles.button, props.style]}>
                    <Text style={styles.buttonText}>
                        {props.children}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }

    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    nativeTouch: {
        // Tried to round corners
    },
    button: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007aff",
        marginLeft: 5,
        marginRight: 5,
        minHeight: 44
    },
    buttonText: {
        alignSelf: "center",
        color: "#007aff",
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10
    }
});

export { Button };
