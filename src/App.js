import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Router from "./Router";
import GamePage from "./components/GamePage";
import LandingPage from "./components/LandingPage";

// const App = () => {
//     return (
//         <GamePage />
//         // <Router />
//     );
// };

const MainNavigator = createStackNavigator({
    Landing: { screen: LandingPage },
    Game: { screen: GamePage },
});

const App = createAppContainer(MainNavigator);

export default App;
