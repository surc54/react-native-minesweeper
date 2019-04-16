import React from "react";
import { Text, View, Modal, StyleSheet, StatusBar } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

const Confirm = (props) => {
    const { cardSection, text, container } = styles;

    return (
        <Modal
            animationType="fade"
            onRequestClose={() => { }}
            transparent
            visible={props.visible || false}
        >
            <View style={container}>
                <StatusBar backgroundColor="rgba(0,0,0,0.75)" barStyle="light-content" />
                <CardSection style={cardSection}>
                    <Text style={text}>{props.children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={props.onAccept}>
                        {props.acceptText || "Yes"}
                    </Button>
                    <Button onPress={props.onDecline}>
                        {props.declineText || "No"}
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    cardSection: {
        justifyContent: "center"
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        lineHeight: 40
    },
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        position: "relative",
        flex: 1,
        justifyContent: "center"
    }
});

export { Confirm };