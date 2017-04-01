import React from "react";
import { View, Text } from "react-native";

const Header = (props) => {
    const { titleStyle, descStyle, viewStyle } = styles;
    return (
        <View style={ viewStyle }> 
            <View style={ { width: 50, backgroundColor: '#25A6DC', height: 50, marginLeft: 10, borderRadius: 50 } }/>
            <View style={ { marginLeft: 10, maxWidth: 200, justifyContent: 'space-around' } }>
                <Text style={ titleStyle }>React Native Project</Text>
                <Text style={ descStyle }>Really good!</Text>
            </View>
        </View>

    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        padding: 8
    },

    titleStyle: {
        fontSize: 18
    },

    descStyle: {
        fontSize: 15
    }
};

export default Header;