/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducer';
import RouterComponent from './Router';

var initialized = false;
class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAPH__kccwQTYZx4tooELPRDDhawDRFVg0",
            authDomain: "manager-61051.firebaseapp.com",
            databaseURL: "https://manager-61051.firebaseio.com",
            storageBucket: "manager-61051.appspot.com",
            messagingSenderId: "425363121528"
        };
        
        if (!initialized) firebase.initializeApp(config);
        initialized = true;
    }

    render() {
        console.log("UTAMA")
        
        return (
            <Provider store={createStore(reducers)}>
                <RouterComponent />
            </Provider>
        );
    }
}

var styles = {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
}

export default App;