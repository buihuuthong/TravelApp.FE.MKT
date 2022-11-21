import ImageLocal from '@base-components/ImageLocal';
import COLOR from '@constants/color';
import FONT_SIZE from '@constants/fontSize';
import IMAGE from '@constants/image';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '@screens/account/AccountScreen';
import BookHistoryScreen from '@screens/bookHistory/BookHistoryScreen';
import BookmarkScreen from '@screens/bookmark/BookmarkScreen';
import HomeScreen from '@screens/home/HomeScreen';
import NotificationScreen from '@screens/notification/NotificationScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLOR.blue,
          tabBarInactiveTintColor: COLOR.text,
          tabBarLabelStyle: {
            fontSize: FONT_SIZE.sm,
            paddingVertical: 5
          },
          tabBarIconStyle: {
            marginTop: 4,
          },
          tabBarStyle: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            shadowColor: COLOR.text,
            shadowOpacity: 0.1,
            elevation: 5,
            borderTopWidth: 0,
            height: 60,
            paddingVertical: 10
          },
          tabBarShowLabel: true,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="HomeScreen"
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <ImageLocal color={color} image={IMAGE.home} />,
            title: 'Trang chủ',
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <ImageLocal color={color} image={IMAGE.bookmark} />,
            title: 'Đã Lưu',
          }}
          name="BookmarkScreen"
          component={BookmarkScreen}
        />
        {/* <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <ImageLocal color={color} image={IMAGE.notification} />,
            title: 'Thông báo',
          }}
          name="NotificationScreen"
          component={NotificationScreen}
        /> */}
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <ImageLocal color={color} image={IMAGE.history} />,
            title: 'Đã đặt',
          }}
          name="BookHistoryScreen"
          component={BookHistoryScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <ImageLocal color={color} image={IMAGE.account} />,
            title: 'Tài khoản',
          }}
          name="AccountScreen"
          component={AccountScreen}
        />
      </Tab.Navigator>
    );
  };
  
  export default MainTab;