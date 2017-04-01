import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

const MyButton2 = props => {
    const { text, children, onPress, onLongPress, style } = props;
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableNativeFeedback 
            onPress={ onPress } 
            onLongPress={onLongPress}
            delayPressIn={0}
            background={ TouchableNativeFeedback.Ripple('#C2EDF6') }
            { ...props } 
        >
            <View style = {buttonStyle}>
                <Text style={ textStyle }> { text } </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = {
    buttonStyle: {
        height: 50,
        backgroundColor: '#37A9E3',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7
    },

    textStyle: {
        color: 'white',
        fontSize: 18
    }
};

export { MyButton2 };