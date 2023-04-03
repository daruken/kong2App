import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/home/Home';
import Notification from './src/pages/notification/Notification';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './src/pages/search/Search';
import Settings from './src/pages/settings/Settings';
import Menu from './src/pages/menu/Menu';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './src/pages/login/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// @ts-ignore
const AuthContext = React.createContext();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Category',
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
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

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: {type: string; token: any | undefined | null}) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignOut: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('jwt');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // 여기서 아이디와 비밀번호 서버로 보내고 토큰 받아옴
        let userToken = 'temp';

        try {
          userToken = 'dummy-auth-token';
        } catch (e) {
          // 실패 시 에러 처리
        }
        // 받아온 토큰 저장
        try {
          await AsyncStorage.setItem('jwt', userToken);
        } catch (e) {
          // 토큰 저장 오류 처리
        }

        dispatch({type: 'SIGN_IN', token: userToken});
      },
      signOut: () => dispatch({type: 'SIGN_OUT', token: null}),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      signUp: async data => {
        let userToken = 'temp';
        // 서버에 회원가입 데이터 보내고 토큰 받아오기
        try {
          userToken = 'dummy-auth-token';
        } catch (e) {
          // 실패 시 에러 처리
        }
        // 받아온 토큰 저장
        try {
          await AsyncStorage.setItem('@storage_Key', userToken);
        } catch (e) {
          // 토큰 저장 오류 처리
        }

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            <Stack.Screen name="SignIn" component={SignIn} />
          ) : (
            <Stack.Screen name="TabNavi" component={MyTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
