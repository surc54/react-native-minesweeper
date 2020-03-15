import React from "react";
import { Text, View, Modal, StyleSheet, StatusBar, Vibration } from "react-native";
import { CardSection } from "./CardSection";
import { Card } from "./Card";
import { Button } from "./Button";

const Confirm = (props) => {
    const { cardSection, text, container, buttonCardSection } = styles;

    return (
        <Modal
            animationType="fade"
            onRequestClose={() => { }}
            transparent
            visible={props.visible || false}
        >
            <View style={container}>
                <StatusBar backgroundColor="rgba(0,0,0,0.75)" barStyle="light-content" />
                <Card style={styles.card}>
                    <CardSection style={cardSection}>
                        <Text style={text}>
                            {props.children}
                        </Text>
                    </CardSection>
                    <CardSection style={buttonCardSection}>
                        <Button onPress={props.onAccept}>
                            {props.acceptText || "Yes"}
                        </Button>
                        <Button onPress={props.onDecline}>
                            {props.declineText || "No"}
                        </Button>
                    </CardSection>
                </Card>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: "white"
    },
    cardSection: {
        justifyContent: "center",
        paddingTop: 30,
        // paddingBottom: 30,
        borderBottomWidth: 0,
        backgroundColor: "transparent"
    },
    buttonCardSection: {
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 0,
        backgroundColor: "transparent"
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        lineHeight: 40,
        fontWeight: "bold"
    },
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        position: "relative",
        flex: 1,
        justifyContent: "center"
    }
});

export { Confirm };
