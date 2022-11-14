import Alert from '@base-components/Alert';
import Loading from '@base-components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookHistoryDetail from '@screens/bookHistory/BookHistoryDetail';
import BookTourScreen from '@screens/bookTour/BookTourScreen';
import LoginScreen from '@screens/login/LoginScreen';
import SignInScreen from '@screens/login/signin/SignInScreen';
import SignUpScreen from '@screens/login/signup/SignUpScreen';
import SuccessScreen from '@screens/login/success/SuccessScreen';
import SplashScreen from '@screens/splash/SplashScreen';
import TourScreen from '@screens/tour/TourScreen';
import UserInfo from '@screens/userInfo/UserInfoScreen';
import { StatusBar } from 'react-native';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Group
          screenOptions={{
            header: () => {
              return <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>;
            },
          }}
        >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="TourScreen" component={TourScreen} />
        <Stack.Screen name="BookTourScreen" component={BookTourScreen} />
        <Stack.Screen name="BookHistoryDetail" component={BookHistoryDetail} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
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
