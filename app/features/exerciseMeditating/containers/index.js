import React from 'react';
import { View, SafeAreaView, Keyboard, Platform } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import VolumeDialog from '../../../components/VolumeDialog';
var Sound = require('react-native-sound');
import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../../../components/AppLoader';
import metrics from '../../../config/metrics';
import AppStyles from '../../../config/styles';
import * as volumeActions from '../../volumeAdjust/actions';
import * as selectors from '../../volumeAdjust/selectors';
import styles from './styles';
let clearIntervalID = null;

var whoosh = null

export default function ExerciseMeditating({ navigation }) {
    const sounds = selectors.getSounds(useSelector);
    const getTimeInMin = selectors.getTimerTimeInMin(useSelector);
    const dispatch = useDispatch();
    const [sound, setSound] = React.useState(null);
    const [isPlay, setIsPlay] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [time, setTime] = React.useState(null)
    const [showVolumeDialog, setShowVolumeDialog] = React.useState(false)

    React.useEffect(
        () => {
            let s = null;
            sounds.forEach(e => {
                if(e.isSelected){
                    s = e;
                    setSound(e);     
                }
            });
            Sound.setCategory('Playback');
            setTime({min: getTimeInMin, sec: 0})
            whoosh = new Sound(s.sound, null, (error) => {
                if (error) {
                  console.log('failed to load the sound', error);
                  return;
                }
                // loaded successfully
                console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
              
                // Play the sound with an onEnd callback
                // whoosh.play((success) => {
                //   if (success) {
                //     console.log('successfully finished playing');
                //   } else {
                //     console.log('playback failed due to audio decoding errors');
                //   }
                // });
                whoosh.setNumberOfLoops(-1);
              });
            return () => {
                // dispatch(volumeActions.setTimerInMin(0))
                if(whoosh){
                    whoosh.release();
                }
            };
        },
        [],
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
          setSound({...sound, volume: value});
          if(whoosh){
            whoosh?.setVolume(value / 100);
          }
        },
        [sounds, dispatch],
      );



      React.useEffect(
        () => {
            if(isPlay){
                if(whoosh){
                    whoosh.play((success) => {
                      if (success) {
                        console.log('successfully finished playing');
                      } else {
                        console.log('playback failed due to audio decoding errors');
                      }
                    });
                }
                clearIntervalID = setInterval(() => {
                    setTime((value) => {
                        const min = value.sec === 0 ? value.min - 1 : value.min;
                        const sec = value.sec === 0 ? 59 : value.sec - 1;
                        return {min, sec}; 
                    })
                }, 1000)
            } else {
                whoosh.pause();
            }

            return () => {
                if(clearInterval){
                    clearInterval(clearIntervalID)
                }
            };
        },
        [isPlay],
    );

      React.useEffect(
        () => {
           if(time && time.min === 0 && time.sec === 0){
            whoosh.stop();
            if(clearIntervalID){
              clearInterval(clearIntervalID)
            }
             navigation.navigate('MeditateLast')
           }
        },
        [time],
    );

    return (
        <>
        <SafeAreaView style={styles.container}>
          <View style={styles.subContainer}>
            {/* <IconButton
                icon="close"
                color={AppStyles.color.COLOR_WHITE}
                size={metrics.scale(20)}
                style={styles.playImageButtonContainer}
                onPress={() => navigation.goBack()}
              /> */}
  
            <View style={styles.playButtonContainer}>
              <IconButton
                icon={isPlay ? 'pause': 'play'}
                color={AppStyles.color.COLOR_WHITE}
                size={metrics.scale(40)}
                style={styles.playImageButtonContainer}
                onPress={() => setIsPlay((value) => !value)}
              />
              {time && (<Text style={styles.timeText}>{`${time.min}:${time.sec}`}</Text>)}
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
        {showVolumeDialog && (
          <VolumeDialog
            sounds={sounds}
            onValueChange={onChangeSoundVolume}
            visible={showVolumeDialog}
            onRequestClose={setShowVolumeDialog}
          />
        )}
        {loading && <AppLoader size="large" />}
      </>
    );
}
