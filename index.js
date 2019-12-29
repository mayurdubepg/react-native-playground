/**
 * @format
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import react from 'react';
import {name as appName} from './app.json';
import ReducerFactory from './src/redux/reducer/ReducerFactory';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(ReducerFactory, applyMiddleware(thunk));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
