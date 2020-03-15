import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    Platform,
    Image,
    Vibration
} from "react-native";

const ImageButton = (props) => {
    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback
                style={styles.nativeTouch}
                onPress={() => {
                    Vibration.vibrate(10);
                    if (props.onPress) props.onPress();
                }}
                background={TouchableNativeFeedback.SelectableBackground()}
                useForeground
            >
                <Image source={props.source} />
            </TouchableNativeFeedback>
        );
    }

    return (
        <TouchableOpacity
            style={[styles.button, props.style]}
            onPress={() => {
                Vibration.vibrate(10);
                if (props.onPress) props.onPress();
            }}
        >
            <Image source={props.source} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    nativeTouch: {
        // Tried to round corners
    },
    button: {
        backgroundColor: "#fff",
        marginLeft: 5,
        marginRight: 5,
        minHeight: 44
    }
});

export { ImageButton };
