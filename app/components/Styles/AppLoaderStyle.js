import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';
import AppStyles from '../../config/styles';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.COLOR_BLACK_TRANSP
  }
});

export default styles;
