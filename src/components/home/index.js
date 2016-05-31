import React, { Text, View } from 'react-native';


import Styles from './resources/styles';
import Strings from './resources/strings';

class Home extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>{Strings.hello}</Text>
            </View>
        );
    }
}

module.exports = Home;
