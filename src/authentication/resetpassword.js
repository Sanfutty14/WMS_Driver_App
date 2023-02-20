import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BackArrow from '../assets/svg/backArrow.svg';
import { wH, wW } from '../styles/globalStyle';
import Logo from '../assets/svg/logo.svg';
import Login_bg_black from '../assets/svg/login_bg_black.svg';
const ResetPassword = ({navigation}) => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [emailError, setemailError] = React.useState(true);
  const [passwordError, setPasswordError] = React.useState(true);
  const [submitDisable, setSubmitDisable] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  
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
            height: 150,
            width: 450,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View
          style={{
            height: wH / 6.59,
            width: wW,
            alignItems: 'center',justifyContent:'space-between',
            flexDirection:'row',paddingHorizontal:wW/18
          }}><TouchableOpacity
            onPress={() => {
              
              navigation.goBack()
            }}
            style={{
              //height: 50,
              borderRadius: 4,
            }}>
            {<BackArrow width={30} height={30} />}
          </TouchableOpacity>
          <Logo width={70} height={70} /><View style={{width:30}}></View></View>
        </View>
        <View style={{marginRight: wW / 55,}}>
          <Login_bg_black width={wH / 1.4} height={wH / 1.4} />
        </View>
        <View
          style={{
            width: wW,
            alignItems: 'center',
            position: 'relative',
            bottom: wH / 1.499,
          }}>
        <Text style={{fontSize: 27, fontWeight: '600', color: 'black'}}>
          Reset Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#8E8E8E',
            width: '70%',
            textAlign: 'center',
          }}>
          Enter your email to send a reset request to admin
        </Text>
        <View style={{width: '85%', marginTop: 35}}>
          <Text style={{fontSize: 15, color: 'black'}}>Email Address</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 10,
              borderColor: emailError ? 'grey' : 'red',
              borderRadius: 5,
            }}
            onChangeText={value => validateEmail(value)}
            placeholder={'  Email'}

            //value={text}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            sendMail(); /* sendMail(); Keyboard.dismiss() */
          }}
          /* disabled={!submitDisable} */ style={{
            width: '77%',
            marginTop: 30,
            backgroundColor: '#7D47EF',
            height: wH/18,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {
            <Text style={{textTransform: 'capitalize', color: 'white'}}>
              Send Request
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
            navigation.goBack() /* sendMail(); Keyboard.dismiss() */
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
            <Text style={{fontSize: 15, color: '#2563EB'}}>
              Login instead
            </Text>
          }
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ResetPassword;
const styles = StyleSheet.create({});
