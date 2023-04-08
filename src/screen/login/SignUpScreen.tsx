import * as React from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function SignUpScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const signIn = async (username: string, password: string) => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/v1/members/sign-in',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: username,
            password: password,
          }),
        },
      );

      const responseJson = await response.json();
      await AsyncStorage.setItem('jwt', responseJson.token);
    } catch (e) {
      console.log('Failed to sign-in. error: ' + e);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        style={styles.input}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn(username, password)} />
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
