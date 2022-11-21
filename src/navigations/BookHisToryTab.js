import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookHistoryItem from '@screens/bookHistory/BookHistoryItem';

const Tab = createMaterialTopTabNavigator();

const BookHisToryTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='BookHistoryTodo'
    >
      <Tab.Screen
        options={{
          title: 'Đã đặt',
        }}
        name="BookHistoryTodo"
        component={BookHistoryItem}
        initialParams={{isCanceled: false}}
      />
      <Tab.Screen
        options={{
          title: 'Đã hủy',
        }}
        name="BookHistoryCancel" 
        component={BookHistoryItem}
        initialParams={{isCanceled: true}}
      />
    </Tab.Navigator>
  );
}

export default BookHisToryTab