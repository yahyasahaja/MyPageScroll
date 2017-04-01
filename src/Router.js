import React, { Component } from 'react';
import { Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import Room from './component/Room';
import LoginForm from './component/LoginForm';
import { Spinner } from './component/common';
import firebase from 'firebase';
import LoadingPage from './component/LoadingPage';
import { Router, Scene } from 'react-native-router-flux';

class RouterComponent extends Component {
    renderView() {
        
    }

    render() {
        return (
            <Router>
                <Scene key="loading">
                    <Scene key="loadingPage" component={LoadingPage} hideNavBar initial/>
                </Scene>

                <Scene key="login">
                    <Scene key="loginForm" component={LoginForm} title="Please Login"/>
                </Scene>

                <Scene key="home">
                    <Scene key="room" component={Room} hideNavBar/>
                </Scene>
            </Router>
        );
    }
}

const mapStateToProps = (state, props) => {
    return { user: state.user };
};

export default connect(mapStateToProps, actions)(RouterComponent);