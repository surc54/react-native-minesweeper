import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import { createStore } from "redux";

import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage';
import reducers from "./reducers";


const MainNavigator = createStackNavigator({
    Landing: {
        screen: LandingPage
    },
    Game: {
        screen: GamePage
    },
});

const Navigator = createAppContainer(MainNavigator);


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <LandingPage />
        </Provider>
    );
};


export default App;
