import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {normalize, wH, wW} from '../styles/globalStyle';
import Logo from '../assets/svg/logo.svg';
import Person from '../assets/svg/person.svg';
import Success from '../assets/svg/success.svg';
import UserProfile from '../assets/svg/userProfile.svg';
import {FONTS} from '../themes/textfonts';
import AsyncStorage from "@react-native-async-storage/async-storage";
const successPage = ({navigation}) => {
  const getTakeBreak = async (value) => {
    await AsyncStorage.setItem("IsBreak", value);
    
    if(value=='false')
    {
      
     
      navigation.reset({
        index: 0,
        routes: [{name: 'DrawerPage'}],
      });
      navigation.navigate('RideDetails');
    }
    else{
      navigation.reset({
        index: 0,
        routes: [{name: 'DrawerPage'}],
      });
    }
  };
  
  return (
    <View style={{height: wH, alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: wW,
          padding: wW / 55,paddingHorizontal:wW/18,
          justifyContent: 'space-between',
        }}>
        <View style={{width: wW / 15, height: wW / 15}}></View>
        <Logo width={55} height={55} />
        <TouchableOpacity
          onPress={() => {
            //   navigation.goBack();
          }}
          style={{
            //height: 50,
            borderRadius: 4,
          }}>
          <UserProfile width={35} height={35} />
        </TouchableOpacity>
      </View>
      <View
        style={{height: '90%', justifyContent: 'center', alignItems: 'center'}}>
        <Success width={wW / 2.5} height={wW / 2.5} />
        <Text
          style={{
            fontSize: normalize(22),
            fontFamily:'DMSans-Bold',
            fontWeight: '500',
            color: '#344054',
            //marginStart: wW / 25,
            //paddingHorizontal: wW / 30,
            textAlign: 'center',
            width: wW / 3.5,
          }}>
          Order Delivered
        </Text>
        <View style={{position:'absolute',bottom:40}}>
        <TouchableOpacity
          onPress={() => {
            getTakeBreak('false');
            
               //navigation.navigate('RideDetails');
          }}
          style={{
            //height: 50,
            borderRadius: 4,
          }}><View
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
              fontFamily:'DMSans-Bold',
              fontWeight: '500',
              color: 'white',
              //marginStart: wW / 25,
              //paddingHorizontal: wW / 30,
              textAlign: 'center',
            }}>
            Next order
          </Text>
        </View></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //navigation.navigate('DrawerPage');
            getTakeBreak('true');
           
          }}
          style={{
            //height: 50,
            borderRadius: 4,
          }}><View
          style={{
            marginTop: wH / 75,
            width: wW / 1.3,
            height: wH / 19,
            //  backgroundColor: '#7D47EF',
            borderRadius: wW / 45,borderWidth:1,borderColor:'#D0D5DD',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: normalize(16),
              fontFamily:'DMSans-Bold',
              fontWeight: '500',
              color: '#344054',
              //marginStart: wW / 25,
              //paddingHorizontal: wW / 30,
              textAlign: 'center',
            }}>
            Take a break
          </Text>
        </View></TouchableOpacity></View>
      </View>
    </View>
  );
};

export default successPage;

const styles = StyleSheet.create({});
