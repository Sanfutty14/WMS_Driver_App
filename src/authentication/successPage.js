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
  
  const SuccessPage = ({navigation}) => {
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
            backgroundColor: 'white',
            alignItems: 'center',justifyContent: 'center',
          }}>
          <View
            style={{
              height: 200,
              width: 450,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/success.png')}
              style={{width: '45%', height: '100%'}}
            />
          </View>
          <Text style={{fontSize: 27, fontWeight: '600', color: 'black',marginTop:25}}>
          Thanks!
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: '#8E8E8E',
              width: '70%',
              textAlign: 'center',
            }}>
            Warehouse admin will contact you soon regarding account creation
          </Text>
        </View>
      </SafeAreaView>
    );
  };
  export default SuccessPage;
  const styles = StyleSheet.create({});
  