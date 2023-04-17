import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignInScreen from './src/screen/login/SignInScreen'
import {NavigationContainer} from '@react-navigation/native'
import SignUpScreen from './src/screen/login/SignUpScreen'
import SplashScreen from './src/screen/SplashScreen'
import DrawerNavigationRoutes from './src/screen/DrawerNavigationRoutes'

const Stack = createStackNavigator()

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: '로그인',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: '회원가입',
          headerStyle: {
            backgroundColor: '#04B4AE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator which includer Login Signup will come once */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
