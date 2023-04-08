import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import HomeScreen from './home/HomeScreen';
import SettingsScreen from './settings/SettingsScreen';
import CustomSidebarMenu from './CustomSidbarMenu';
import MenuScreen from './menu/MenuScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from './search/SearchScreen';
import NotificationScreen from './notification/NotificationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// @ts-ignore
const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

// @ts-ignore
const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: 'Category',
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" color={color} size={size} />
          ),
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
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
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
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigatorRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavi" component={MyTabs} />
    </Stack.Navigator>
    // <Drawer.Navigator
    //   screenOptions={{headerShown: false}}
    //   drawerContent={CustomSidebarMenu}>
    //   <Drawer.Screen
    //     name="homeScreenStack"
    //     options={{drawerLabel: 'HomeScreen Screen'}}
    //     component={homeScreenStack}
    //   />
    //   <Drawer.Screen
    //     name="settingScreenStack"
    //     options={{drawerLabel: 'Setting Screen'}}
    //     component={settingScreenStack}
    //   />
    // </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
