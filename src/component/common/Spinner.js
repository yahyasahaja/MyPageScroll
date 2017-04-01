import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    const { containerStyle } = styles;

    return (
        <View style = {containerStyle} >
            <ActivityIndicator
                color="#37A9E3"
                size="large"
                { ...props }
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
};

export { Spinner };