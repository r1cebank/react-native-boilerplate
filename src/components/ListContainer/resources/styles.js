import { Utils, Components } from '../../../global/globalIncludes';

const styles = Utils.f8StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerWrapper: {
        android: {
            elevation: 2,
            backgroundColor: 'transparent',
            // FIXME: elevation doesn't seem to work without setting border
            borderRightWidth: 1,
            marginRight: -1,
            borderRightColor: 'transparent'
        }
    },
    listView: {
        ios: {
            backgroundColor: 'transparent'
        },
        android: {
            backgroundColor: 'white'
        }
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    parallaxText: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        letterSpacing: -1
    },
    stickyHeader: {
        position: 'absolute',
        top: Components.Header.height,
        left: 0,
        right: 0
    }
});

export default styles;
