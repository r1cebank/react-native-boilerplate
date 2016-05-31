import React from 'react';

import {
    View,
    TouchableOpacity,
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Styles from './resources/style';

class FacebookTabBar extends React.Component {
    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        scrollValue: React.PropTypes.object,
        style: React.PropTypes.object,
        containerWidth: React.PropTypes.number
    };

    componentDidMount() {
        this.setAnimationValue({ value: this.props.activeTab });
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    }

    setAnimationValue = ({ value }) => {
        this.tabIcons.forEach((icon, i) => {
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress)
                }
            });
        });
    }

    tabIcons = [];

    // color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 59 + (204 - 59) * progress;
        const green = 89 + (204 - 89) * progress;
        const blue = 152 + (204 - 152) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    render() {
        const tabWidth = this.props.containerWidth / this.props.tabs.length;
        const left = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, tabWidth]
        });

        return (
                <View>
                <View style={[Styles.tabs, this.props.style]}>
                {this.props.tabs.map((tab, i) =>
                        <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={Styles.tab}>
                            <Icon
                              name={tab}
                              size={30}
                              color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
                              ref={(icon) => { this.tabIcons[i] = icon; }}
                            />
                        </TouchableOpacity>
                )}
                </View>
                <Animated.View style={[Styles.tabUnderlineStyle, { width: tabWidth }, { left }]} />
                </View>
            );
    }
}


module.exports = FacebookTabBar;
