import React from 'react';
import { View, ScrollView } from 'react-native';

import Styles from './resources/styles';
import { Components } from '../../global/globalIncludes';

class F8SegmentedControl extends React.Component {
    static propTypes = {
        values: React.PropTypes.array,
        selectedIndex: React.PropTypes.number,
        selectionColor: React.PropTypes.string,
        style: View.propTypes.style,
        onChange: React.PropTypes.func
    };
    render() {
        const segments = this.props.values.map(
            (value, index) => (
                <Components.Segment
                    key={value}
                    value={value}
                    isSelected={index === this.props.selectedIndex}
                    selectionColor={this.props.selectionColor || 'white'}
                    onPress={() => this.props.onChange(index)}
                />
            )
        );
        return (
            <View style={[Styles.container, this.props.style]}>
                <ScrollView
                    style={Styles.scrollview}
                    ref="scrollview"
                    horizontal={true}
                    pagingEnabled={true}
                    scrollsToTop={false}
                    scrollEventThrottle={10}
                    automaticallyAdjustContentInsets={false}
                    directionalLockEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    {segments}
                </ScrollView>
            </View>
        );
    }
}

module.exports = F8SegmentedControl;
