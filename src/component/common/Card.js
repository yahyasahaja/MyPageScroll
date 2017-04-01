import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { cardStyle } = styles;

    return (
        <View style = { cardStyle } >
            {props.children}
        </View>
    );
};

const styles = {
    cardStyle: {
        padding: 10,
        borderRadius: 5,
        elevation: 1.5,
        borderWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, heighht: 2},
        shadowOpacity: .1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };