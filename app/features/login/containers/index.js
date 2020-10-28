import React, { useState, useLayoutEffect } from 'react';
import { View, SafeAreaView, Keyboard } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../../../components/AppLoader';
import metrics from '../../../config/metrics';
import AppStyles from '../../../config/styles';
import * as loginActions from '../actions';
import * as selectors from '../selectors';
import styles from './styles';

export default function Login({ navigation }) {
  const loading = selectors.getLoadingState(useSelector);
  const isLoggedIn = selectors.getIsLoggedInState(useSelector);
  const dispatch = useDispatch();
  const onLogin = (userId, pass) => () => {
    Keyboard.dismiss();
    dispatch(loginActions.requestLogin(userId, pass))
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeHomeText}>Welcome home</Text>
            <Text style={styles.loginContinueText}>Login to continue</Text>
          </View>
          <TextInput
            mode="outlined"
            label="Username"
            autoCapitalize="none"
            value={username}
            theme={{ roundness: metrics.scale(6) }}
            style={styles.input}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            style={styles.input}
            caretHidden
            theme={{ roundness: metrics.scale(6) }}
            value={password}
            onChangeText={text => setPassword(text)}
          />
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
