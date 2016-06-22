import React from 'react';
import { Text, View, Platform, Navigator } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

import Styles from './resources/styles';
import { Components, Assets, Utils } from '../../global/globalIncludes';

class SessionsCarusel extends React.Component {

    static propTypes = {
        allSessions: React.PropTypes.object,
        session: React.PropTypes.object,
        navigator: React.PropTypes.instanceOf(Navigator),
        maps: React.PropTypes.object,
        speakers: React.PropTypes.object
    };

    constructor(props) {
        super(props);

        const flatSessionsList = [];
        const contexts = [];
        let allSessions = this.props.allSessions;
        if (!allSessions) {
            const { session } = this.props;
            allSessions = {
                [Utils.formatTime(session.startTime)]: { [session.id]: session }
            };
        }

        // TODO: Add test
        for (const sectionID of Object.keys(allSessions)) {
            const sectionLength = Object.keys(allSessions[sectionID]).length;
            let rowIndex = 0;
            for (const sessionID of Object.keys(allSessions[sectionID])) {
                const session = allSessions[sectionID][sessionID];
                flatSessionsList.push(session);
                contexts.push({
                    rowIndex,
                    sectionLength,
                    sectionTitle: sectionID
                });
                rowIndex++;
            }
        }

        const selectedIndex = flatSessionsList.findIndex((s) => s.id === this.props.session.id);

        this.state = {
            day: Moment(new Date(this.props.session.startTime)).format('MMMM Do'),
            count: flatSessionsList.length,
            selectedIndex,
            flatSessionsList,
            contexts
        };
        this.dismiss = this.dismiss.bind(this);
        this.handleIndexChange = this.handleIndexChange.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.shareCurrentSession = this.shareCurrentSession.bind(this);
    }

    render() {
        const {
            rowIndex,
            sectionLength,
            sectionTitle
        } = this.state.contexts[this.state.selectedIndex];
        let rightItem;
        if (Platform.OS === 'android') {
            rightItem = {
                title: 'Share',
                icon: Assets.Share,
                onPress: this.shareCurrentSession
            };
        }
        return (
            <View style={Styles.container}>
                <Components.Header
                    style={Styles.header}
                    leftItem={{
                        layout: 'icon',
                        title: 'Close',
                        icon: (Platform.OS === 'ios') ? Assets.XWhite : Assets.BackWhite,
                        onPress: this.dismiss
                    }}
                    rightItem={rightItem}>
                    <View style={Styles.headerContent}>
                        <Text style={Styles.title}>
                            <Text style={Styles.day}>{this.state.day}</Text>
                                {'\n'}
                            <Text style={Styles.time}>{sectionTitle}</Text>
                        </Text>
                        <Components.PageControl
                            count={sectionLength}
                            selectedIndex={rowIndex}
                        />
                    </View>
                    </Components.Header>
                <Components.Carousel
                    count={this.state.count}
                    selectedIndex={this.state.selectedIndex}
                    onSelectedIndexChange={this.handleIndexChange}
                    renderCard={this.renderCard}
                />
            </View>
        );
    }

    renderCard(index) {
        return (
            <Components.SessionDetails
                style={Styles.card}
                key={index}
                navigator={this.props.navigator}
                session={this.state.flatSessionsList[index]}
                maps={this.props.maps}
                speakers={this.props.speakers}
                onShare={this.shareCurrentSession}
            />
        );
    }

    shareCurrentSession() {
        // const session = this.state.flatSessionsList[this.state.selectedIndex];
        // this.props.dispatch(shareSession(session));
    }

    componentDidMount() {
        // this.track(this.state.selectedIndex);
        // this.props.dispatch(loadFriendsSchedules());
    }

    dismiss() {
        this.props.navigator.pop();
    }

    handleIndexChange(selectedIndex) {
        // this.track(selectedIndex);
        this.setState({ selectedIndex });
    }

}

function select(store) {
    return {
        maps: store.data.maps,
        speakers: store.data.speakers
    };
}

module.exports = connect(select)(SessionsCarusel);
