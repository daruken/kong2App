import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/home/Home';
import Notification from './src/pages/notification/Notification';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './src/pages/search/Search';
import Settings from './src/pages/settings/Settings';
import Menu from './src/pages/menu/Menu';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Category',
          tabBarIcon: ({ color, size }) => (
            <Icon name='menu' color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name='search' color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          )
        }} />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <Icon name='notifications' color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name='settings' color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
