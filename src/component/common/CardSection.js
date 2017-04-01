import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { cardStyle } = styles;

    return (
        <View style = { [cardStyle, props.style] } >
            {props.children}
        </View>
    );
};

const styles = {
    cardStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 10
    }
};

export { CardSection };