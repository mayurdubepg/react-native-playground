/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import ListingsListScreen from './src/components/ListingsListScreen';
import NavigationService from './src/utils/NavigationService';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  List: {screen: ListingsListScreen},
  // Dash: {screen: NativeModules.ActivityStarter.navigateToExample('name')},
});

const AppContainer = createAppContainer(MainNavigator);
