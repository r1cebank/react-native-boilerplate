/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Navigator } from 'react-native';
import { Views, Components, Utils } from '../../global/globalIncludes';

class ScheduleListView extends React.Component {
    static propTypes = {
        sessions: React.PropTypes.array,
        day: React.PropTypes.string,
        renderEmptyList: React.PropTypes.func,
        navigator: React.PropTypes.instanceOf(Navigator)
    };

    constructor(props) {
        super(props);
        this.state = {
            todaySessions: Utils.groupSessions(props.sessions)
        };

        this._innerRef = null;

        this.renderSectionHeader = this.renderSectionHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderEmptyList = this.renderEmptyList.bind(this);
        this.storeInnerRef = this.storeInnerRef.bind(this);
    }

    render() {
        return (
            <Views.PureListView
                ref={this.storeInnerRef}
                data={Utils.groupSessions(this.props.sessions)}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
                {...this.props}
                renderEmptyList={this.renderEmptyList}
            />
        );
    }

    renderSectionHeader(sectionData, sectionID) {
        return <Components.SessionSectionHeader title={sectionID} />;
    }

    renderRow(session, day) {
        return (
            <Components.SessionCell
                onPress={() => this.openSession(session, day)}
                session={session}
            />
        );
    }

    renderEmptyList() {
        const { renderEmptyList } = this.props;
        return renderEmptyList && renderEmptyList(this.props.day);
    }

    openSession(session, day) {
        this.props.navigator.push({
            day,
            session,
            allSessions: this.state.todaySessions
        });
    }

    storeInnerRef(ref) {
        this._innerRef = ref;
    }

    scrollTo(...args) {
        if (this._innerRef) {
            this._innerRef.scrollTo(...args);
        }
    }

    getScrollResponder() {
        return this._innerRef && this._innerRef.getScrollResponder();
    }
}

module.exports = ScheduleListView;
