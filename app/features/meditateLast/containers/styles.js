import { StyleSheet } from 'react-native';
import metrics from '../../../config/metrics';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.color.COLOR_THEME_BACKGROUND,
  },
  viewOne: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.COLOR_THEME_ORANGE,
    borderBottomLeftRadius: metrics.scale(30),
    borderBottomRightRadius: metrics.scale(30),
  },
  greatJobText: {
    color: AppStyles.color.COLOR_WHITE,
    fontSize: 18
  },
  timeText: {
    color: AppStyles.color.COLOR_WHITE,
    fontSize: 50,
    fontWeight: 'bold'
  },
  minMeditatedText: {
    color: AppStyles.color.COLOR_WHITE,
    fontSize: 14
  },
  viewTwo: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteText: {
    color: AppStyles.color.COLOR_THEME_TEXT_TWO,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: metrics.scale(30)
  },
  adjustVolumeButton: {
    padding: metrics.scale(6),
    borderRadius: metrics.scale(6),
    marginHorizontal: metrics.scale(15),
    marginBottom: metrics.verticalScale(15)
  },
});

export default styles;
