import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyButton = props => {
    const { text, children, onPress, style } = props;
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={ onPress } style={ buttonStyle } { ...props } >
            { text ? <Text style={ textStyle }> { text } </Text> :  props.children  }
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        height: 50,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#4CB7EE',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7
    },

    textStyle: {
        color: '#4CB7EE',
        fontSize: 18
    }
};

export { MyButton };