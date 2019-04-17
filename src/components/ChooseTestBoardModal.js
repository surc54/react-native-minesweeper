import React from "react";
import { Text, View, Modal, StyleSheet, StatusBar } from "react-native";
import { CardSection, Card, Button } from "./common";

class ChooseTestBoardModal extends React.Component {

    render() {
        const { cardSection, text, container } = styles;
        return (
            <Modal
                animationType="fade"
                onRequestClose={this.props.onCancel}
                transparent
                visible={this.props.visible || false}
            >
                <View style={container}>
                    <StatusBar backgroundColor="rgba(0,0,0,0.75)" barStyle="light-content" />
                    <Card style={styles.card}>
                        <CardSection style={cardSection}>
                            <Text style={text}>
                                Select file to load
                            </Text>
                        </CardSection>
                        <CardSection style={styles.buttonCardSection}>
                            <View style={styles.buttonSection}>
                                <Button onPress={this.props.loadOne}>
                                    Load testboard1.brd
                                </Button>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button onPress={this.props.loadTwo}>
                                    Load testboard2.brd
                                </Button>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button onPress={this.props.loadThree}>
                                    Load testboard3.brd
                                </Button>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button onPress={this.props.onCancel} color="red">
                                    Cancel
                                </Button>
                            </View>
                        </CardSection>
                    </Card>
                </View>
            </Modal>
        );
    }

}

const styles = StyleSheet.create({
    card: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: "white"
    },
    cardSection: {
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 10,
        borderBottomWidth: 0,
        backgroundColor: "transparent"
    },
    buttonCardSection: {
        justifyContent: "center",
        paddingBottom: 30,
        borderBottomWidth: 0,
        backgroundColor: "transparent",
        flexDirection: "column",
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        lineHeight: 40
    },
    buttonSection: {
        flexDirection: "row",
        marginBottom: 10
    },
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        position: "relative",
        flex: 1,
        justifyContent: "flex-end"
    }
});

export default ChooseTestBoardModal;
