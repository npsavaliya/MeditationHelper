import React from "react";
import {
    Modal,
    View,
} from "react-native";
import { Button, Text, List } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import styles from './Styles/VolumeDialogStyle';
import AppStyles from "../config/styles";
import metrics from "../config/metrics";

const VolumeDialog = (props) => {
    return (
        <Modal
            animationType="slide"
            // transparent={true}
            presentationStyle="fullScreen"
            visible={props.visible}
            onRequestClose={() => props.onRequestClose(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Adjust Volume</Text>
                    {Array.isArray(props.sounds) && props.sounds.map((e) => e.name && (
                        <View key={e?.name} style={styles.sliderItemView}>
                            <Button
                            icon={e?.icon ?? 'blur_circular'}
                            contentStyle={styles.iconTextContentStyle}
                            style={styles.iconTextStyle}
                            color={e?.isSelected ? AppStyles.color.COLOR_THEME_TEXT_ONE: AppStyles.color.COLOR_DARK_SEPERATOR}
                            compact
                            mode="text">{e?.name}</Button>
                        <Slider
                        style={{width: metrics.scale(200), height: 40}}
                        minimumValue={0}
                        value={e.volume}
                        maximumValue={100}
                        onValueChange={(value) => props.onValueChange(value, e)}
                        disabled={!e?.isSelected}
                        thumbTintColor={e?.isSelected ? AppStyles.color.COLOR_THEME_TEXT_ONE: AppStyles.color.COLOR_DARK_SEPERATOR}
                        minimumTrackTintColor={e?.isSelected ? AppStyles.color.COLOR_THEME_TEXT_ONE: AppStyles.color.COLOR_DARK_SEPERATOR}
                        maximumTrackTintColor={e?.isSelected ? AppStyles.color.COLOR_THEME_TEXT_ONE: AppStyles.color.COLOR_DARK_SEPERATOR}
                      />
                      </View>
                    )
                    )}
                    <Button
                        mode="contained"
                        dark
                        uppercase={false}
                        style={styles.submitButton}
                        color={AppStyles.color.COLOR_THEME_ORANGE}
                        onPress={() => props.onRequestClose(false)}>
                        Ok
                     </Button>
                </View>
            </View>
        </Modal>
    );
};

export default VolumeDialog;
