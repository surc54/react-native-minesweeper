import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import SplashScreen from "react-native-splash-screen";

import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage';
import reducers from "./reducers";


const MainNavigator = createStackNavigator(
    {
        Landing: {
            screen: LandingPage
        },
        Game: {
            screen: GamePage
        }
    },
    {
        initialRouteName: "Landing",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "white",
            },
            headerTintColor: "black",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        },
        headerMode: "none"
    }
);

const Navigator = createAppContainer(MainNavigator);


class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={createStore(reducers, applyMiddleware(thunk))}>
                <Navigator />
            </Provider>
        );
    }
}


export default App;
