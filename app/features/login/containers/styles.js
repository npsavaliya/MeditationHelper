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
  welcomeTextContainer: {
    marginTop: metrics.verticalScale(50),
    alignItems: 'center',
    marginBottom: metrics.verticalScale(8)
  },
  welcomeHomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: AppStyles.color.COLOR_THEME_TEXT_ONE
  },
  loginContinueText: {
    marginTop: metrics.verticalScale(15),
    fontSize: 18,
    color: AppStyles.color.COLOR_THEME_TEXT_TWO
  },
  input: {
    marginTop: metrics.verticalScale(8),
  },
  loginButton: {
    marginTop: metrics.verticalScale(15),
    padding: metrics.scale(6),
    borderRadius: metrics.scale(6)
  },
});

export default styles;
