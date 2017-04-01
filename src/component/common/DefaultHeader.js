import React from "react";
import { View, Text } from "react-native";

const DefaultHeader = ({text}) => {
    const { titleStyle, viewStyle } = styles;
    return (
        <View style={ viewStyle }> 
            <Text style={ titleStyle }>{text}</Text>
        </View>

    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#E1E1E1',
        elevation: 2,
        padding: 8,
    },

    titleStyle: {
        marginTop: 18,
        fontSize: 18,
        textAlign: 'center',
    }
};

export { DefaultHeader };