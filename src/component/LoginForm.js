import React, { Component } from 'react';
import { Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Input, CardSection, Card, MyButton2, Spinner } from './common';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Icon } from 'react-native-material-design';

class LoginForm extends Component {
    state = { email: '', pass: '', loading: false, error: ''};

    renderError() {
        const { error } = this.state;
        const { errorStye } = styles;

        if (error.length > 0) return (
            <Text style={errorStye}>{ error }</Text>
        );
    }

    renderButton() {
        const { loading, error } = this.state;

        if (!loading) return (
            <MyButton2 onPress={this.onLoginButtonPress.bind(this)}text="Login"/>
        );

        return <Spinner/>
    }

    onLoginButtonPress() {
        const { email, pass } = this.state;
        Keyboard.dismiss();
        this.setState({loading: true, error: ''});
        firebase.auth().signInWithEmailAndPassword(email, pass).then(user => { this.props.loginState(user); Actions.home({type: ActionConst.RESET}) })
        .catch(err => this.setState({error: 'Authentication Failed', loading: false}));
    }

    render() {
        const { container } = styles;
        console.log('yoo')
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={container}>
                <Icon name="menu" color="rgba(255,0,0,.9)" />
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="email@mail.com"
                            underlineColorAndroid="#46A4DA"
                            keyboardType="email-address"
                            onChangeText={txt => this.setState({email: txt})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Password"
                            placeholder="password"
                            underlineColorAndroid="#46A4DA"
                            onChangeText={txt => this.setState({pass: txt})}
                            secureTextEntry
                        />
                    </CardSection>
                    { this.renderError() }
                    { this.renderButton() }
                </Card>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    errorStye: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 18,
        margin: 10
    },

    container: {
        flex: 1,
        paddingTop: 60
    }
};

export default connect(null, actions)(LoginForm);