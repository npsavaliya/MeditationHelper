import { StyleSheet } from "react-native";
import metrics from "../../config/metrics";
import AppStyles from "../../config/styles";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // width: '100%',
        width: metrics.screenWidth,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,
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
    sliderItemView: {
        flexDirection: 'row',
        marginVertical: metrics.verticalScale(15),
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    iconTextContentStyle: {
      flexDirection: 'column',
    //   width: metrics.scale(50)
    },
    iconTextStyle: {
      width: metrics.scale(150),
    //   backgroundColor: AppStyles.color.COLOR_GREEN
    },
    submitButton: {
        marginTop: metrics.verticalScale(15),
        width: '80%',
        padding: metrics.scale(6),
        borderRadius: metrics.scale(6),
    },
});

export default styles;
