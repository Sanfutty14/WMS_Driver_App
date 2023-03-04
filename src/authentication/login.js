import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Logo from '../assets/svg/logo.svg';
import ShowPassword from '../assets/svg/ShowPassword.svg';
import HidePassword from '../assets/svg/HidePassword.svg';
import Login_bg_black from '../assets/svg/login_bg_black.svg';
import {globalStyles, wH, wW, normalize} from '../styles/globalStyle';
import {FONTS} from '../themes/textfonts';
import { apiCallPost } from '../StateManagement/apiCall';
import { postLogin, ReLogin } from '../StateManagement/loginData/actions';
import { useDispatch, useSelector } from 'react-redux';

import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [emailError, setemailError] = React.useState(true);
  const [passwordError, setPasswordError] = React.useState(true);
  const [submitDisable, setSubmitDisable] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(true);
  const LoginData = useSelector(state => state.loginReducer);

  const dispatch = useDispatch();

  const sendMail1 = () => {
    // setloading(true)
    
    dispatch(postLogin({ "email": emailValue, 'password': passwordValue }));
    console.log('login data :::: '+JSON.stringify(LoginData));
  //   apiCallPost({ "email": emailValue, 'password': passwordValue },'/mdriverLogin')
  //   .then(response => {
  //    // console.log(response);
  //     console.log('response :::::::::::: '+JSON.stringify(response.data.status));
  //     let responseData = response.data;
  //     if (response.status == 200) {
  //         setloading(false)
  //         if (response.data.status==="true") {
  //           navigation.navigate('DrawerPage');
  //             dispatch(ReLogin({ isLoggedIn: true }, responseData.response_json));
              
  //             //navigation.push('DrawerPage')
  //         }
  //         else {
  //             dispatch(ReLogin({ isLoggedIn: false }))
  //             setErrorMsg(response.data.error_json.error_message)

  //         }
  //     }

  // }).catch(err => {
  //     setloading(false)
  //     if (err.response.status == 401) {
  //         console.log(err.response.status)
  //     }
  //     if (err.response.status == 404) {
  //         console.log(err.response)
  //     }
  //     if (err.response.status == 500) {
  //         setErrorMsg(err)
  //     }
  // })

  

}
  const validateEmail = e => {
    // setemailError(null)
    setEmailValue(e);
    //setPasswordValue(e)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(e) === false) {
      setSubmitDisable(false);
      setemailError(false);
      return false;
    } else {
      setSubmitDisable(true);
    }
  };
  const validatePasssword = e => {
    setPasswordValue(e);

    if (e == '') {
      setSubmitDisable(false);
      //setemailError(false)
      return false;
    } else {
      setSubmitDisable(true);
    }
  };
  const sendMail = () => {
    console.log(emailValue);
    if (emailValue == '' && passwordValue == '') {
      setemailError(false);
      setPasswordError(false);
    } else {
      navigation.navigate('DrawerPage');
    }

    // setloading(true)
  };
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          backgroundColor: '#F9FAFC',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: wH / 6.59,
            width: wH / 1.65,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo width={70} height={70} />
        </View>
        <View style={{marginRight: wW / 55}}>
          <Login_bg_black width={wH / 1.4} height={wH / 1.4} />
        </View>
        <View
          style={{
            width: wW,
            alignItems: 'center',
            position: 'relative',
            bottom: wH / 1.499,
          }}>
          {/* <ImageBackground
            source={require('../assets/images/Login_bg_black(1).png')}
            style={{width: '100%', height: '85%',alignItems:'center',resizeMode:'contain',}}> */}

          <Text
            style={{
              fontSize: 27,
              fontFamily: 'DMSans-Bold',
              fontWeight: '600',
              color: 'black',
            }}>
            Driver Login
          </Text>
          <Text
            style={{
              fontSize: normalize(14),
              fontWeight: '400',
              color: '#8E8E8E',
              width: '58%',
              textAlign: 'center',
            }}>
            Welcome back. Enter your credentials to access your account
          </Text>
          <View style={{width: '85%', marginTop: 35}}>
            <Text style={{fontSize: 15, color: 'black'}}>Email Address</Text>
            <TextInput
              style={{
                borderWidth: 1,
                marginTop: 10,
                borderColor: emailError ? 'grey' : 'red',
                borderRadius: 5,
                backgroundColor: '#FFFFFF',
              }}
              onChangeText={value => validateEmail(value)}
              placeholder={'  Email'}

              //value={text}
            />
          </View>
          <View style={{width: '85%', marginTop: 25}}>
            <Text style={{fontSize: 15, color: 'black'}}>Password</Text>
            <View
              style={[
                {
                  borderColor: passwordError ? 'grey' : 'red',
                  marginTop: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <TextInput
                //autoFocus={true}
                autoCapitalize="none"
                placeholder="  Password"
                placeholderTextColor={'#9AA6C3'}
                secureTextEntry={showPassword}
                onChangeText={value => validatePasssword(value)}
                style={{width:'90%'}}
                // onFocus={()=>{setKeys(1)}}
              />
              <View style={{marginRight: wW / 50}}>
                {!showPassword ? (
                  <TouchableOpacity
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}>
                    <ShowPassword width={18} height={18} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}>
                    <HidePassword width={18} height={18} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              {emailError ? (
                <></>
              ) : (
                <Text style={{marginTop: 5, color: 'red'}}>
                  Email/Password incorrect
                </Text>
              )}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              sendMail1();
            }}
            style={{
              width: '80%',
              marginTop: 30,
              backgroundColor: '#7D47EF',
              height: wH / 18,
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <Text style={{textTransform: 'capitalize', color: 'white'}}>
                Login
              </Text>
            }
          </TouchableOpacity>
          <View
            style={{
              width: '45%',
              height: 1,
              marginTop: 30,
              backgroundColor: 'grey',
            }}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                'ResetPassword',
              ); /* sendMail(); Keyboard.dismiss() */
            }}
            /* disabled={!submitDisable} */ style={{
              width: '70%',
              marginTop: wH / 75,
              height: 50,
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <Text
                style={{
                  fontSize: normalize(16),
                  fontFamily: 'DMSans-Bold',
                  color: '#2563EB',
                }}>
                Forgot password?
              </Text>
            }
          </TouchableOpacity>
          {/* </ImageBackground> */}
        </View>
      </View>
      {/* <View
        style={{bottom: 60, justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={{fontSize: 15, color: '#2563EB'}}>
          Don’t have an Account?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateAccount');
          }}
          style={{}}>
          <Text style={{fontSize: 15, color: '#7D47EF'}}>Create here</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({});
