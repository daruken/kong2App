import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

// @ts-ignore
const MenuScreen = ({navigation}) => {
  const onClickHandler = async () => {
    let userToken = await AsyncStorage.getItem('jwt');

    fetch('http://localhost:8080/api/v1/members/sign-out', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + userToken,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        AsyncStorage.removeItem('jwt');
        //navigation.replace('DrawerNavigationRoutes');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ScrollView>
      <Text>Menu ~</Text>
      <Button title="Sign Out" onPress={() => onClickHandler} />
    </ScrollView>
  );
};

export default MenuScreen;
