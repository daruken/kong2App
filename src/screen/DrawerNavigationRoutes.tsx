import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './home/HomeScreen';
import SettingsScreen from './settings/SettingsScreen';
import MenuScreen from './menu/MenuScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from './search/SearchScreen';
import NotificationScreen from './notification/NotificationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: 'Category',
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigatorRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavi" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default DrawerNavigatorRoutes;
