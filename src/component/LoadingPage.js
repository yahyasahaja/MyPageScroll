import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from './common';
import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoadingPage extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(usr => {
            this.props.loginState(usr);
            Actions[usr ? 'home' : 'login']({type: ActionConst.RESET});
        });
    }

    render() {
        const { splashStyle } = styles;
        return (
            <View style={splashStyle}>
                <Spinner />
            </View>
        );
    }
}

const styles = {
    splashStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default connect(null, actions)(LoadingPage);