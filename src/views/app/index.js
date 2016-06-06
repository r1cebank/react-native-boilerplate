/*
 *  App is where when the app first starts, it will include all the app starts
 *  logics and wrap everything inside this view
 */

import React from 'react';

import { StatusBar, View } from 'react-native';

import Styles from './resources/styles';

class AppView extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired
    };
    render() {
        return (
            <View style={Styles.container}>
                <StatusBar
                  translucent
                  backgroundColor="rgba(0, 0, 0, 0.2)"
                  barStyle="light-content"
                 />
                {this.props.children}
            </View>
        );
    }
}

module.exports = AppView;
