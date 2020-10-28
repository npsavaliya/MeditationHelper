import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    View,
} from "react-native";
import { Button } from 'react-native-paper';
import TimePicker from 'react-native-simple-time-picker';
import metrics from "../../../config/metrics";
import AppStyles from "../../../config/styles";


const CustomTimePickerModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => props.onRequestClose(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TimePicker
                        selectedHours={props.selectedHours}
                        selectedMinutes={props.selectedHours}
                        onChange={props.onChange}
                    />
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

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    submitButton: {
        marginTop: metrics.verticalScale(15),
        width: '100%',
        padding: metrics.scale(6),
        borderRadius: metrics.scale(6),
        marginHorizontal: metrics.scale(15)
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});

export default CustomTimePickerModal;
