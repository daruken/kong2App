import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import * as common from '../component/Common'

// @ts-ignore
const MenuScreen = ({navigation}) => {
  const onClickHandler = async () => {
    const response = await fetch(
      common.getAPIHost() + '/api/v1/members/sign-out',
      {
        method: 'POST',
      },
    )

    if (response.status === 200) {
      await AsyncStorage.removeItem('jwt')
      navigation.replace('SplashScreen')
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Menu ~</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={onClickHandler}>
          <Text style={styles.buttonTextStyle}>로그아웃</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#04B4AE',
    borderWidth: 0,
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#ffffff',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
})
