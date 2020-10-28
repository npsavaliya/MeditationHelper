import React, { useState, useLayoutEffect } from 'react';
import { View, SafeAreaView, Keyboard } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../../../components/AppLoader';
import metrics from '../../../config/metrics';
import AppStyles from '../../../config/styles';
import { soundsData } from '../../../utils/strings';
import * as volumeActions from '../../volumeAdjust/actions';
import * as selectors from '../../volumeAdjust/selectors';
import styles from './styles';

export default function Volume({ navigation }) {
    const sounds = selectors.getSounds(useSelector);
    const getTimeInMin = selectors.getTimerTimeInMin(useSelector);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(volumeActions.setSounds(soundsData));
        },
        [],
    );

    const onSoundSelect = useCallback(
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
        [sounds],
    );

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
                        {sounds && sounds.map((e) => (
                            <Button
                                mode="outlined"
                                style={styles.wrapButtonStyle}
                                color={e.name === sound.name ? AppStyles.color.COLOR_THEME_ORANGE : AppStyles.color.COLOR_THEME_TEXT_TWO}
                                onPress={() => setSound(e)}>
                                {e.name}
                            </Button>
                        ))}
                    </View>
                    <View style={styles.playButtonContainer}>
                        <IconButton
                            icon="play"
                            color={AppStyles.color.COLOR_WHITE}
                            size={20}
                            style={styles.playImageButtonContainer}
                            onPress={() => navigation.navigate('ExerciseMeditating')}
                        />
                    </View>
                    <View style={styles.flexWrapViewStyle}>
                        {timeData.map((e) => (
                            <Button
                                mode="outlined"
                                style={styles.wrapButtonStyle}
                                color={e.name === sound.name ? AppStyles.color.COLOR_THEME_ORANGE : AppStyles.color.COLOR_THEME_TEXT_TWO}
                                onPress={() => setSound(e)}>
                                {e.name}
                            </Button>
                        ))}
                    </View>
                    <Button
                        mode="contained"
                        dark
                        uppercase={false}
                        style={styles.loginButton}
                        color={AppStyles.color.COLOR_THEME_ORANGE}
                        onPress={onLogin(username, password)}>
                        Login
          </Button>
                </View>
            </SafeAreaView>
            {loading && <AppLoader size="large" />}
        </>
    );
}
