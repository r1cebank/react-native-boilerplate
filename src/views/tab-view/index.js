/*
 *  VabView is the view that use tab bar component to display each page
 */

import React from 'react';

import {
    View,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';


import ScrollableTabView from 'react-native-scrollable-tab-view';

// Include global
import { Views, Components, Defaults } from '../../global/global-includes';


import Styles from './resources/styles';

class TabView extends React.Component {
    static propTypes = {
        navigation: React.PropTypes.object
    };
    render() {
        return (
            <View style={Styles.container}>
            <ScrollableTabView
            initialPage={this.props.navigation.data.config.defaults.initialPage}
            renderTabBar={(() => {
                let TabBarComponent = Components[this.props.navigation.data.config.typeconfig.tabbar];
                // If the component is missing, fallback to default
                TabBarComponent = TabBarComponent || Defaults.blankView;
                return <TabBarComponent />;
            })}>
            {this.props.navigation.data.pages.map((navItem, index) =>
                <ScrollView tabLabel={navItem.label} key={index} style={Styles.tabView}>
                {(() => {
                    let ComponentView = Views[navItem.view];
                    // If the component is missing, fallback to default with message
                    if (!ComponentView) {
                        const warningText = `View ${navItem.view} not found`;
                        return <Defaults.warningView warningText={warningText} />;
                    }
                    return <ComponentView />;
                })()}
                </ScrollView>
            )}
            </ScrollableTabView>
            </View>
        );
    }
}

module.exports = connect((state) => ({
    navigation: state.appstate.navigation
}))(TabView);
