import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from '../features/login/containers';
import Home from '../features/home/containers';
import Timer from '../features/timer/containers';
import ExerciseMeditating from '../features/exerciseMeditating/containers';
import AppStyles from '../config/styles';
import Volume from '../features/volumeAdjust/containers';
import MeditateLast from '../features/meditateLast/containers';

const Stack = createStackNavigator();

const screenOptions = {
  title: 'My home',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App() {
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Timer" component={Timer} options={{...screenOptions, title: 'Timer'}} />
            <Stack.Screen name="ExerciseMeditating" component={ExerciseMeditating} options={{...screenOptions, title: 'Exercise Meditating'}} />
            <Stack.Screen name="Volume" component={Volume} options={{...screenOptions, title: 'Volume'}} />
            <Stack.Screen name="MeditateLast" component={MeditateLast} options={{...screenOptions, title: 'Meditate Last'}} />
          </>
        ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                headerStyle: { backgroundColor: AppStyles.color.COLOR_THEME_BACKGROUND }
              }}
            />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
