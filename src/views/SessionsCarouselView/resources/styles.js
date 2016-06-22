import { Utils } from '../../../global/globalIncludes';

const styles = Utils.f8StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        android: {
            backgroundColor: '#5597B8'
        }
    },
    headerContent: {
        android: {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
        ios: {
            height: 65,
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    title: {
        color: 'white',
        fontSize: 12,
        ios: {
            textAlign: 'center'
        }
    },
    day: {
        ios: {
            fontWeight: 'bold'
        },
        android: {
            fontSize: 9
        }
    },
    time: {
        android: {
            fontWeight: 'bold',
            fontSize: 17
        }
    },
    card: {
        ios: {
            borderRadius: 2,
            marginHorizontal: 3
        }
    }
});

export default styles;
