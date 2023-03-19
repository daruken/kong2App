import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/home/Home';
import Test from './src/pages/test/Test';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: true
      }}
    >
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
        name="Test"
        component={Test}
        options={{
          title: 'Test',
          tabBarIcon: ({ color, size }) => (
            <Icon name='notifications' color={color} size={size} />
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
