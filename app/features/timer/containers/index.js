import React from 'react';
import { View, SafeAreaView, Keyboard } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import CustomTimePickerModal from '../components/CustomTimePickerModal';
import VolumeDialog from '../../../components/VolumeDialog';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../../../components/AppLoader';
import metrics from '../../../config/metrics';
import AppStyles from '../../../config/styles';
import { soundsData, timeData } from '../../../utils/strings';
import * as volumeActions from '../../volumeAdjust/actions';
import * as selectors from '../../volumeAdjust/selectors';
import styles from './styles';

export default function Timer({ navigation }) {
  const sounds = selectors.getSounds(useSelector);
  const getTimeInMin = selectors.getTimerTimeInMin(useSelector);
  const [timeList, setTimeList] = React.useState(null);
  const [hourTimeSelect, setHourTimeSelect] = React.useState(0);
  const [minTimeSelect, setMinTimeSelect] = React.useState(0);
  const [showTimePicker, setShowTimePicker] = React.useState(false)
  const [showVolumeDialog, setShowVolumeDialog] = React.useState(false)
  const dispatch = useDispatch();

  React.useEffect(
    () => {
      setTimeList(timeData);
      dispatch(volumeActions.setSounds(soundsData));
      const t = timeData.filter((e) => e.isSelected);
      dispatch(volumeActions.setTimerInMin(t[0].timeInMin));
    },
    [],
  );

  const onSelectSound = React.useCallback(
    (sound) => {
      let newSounds = sounds.map((e) => {
        if (sound.name === e.name) {
          return { ...sound, isSelected: true }
        } else {
          return { ...e, isSelected: false }
        }
      })
      dispatch(volumeActions.setSounds(newSounds));
    },
    [sounds, dispatch],
  );

  const onSelectTime = React.useCallback(
    (time) => {
      if (time.id === timeList[timeList.length - 1]?.id) {
        setShowTimePicker(true);
      }
      let newTimeList = timeList.map((e) => {
        if (time.id === e.id) {
          dispatch(volumeActions.setTimerInMin(time.timeInMin));
          return { ...time, isSelected: true }
        } else {
          return { ...e, isSelected: false }
        }
      })
      setTimeList(newTimeList);
    },
    [timeList, dispatch, setTimeList, setShowTimePicker],
  );

  const onChangeSoundVolume = React.useCallback(
    (value, sound) => {
      let newSounds = sounds.map((e) => {
        if (sound.name === e.name) {
          return { ...sound, volume: value };
        } else {
          return e;
        }
      })
      dispatch(volumeActions.setSounds(newSounds));
    },
    [sounds, dispatch],
  );

  const onPressPlay = React.useCallback(
    () => {
      let timeInMin = 0;
      timeList.forEach((e) => {
        if (e.isSelected) {
          timeInMin = e.timeInMin
        }
      });
      dispatch(volumeActions.setTimerInMin(timeInMin));
      navigation.navigate('ExerciseMeditating');
    },
    [navigation, timeList, dispatch],
  );

  const onChangeTime = React.useCallback(
    (hours, minutes) => {
      setHourTimeSelect(hours)
      setMinTimeSelect(minutes)
    },
    [setHourTimeSelect, setMinTimeSelect]
  );

  React.useEffect(
    () => {
      let newTimeInMin = hourTimeSelect * 60;
      newTimeInMin = newTimeInMin + minTimeSelect;
      if (Array.isArray(timeList)) {
        const newSelectedTime = { ...timeList[timeList.length - 1], name: `${newTimeInMin}min`, timeInMin: newTimeInMin, isSelected: true }
        onSelectTime(newSelectedTime);
      }
    },
    [hourTimeSelect, minTimeSelect],
  );

  // React.useEffect(
  //   () => {
  //     if(showVolumeDialog){
  //       setShowTimePicker(false)
  //     }
  //     if(setShowTimePicker){
  //       setShowVolumeDialog(false)
  //     }
  //   },
  //   [showTimePicker, showVolumeDialog],
  // );


  //const [password, setPassword] = useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          {/* <View style={styles.welcomeTextContainer}> */}
          <Text style={styles.timerText}>Timer</Text>
          <Text style={styles.startEndBellText}>Start and ending bell</Text>
          {/* </View> */}

          <View style={styles.flexWrapViewStyle}>
            {sounds && sounds.map((e, idx) => (
              <Button
                key={String(idx)}
                mode="outlined"
                style={[styles.wrapButtonStyle, { borderColor: e.isSelected ? AppStyles.color.COLOR_THEME_ORANGE : AppStyles.color.COLOR_THEME_TEXT_TWO }]}
                compact
                color={e.isSelected ? AppStyles.color.COLOR_THEME_ORANGE : AppStyles.color.COLOR_THEME_TEXT_TWO}
                onPress={() => onSelectSound(e)}>
                {e.name}
              </Button>
            ))}
          </View>
          <View style={styles.playButtonContainer}>
            <IconButton
              icon="play"
              color={AppStyles.color.COLOR_WHITE}
              size={metrics.scale(40)}
              style={styles.playImageButtonContainer}
              onPress={() => navigation.navigate('ExerciseMeditating')}
            />
          </View>
          <View style={styles.flexWrapViewStyle}>
            {Array.isArray(timeList) && timeList.map((e, idx) => (
              <Button
                key={e.id}
                mode="outlined"
                style={[styles.wrapButtonStyle, { borderColor: e.isSelected ? AppStyles.color.COLOR_THEME_ORANGE : AppStyles.color.COLOR_THEME_TEXT_TWO }]}
                compact
                color={e.isSelected ? AppStyles.color.COLOR_THEME_ORANGE : AppStyles.color.COLOR_THEME_TEXT_TWO}
                onPress={() => onSelectTime(e)}>
                {e.name}
              </Button>
            ))}
          </View>
        </View>
        <Button
          mode="contained"
          dark
          uppercase={false}
          style={styles.adjustVolumeButton}
          color={AppStyles.color.COLOR_THEME_ORANGE}
          onPress={() => setShowVolumeDialog(true)}>
          Adjust Volume
                     </Button>
      </SafeAreaView>
      {showTimePicker && (
        <CustomTimePickerModal
          selectedHours={hourTimeSelect}
          selectedMinutes={minTimeSelect}
          onChange={onChangeTime}
          visible={showTimePicker}
          onRequestClose={setShowTimePicker}
        />
      )}
      {showVolumeDialog && (
        <VolumeDialog
          sounds={sounds}
          onValueChange={onChangeSoundVolume}
          visible={showVolumeDialog}
          onRequestClose={setShowVolumeDialog}
        />
      )}
    </>
  );
}
