import { View, StyleSheet } from 'react-native';
import React from 'react';
import Spinner from 'react-native-spinkit';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d35400'
    }
});

class LoadingView extends React.Component {
    static propTypes = {
        loadingText: React.PropTypes.string
    };
    render() {
        return (
            <View style={styles.container}>
                <Spinner color="#FFFFFF" />
            </View>
        );
    }
}

module.exports = LoadingView;
