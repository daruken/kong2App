import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

// @ts-ignore
const MenuScreen = ({navigation}) => {
  const onClickHandler = async () => {
    const response = await fetch(
      'http://localhost:8080/api/v1/members/sign-out',
      {
        method: 'POST',
      },
    );

    if (response.status === 200) {
      await AsyncStorage.removeItem('jwt');
      navigation.replace('SplashScreen');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Menu ~</Text>
        <Button title="Sign Out" onPress={onClickHandler} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
