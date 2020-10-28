import { StyleSheet } from 'react-native';
import metrics from '../../../config/metrics';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.color.COLOR_THEME_BACKGROUND,
    },
    subContainer: {
        flex: 1,
        // marginHorizontal: metrics.scale(15),
    },
    playButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playImageButtonContainer: {
        backgroundColor: AppStyles.color.COLOR_THEME_ORANGE,
    },
    timeText: {
        marginTop: metrics.verticalScale(15)
    },
    adjustVolumeButton: {
        marginTop: metrics.verticalScale(15),
        padding: metrics.scale(6),
        borderRadius: metrics.scale(6),
        marginHorizontal: metrics.scale(15),
        marginBottom: metrics.scale(15)
    },
});

export default styles;
