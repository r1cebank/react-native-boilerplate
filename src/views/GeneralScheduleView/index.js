import React from 'react';
import { Navigator, Platform } from 'react-native';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { Views, Components, Assets, Utils, Actions } from '../../global/globalIncludes';

// TODO: Pull filters out
const data = createSelector(
    (store) => store.data.agenda.data,
    (store) => store.filters,
    (sessions, selected) => {
        const filters = sessions.filters.filter((filter) => selected[filter.label]);
        let agenda = sessions.agenda;
        for (const filter of filters) {
            agenda = Utils.filterSessions(agenda, filter.query);
        }
        return {
            ...sessions,
            agenda
        };
    }
);

class GeneralScheduleView extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        agenda: React.PropTypes.object,
        day: React.PropTypes.number,
        navigator: React.PropTypes.instanceOf(Navigator),
        switchDay: React.PropTypes.func,
        selectedFilters: React.PropTypes.object,
        clearFilters: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.renderEmptyList = this.renderEmptyList.bind(this);
        this.openFilterScreen = this.openFilterScreen.bind(this);
        this.switchDay = this.switchDay.bind(this);
    }

    render() {
        const filterItem = {
            icon: Assets.Filter,
            title: 'Filter',
            onPress: this.openFilterScreen
        };

        const filterHeader = Object.keys(this.props.selectedFilters).length > 0
        ? <Components.FilterHeader
            selectedFilters={this.props.selectedFilters}
            onClearFilter={this.props.clearFilters} />
        : null;

        const content = (
            <Components.ListContainer
                title={this.props.title}
                selectedSegment={this.props.day}
                onSegmentChange={this.switchDay}
                backgroundImage={Assets.ScheduleBackground}
                backgroundColor="#5597B8"
                selectedSectionColor="#51CDDA"
                stickyHeader={filterHeader}
                rightItem={filterItem}>
                {this.props.agenda.days.map((day, index) =>
                    <Views.ScheduleListView
                        title={day.label}
                        day={day.label}
                        key={index}
                        sessions={Utils.filterSessions(this.props.agenda.agenda, day.query)}
                        renderEmptyList={this.renderEmptyList}
                        navigator={this.props.navigator}
                    />
                )}
            </Components.ListContainer>
        );

        return content;
    }

    renderEmptyList(day) {
        return (
            <Views.EmptyScheduleView
                title={`No sessions on ${day} match the filter`}
                text="Check the schedule for the other day or remove the filter."
            />
        );
    }

    openFilterScreen() {
        if (Platform.OS === 'ios') {
            this.props.navigator.push({ filter: 123 });
        } else {
            // this._drawer && this._drawer.openDrawer();
        }
    }

    switchDay(page) {
        this.props.switchDay(page);
    }
}

function select(store) {
    return {
        day: store.navigation.day,
        agenda: data(store),
        selectedFilters: store.filters
    };
}

function actions(dispatch) {
    return {
        switchDay: (day) => dispatch(Actions.Navigation.switchDay(day)),
        clearFilters: () => dispatch(Actions.Filter.clearFilters())
    };
}

module.exports = connect(select, actions)(GeneralScheduleView);
