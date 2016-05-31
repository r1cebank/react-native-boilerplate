import { View, Text } from 'react-native';
import React from 'react';

class WarningView extends React.Component {
    static propTypes = {
        warningText: React.PropTypes.string.isRequired
    };
    render() {
        return (
            <View>
                <Text>{this.props.warningText}</Text>
            </View>
        );
    }
}

module.exports = WarningView;
