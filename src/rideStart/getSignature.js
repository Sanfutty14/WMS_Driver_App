import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, wH, wW} from '../styles/globalStyle';
import BackArrow from '../assets/svg/backArrow.svg';
import Logo from '../assets/svg/logo.svg';
import SignTick from '../assets/svg/verifySignTick.svg';
import Person from '../assets/svg/person.svg';
import Phone from '../assets/svg/phone.svg';
import Doller from '../assets/svg/doller.svg';
import EditBlack from '../assets/svg/editBlack.svg';
import ArrowRight from '../assets/svg/arrowRight.svg';
import DollerBlack from '../assets/svg/dollerBlack.svg';
import Package_Black from '../assets/svg/package-black.svg';
import Weight from '../assets/svg/weight.svg';
import KilometerIcon from '../assets/svg/kilometerIcon.svg';
import VerifyLogo from '../assets/svg/VerifyLogo.svg';
import SwipeButton from 'rn-swipe-button';
import arrowRight from '../assets/arrowright.png';
import BackArrow2 from '../assets/svg/backArrow2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FONTS} from '../themes/textfonts';
const GetSignature = ({navigation}) => {
  const [balanceModel, setbalanceModel] = React.useState(false);
  const [signature, setSignature] = React.useState('');

  //   useState(async() => {
  //     let signatureimg = await AsyncStorage.getItem("signatureImage");
  //     setSignature(signatureimg);
  //       console.log("helloo"+signature);

  // }, []);
  const saveSign = async() => {
   
    await AsyncStorage.setItem("verifySigned", 'true');
    
    navigation.reset({
      index: 0,
      routes: [{name: 'DrawerPage'}],
    });
    navigation.navigate('RideDetails');
    navigation.navigate('Delivered');
    
    
  };
  React.useEffect(async () => {
    let signatureimg = await AsyncStorage.getItem('signatureImage');
    setSignature(signatureimg);
    console.log('helloo' + signature);
  }, []);
  // React.useEffect(async () => {
  //   let signatureimg = await AsyncStorage.getItem("signatureImage");
  //   setSignature(signatureimg);
  // });
  return (
    <View style={{flex: 1, height: wH, alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: wW,
          padding: wW / 55,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            //height: 50,
            borderRadius: 4,
          }}>
          {<BackArrow width={30} height={30} />}
        </TouchableOpacity>
        <Logo width={55} height={55} />
        <View style={{height: 30, width: 30}}></View>
      </View>
      <View
        style={{
          height: wH / 1.225,
          width: wW / 1.1,
          marginTop: wH / 65,
          shadowColor: 'black',
          backgroundColor: '#FFFFFF',
          shadowOpacity: 1,
          elevation: 5,
          shadowRadius: 4,
          borderRadius: wW / 55,
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              height: '11%',
              width: '100%',
              backgroundColor: '#f2edfd',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SignTick width={wW / 18} height={wW / 18} />
              <View style={{marginLeft: wW / 45}}>
                <Text
                  style={{
                    fontSize: normalize(20),
                    fontFamily: 'DMSans-Regular',
                    fontWeight: '500',
                    color: '#333333',
                  }}>
                  VERIFY & SIGN
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingHorizontal: wW / 30}}>
            <Text
              style={{
                fontSize: normalize(16),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
                marginTop: wH / 35,
              }}>
              Current order
            </Text>
            <View
              style={{
                height: wW / 5.2,
                width: '100%',
                borderWidth: 1,
                borderColor: '#71D67A',
                borderRadius: 5,
                padding: wW / 55,
                marginTop: wH / 85,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <DollerBlack width={wW / 8} height={wW / 8} />
                <View style={{marginLeft: wW / 45}}>
                  <Text
                    style={{
                      fontSize: normalize(16),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#333333',
                    }}>
                    Order #1234
                  </Text>
                </View>
              </View>
              <View
                style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
                <View
                  style={{
                    //width: wW / 7,
                    height: wW / 10,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',

                    //backgroundColor:'red',
                    flexDirection: 'row',
                    marginTop: wW / 120,
                  }}>
                  <Text
                    style={{
                      fontSize: normalize(12),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#9CA4BD',
                    }}>
                    {'Paid:   '}
                  </Text>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#71D67A',
                    }}>
                    $ 500
                  </Text>
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: normalize(16),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
                marginTop: wH / 35,
              }}>
              Credit order
            </Text>
            <View
              style={{
                height: wW / 5.2,
                width: '100%',
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                padding: wW / 55,
                marginTop: wH / 85,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={
                    {
                      /* marginLeft: wW / 45 */
                    }
                  }>
                  <Text
                    style={{
                      fontSize: normalize(16),
                      fontFamily: 'DMSans-Regular',
                      fontWeight: '500',
                      color: '#344054',
                    }}>
                    Order #1234
                  </Text>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#8E8E8E',
                    }}>
                    Credit amount : $5.99
                  </Text>
                </View>
              </View>
              <View
                style={{
                  //width: wW / 7,
                  height: wW / 10,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',

                  //backgroundColor:'red',
                  flexDirection: 'row',
                  marginTop: wW / 120,
                }}>
                <Text
                  style={{
                    fontSize: normalize(12),
                    fontFamily: 'DMSans-Regular',
                    //fontWeight: '600',
                    color: '#9CA4BD',
                  }}>
                  {'Paid:   '}
                </Text>
                <Text
                  style={{
                    fontSize: normalize(14),
                    fontFamily: 'DMSans-Regular',
                    //fontWeight: '600',
                    color: '#71D67A',
                  }}>
                  $ 500
                </Text>
              </View>
            </View>
            <View
              style={{
                height: wW / 5.2,
                width: '100%',
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                padding: wW / 55,
                marginTop: wH / 85,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={
                    {
                      /* marginLeft: wW / 45 */
                    }
                  }>
                  <Text
                    style={{
                      fontSize: normalize(16),
                      fontFamily: 'DMSans-Regular',
                      fontWeight: '500',
                      color: '#344054',
                    }}>
                    Order #1234
                  </Text>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#8E8E8E',
                    }}>
                    Credit amount : $5.99
                  </Text>
                </View>
              </View>
              <View
                style={{
                  //width: wW / 7,
                  height: wW / 10,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',

                  //backgroundColor:'red',
                  flexDirection: 'row',
                  marginTop: wW / 120,
                }}>
                <Text
                  style={{
                    fontSize: normalize(12),
                    fontFamily: 'DMSans-Regular',
                    //fontWeight: '600',
                    color: '#9CA4BD',
                  }}>
                  {'Paid:   '}
                </Text>
                <Text
                  style={{
                    fontSize: normalize(14),
                    fontFamily: 'DMSans-Regular',
                    //fontWeight: '600',
                    color: '#71D67A',
                  }}>
                  $ 5
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: normalize(16),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
                marginTop: wH / 35,
              }}>
              Sign
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignaturePad');
              }}
              setbalanceModel
              style={{
                //height: 50,
                borderRadius: 4,
              }}>
              <View
                style={{
                  height: wW / 4,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#CCCCCC',
                  borderRadius: 5,
                  
                  marginTop: wH / 85,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: '28%', height: '290%',/*  backgroundColor:'red', */transform: [{ rotate: '270deg' }]}}
                  resizeMode='contain'
                  source={{uri: signature}}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: wW / 45,
          }}>
          <TouchableOpacity
            onPress={() => {
              saveSign();
              //setbalanceModel(false);
            }}
            style={{
              //height: 50,
              borderRadius: 4,
            }}>
            <View
              style={{
                width: wW / 1.3,
                height: wH / 18,
                backgroundColor: '#7D47EF',
                borderRadius: wW / 45,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: normalize(16),
                  fontFamily: 'DMSans-Regular',
                  fontWeight: '500',
                  color: 'white',
                  //marginStart: wW / 25,
                  //paddingHorizontal: wW / 30,
                  textAlign: 'center',
                }}>
                Complete
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetSignature;

const styles = StyleSheet.create({});
