import React from 'react';
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

export default function MeditateLast({ navigation }) {
    const sounds = selectors.getSounds(useSelector);
    const getTimeInMin = selectors.getTimerTimeInMin(useSelector);
    const dispatch = useDispatch();

    React.useEffect(
        () => {
            dispatch(volumeActions.setSounds(soundsData));
        },
        [],
    );

    const onSoundSelect = React.useCallback(
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
                <View style={styles.viewOne}>
                    <Text style={styles.greatJobText}>Great, job!</Text>
                    <Text style={styles.timeText}>{String(getTimeInMin)}</Text>
                    <Text style={styles.minMeditatedText}>minutes meditated</Text>
                </View>
                <View style={styles.viewTwo}>
                    <Text style={styles.quoteText}>"Surrender to what is. Let go of what was. Have faith in what will be." - Sonia Riccotti</Text>
                </View>
                <Button
                    mode="contained"
                    dark
                    uppercase={false}
                    style={styles.adjustVolumeButton}
                    color={AppStyles.color.COLOR_THEME_ORANGE}
                >
                    Next
                </Button>
            </SafeAreaView>
        </>
    );
}
