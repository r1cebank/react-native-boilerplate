import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)'
    },
    tabUnderlineStyle: {
        position: 'absolute',
        height: 3,
        backgroundColor: '#3b5998',
        bottom: 0
    }
});

export default styles;
