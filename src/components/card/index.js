import { Text, View } from 'react-native';
import React from 'react';

import Styles from './resources/styles';

class Card extends React.Component {
    render() {
        return (
            <View style={Styles.card}>
                <Text>Other nav</Text>
            </View>
        );
    }
}

module.exports = Card;
