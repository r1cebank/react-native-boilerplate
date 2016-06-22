import { Utils } from '../../../global/globalIncludes';

const styles = Utils.f8StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        ios: {
            paddingBottom: 6,
            justifyContent: 'center',
            alignItems: 'center'
        },
        android: {
            paddingLeft: 60
        }
    },
    scrollview: {
    }
});

export default styles;
