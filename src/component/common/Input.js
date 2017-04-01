import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText, secureTextEntry, underlineColorAndroid, keyboardType }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style = {containerStyle} >
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                style={inputStyle}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                underlineColorAndroid={underlineColorAndroid}
                placeholderTextColor="#D5D5D5"
                keyboardType={keyboardType}
                blurOnSubmit
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#747474',
        fontSize: 18,
        lineHeight: 23,
    },

    labelStyle: {
        color: '#000',
        fontSize: 12,
        marginLeft: 5,
    },

    containerStyle: {
        
    }
};

export { Input };