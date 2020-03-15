import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = ({ label, value, onChangeText, placeholder, textContentType, 
    secureTextEntry, autoComplete, keyboardType }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoComplete={autoComplete || "off"}
                keyboardType={keyboardType || "default"}
                placeholder={placeholder}
                autoCorrect={false}
                autoCapitalize="none"
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                textContentType={textContentType || "none"}
                secureTextEntry={secureTextEntry || false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        paddingTop: 0,
        paddingBottom: 0
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    }
});

export { Input };   
