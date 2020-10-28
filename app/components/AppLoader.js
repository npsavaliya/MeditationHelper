import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styles from './Styles/AppLoaderStyle';

export function AppLoader(props) {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size={props.size ?? 'small'}/>
        </View>
    )
}