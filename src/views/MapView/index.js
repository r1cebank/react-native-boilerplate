/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Image, InteractionManager, PixelRatio } from 'react-native';

import { Utils } from '../../global/globalIncludes';

import Styles from './resources/styles';

class MapView extends React.Component {
    _isMounted: boolean;
    props: {
        map: ?Map;
        style: any;
    };

    constructor() {
        super();
        this.state = { loaded: false };
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        InteractionManager.runAfterInteractions(() => {
            if (this._isMounted) {
                this.setState({ loaded: true });
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let image;
        if (this.state.loaded) {
            image = (
                <Image
                style={Styles.map}
                source={{ uri: Utils.getMapURL(this.props.map, PixelRatio.get()) }}
                />
            );
        }
        return (
            <View style={[Styles.container, this.props.style]}>
                {image}
            </View>
        );
    }
}

module.exports = MapView;
