/*
 *  App is where when the app first starts, it will include all the app starts
 *  logics and wrap everything inside this view
 */

import React from 'react';

import { View } from 'react-native';

class AppView extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired
    };
    render() {
        return (
            <View>
                {this.props.children}
            </View>
        );
    }
}

module.exports = AppView;
