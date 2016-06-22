import React from 'react';
import { View, Image } from 'react-native';
// import { connect } from 'react-redux';

import Styles from './resources/styles';
import { Components, Assets, Utils, Colors } from '../../global/globalIncludes';

const { Text } = Components.Text;
const formatTime = Utils.formatTime;
const formatDuration = Utils.formatDuration;

class SessionCell extends React.Component {
    static propTypes = {
        showTick: React.PropTypes.bool,
        session: React.PropTypes.object,
        showStartEndTime: React.PropTypes.bool,
        style: View.propTypes.style,
        onPress: React.PropTypes.func
    };

    render() {
        const session = this.props.session;
        let tick;
        if (this.props.showTick) {
            tick = <Image style={Styles.added} source={Assets.AddedCell} />;
        }
        let time;
        if (this.props.showStartEndTime) {
            time = `${formatTime(session.startTime)} - ${formatTime(session.endTime)}`;
        } else {
            time = formatDuration(session.startTime, session.endTime);
        }
        const location = session.location && session.location.toUpperCase();
        const locationColor = Colors.colorForKey(location);
        let cell = (
            <View style={[Styles.cell, this.props.style]}>
                <View style={Styles.titleSection}>
                    <Text numberOfLines={2} style={Styles.titleText}>
                        {session.title}
                    </Text>
                </View>
                <Text numberOfLines={1} style={Styles.duration}>
                    <Text style={[Styles.locationText, { color: locationColor }]}>
                        {location}
                    </Text>
                    {location && ' - '}
                    {time}
                </Text>
                {tick}
            </View>
        );

        if (this.props.onPress) {
            cell = (
                <Components.Touchable onPress={this.props.onPress}>
                {cell}
                </Components.Touchable>
            );
        }

        return cell;
    }
}

// function select(store, props) {
//     return {
//         showTick: !!store.schedule[props.session.id]
//     };
// }

// module.exports = connect(select)(F8SessionCell);

module.exports = SessionCell;
