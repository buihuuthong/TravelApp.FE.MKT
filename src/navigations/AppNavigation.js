import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@screens/splash/SplashScreen';
import LoginScreen from '@screens/login/LoginScreen';
import SignInScreen from '@screens/login/signin/SignInScreen';
import SignUpScreen from '@screens/login/signup/SignUpScreen';
import SuccessScreen from '@screens/login/success/SuccessScreen';
import MainTab from './MainTab';
import Loading from '@base-components/Loading'
import Alert from '@base-components/Alert';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: 'containedTransparentModal',
            animation: 'fade',
            headerShown: false,
          }}
        >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Alert" component={Alert} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
