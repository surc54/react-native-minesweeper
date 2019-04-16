import React from "react";
import { View, Text } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene
                    key="landing"
                    component={LandingPage}
                    title="Minesweeper"
                />
                <Scene
                    key="game"
                    component={GamePage}
                    title="Minesweeper"
                    initial
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;

