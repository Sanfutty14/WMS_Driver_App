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

const CreateAccount = ({navigation}) => {
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
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 150,
            width: 450,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/Logo.png')}
            style={{width: '17%', height: '51%'}}
          />
        </View>
        <Text style={{fontSize: 27, fontWeight: '600', color: 'black'}}>
          Create Account
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#8E8E8E',
            width: '70%',
            textAlign: 'center',
          }}>
          Create an account to order directly to warehouse
        </Text>
        <View style={{width: '70%', marginTop: 35}}>
          <Text style={{fontSize: 15, color: 'black'}}>Name</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 10,
              borderColor: emailError ? 'grey' : 'red',
              borderRadius: 5,
            }}
            onChangeText={value => validateEmail(value)}
            placeholder={'  Name'}

            //value={text}
          />
        </View>
        <View style={{width: '70%', marginTop: 35}}>
          <Text style={{fontSize: 15, color: 'black'}}>
            Office contact Number
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 10,
              borderColor: emailError ? 'grey' : 'red',
              borderRadius: 5,
            }}
            onChangeText={value => validateEmail(value)}
            placeholder={'  Office contact Number'}

            //value={text}
          />
        </View>
        <View style={{width: '70%', marginTop: 25}}>
          <Text style={{fontSize: 15, color: 'black'}}>Email Address</Text>
          <TextInput
            autoFocus={true}
            autoCapitalize="none"
            placeholder="  Email Address"
            placeholderTextColor={'#9AA6C3'}
            secureTextEntry={false}
            onChangeText={value => validatePasssword(value)}
            style={[
              {
                borderColor: passwordError ? 'grey' : 'red',
                marginTop: 10,
                borderRadius: 5,
                borderWidth: 1,
              },
            ]}
            // onFocus={()=>{setKeys(1)}}
          />
          
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SuccessPage'); /* sendMail(); Keyboard.dismiss() */
          }}
          /* disabled={!submitDisable} */ style={{
            width: '70%',
            marginTop: 30,
            backgroundColor: '#7D47EF',
            height: 50,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {
            <Text style={{textTransform: 'capitalize', color: 'white'}}>
              Create
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
            navigation.goBack()
          }}
          style={{}}>
        <Text style={{marginTop: 35, fontSize: 15, color: '#2563EB'}}>
        Login instead
        </Text></TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
};
export default CreateAccount;
const styles = StyleSheet.create({});
