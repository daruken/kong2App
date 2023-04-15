import * as React from 'react'
import {createRef, useState} from 'react'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import * as common from '../component/Common'

function SignUpScreen({navigation}: any) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errortext, setErrortext] = useState('')

  const passwordInputRef = createRef()

  const signUp = async () => {
    setErrortext('')

    if (!email) {
      Alert.alert('E-Mail 주소를 입력하시기 바랍니다.')
      return
    }

    if (!username) {
      Alert.alert('ID를 입력하시기 바랍니다.')
      return
    }
    if (!password) {
      Alert.alert('비밀번호를 입력하시기 바랍니다.')
      return
    }
    if (!confirmPassword) {
      Alert.alert('확인 비밀번호를 입력하시기 바랍니다.')
      return
    }

    if (password !== confirmPassword) {
      setErrortext('사용자 ID 또는 비밀번호가 일치하지 않습니다.')
      return
    }

    try {
      console.log('username:' + username)
      console.log('password:' + password)
      console.log('email:' + email)

      const response = await fetch(
        common.getAPIHost() + '/api/v1/members/sign-up',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            username: username,
            password: password,
          }),
        },
      )

      navigation.replace('SignInScreen')
    } catch (e) {
      console.log('Failed to sign-in. error: ' + e)
    }
  }

  return (
    <View style={styles.mainBody}>
      <KeyboardAvoidingView enabled>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={Email => setEmail(Email)}
            placeholder="E-Mail address"
            placeholderTextColor="#d8d8d8"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef.current}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={Username => setUsername(Username)}
            placeholder="Username"
            placeholderTextColor="#d8d8d8"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef.current}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={Password => setPassword(Password)}
            placeholder="Password"
            placeholderTextColor="#d8d8d8"
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={ConfirmPassword =>
              setConfirmPassword(ConfirmPassword)
            }
            placeholder="ConfirmPassword"
            placeholderTextColor="#d8d8d8"
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}> {errortext} </Text>
        ) : null}
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={signUp}>
          <Text style={styles.buttonTextStyle}>SIGN UP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#04B4AE',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#f2f2f2',
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
    color: '#000000',
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
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
})
