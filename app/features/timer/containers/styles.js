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
    marginHorizontal: metrics.scale(20),
  },
  timerContainer: {
    marginTop: metrics.verticalScale(50),
    alignItems: 'center',
    marginBottom: metrics.verticalScale(8)
  },
  timerText: {
    marginTop: metrics.verticalScale(50),
    fontSize: 24,
    fontWeight: 'bold',
    color: AppStyles.color.COLOR_THEME_TEXT_ONE
  },
  startEndBellText: {
    marginTop: metrics.verticalScale(30),
    fontSize: 16,
    color: AppStyles.color.COLOR_THEME_TEXT_TWO
  },
  flexWrapViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: metrics.verticalScale(15)
  },
  wrapButtonStyle: {
    marginRight: metrics.scale(10),
    borderColor: AppStyles.color.COLOR_THEME_TEXT_TWO,
    marginBottom: metrics.verticalScale(10),
    borderRadius: metrics.scale(5)
  },
  playButtonContainer: {
    marginVertical: metrics.verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  playImageButtonContainer: {
    backgroundColor: AppStyles.color.COLOR_THEME_ORANGE,
  },
  adjustVolumeButton: {
    marginTop: metrics.verticalScale(15),
    padding: metrics.scale(6),
    borderRadius: metrics.scale(6),
    marginHorizontal: metrics.scale(15),
    marginBottom: metrics.verticalScale(15)
  },
});

export default styles;
