import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React,{useState} from 'react';
import {normalize, wH, wW} from '../styles/globalStyle';
import BackArrow from '../assets/svg/backArrow.svg';
import Logo from '../assets/svg/logo.svg';
import Map1 from '../assets/svg/map1.svg';
import Person from '../assets/svg/person.svg';
import Phone from '../assets/svg/phone.svg';
import {FONTS} from '../themes/textfonts';
import Package_Black from '../assets/svg/package-black.svg';
import Weight from '../assets/svg/weight.svg';
import KilometerIcon from '../assets/svg/kilometerIcon.svg';
import SwipeButton from 'rn-swipe-button';
import StringButton from '../assets/svg/stringButton.svg';
import ExpandButton from '../assets/svg/expandButton.svg';

import arrowRight from '../assets/arrowright.png';
import { useSelector } from 'react-redux';
const RideDetails = ({navigation}) => {
  const dashBoardReducer = useSelector(state => state.DashBoardReducer);
  const [StringValue, setStringValue] = React.useState(true);
  let forceResetLastButton = null;
  return (
    <View>
      <ScrollView>
        {dashBoardReducer.isLoading === true?<></>:<View style={{height: wH * 1.2}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: wW,
              padding: wW / 55,
              paddingHorizontal: wW / 25,
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
              width: wW,
              paddingHorizontal: wW / 18,
              flexDirection: 'row',
              marginBottom: wH / 75,
            }}>
            <Text
              style={{
                fontSize: normalize(18),
                fontFamily: 'DMSans-Regular',
                fontWeight: '500',
                color: '#0F1739',
              }}>
              Trip 1
            </Text>
            <Text
              style={{
                fontSize: normalize(18),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#8E8E8E',
              }}>
              {' of 10'}
            </Text>
          </View>
          {StringValue ? (
            <View style={{width: wW, height: wW}}>
              <ImageBackground
                source={require('../assets/map1.png')}
                style={{width: '100%', height: '98%'}}>
                <TouchableOpacity
                  onPress={() => {
                    setStringValue(!StringValue);
                  }}
                  style={{
                    //height: 50,
                    borderRadius: 4,
                  }}>
                  <StringButton
                    width={50}
                    height={50}
                    style={{marginTop: wW / 35, marginStart: wW / 35}}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ) : (
            <></>
          )}
          <View style={{width: wW, alignItems: 'center'}}>
            <View
              style={{
                height: StringValue ? wH / 2.75 : wH / 1.2,
                width: wW / 1.1,

                shadowColor: 'black',
                backgroundColor: '#FFFFFF',
                shadowOpacity: 1,
                elevation: 5,
                shadowRadius: 4,
                borderRadius: wW / 55,
                justifyContent: 'space-between',
              }}>
              <View>
                {StringValue ? (
                  <></>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: wW,
                      alignItems: 'center',
                      justifyContent: 'flex-start',marginTop: wW / 35,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setStringValue(!StringValue);
                      }}
                      style={{
                        //height: 50,
                        borderRadius: 4,
                      }}>
                      <ExpandButton
                        width={50}
                        height={50}
                        style={{ marginStart: wW / 35}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: normalize(17),
                        fontFamily: 'DMSans-Bold',
                        fontWeight: '500',
                        color: '#344054',
                        marginLeft: wW / 25,
                        //paddingHorizontal: wW / 30,
                      }}>
                      Map
                    </Text>
                  </View>
                )}

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    paddingHorizontal: wW / 30,
                    marginTop: wW / 30,
                    justifyContent: 'space-between',
                    
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',

                      width: '42%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Person width={wW / 9} height={wW / 9} />
                    <View style={{marginLeft:wW/35,}}>
                      <Text
                        style={{
                          fontSize: normalize(15),
                          fontFamily: 'DMSans-Regular',
                          fontWeight: '500',
                          color: '#7D47EF',
                          //paddingHorizontal: wW / 30,
                        }}>
                          
                        {dashBoardReducer.response.data[0].order_details.length==0? 'Customer': (dashBoardReducer.response.data[0].order_details[0].customer_name)}
                      </Text>
                      <Text
                        style={{
                          fontSize: normalize(13),
                          fontFamily: 'DMSans-Regular', //fontWeight: '500',
                          color: '#8E8E8E',
                          //paddingHorizontal: wW / 30,
                        }}>
                        +65 {dashBoardReducer.response.data[0].order_details.length==0? '8978458975': (dashBoardReducer.response.data[0].order_details[0].customer_contact_number)}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: wW / 8,
                      height: wW / 9,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: wW / 45,
                      borderColor: 'grey',
                      borderWidth: 1,
                    }}>
                    <Phone width={25} height={25} />
                  </View>
                </View>
                <View style={{paddingHorizontal: wW / 30}}>
                  <View
                    style={{
                      height: wW / 5,
                      width: '72%',
                      borderWidth: 1,
                      borderColor: '#CCCCCC',
                      borderRadius: 5,
                      padding: wW / 55,
                      marginTop: wH / 45,
                      
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(16),
                        fontFamily: 'DMSans-Regular', //fontWeight: '600',
                        color: '#9CA4BD',
                      }}>
                      Address:
                    </Text>
                    {dashBoardReducer.response.data[0].order_details.length==0?<Text
                      style={{
                        marginTop: 7,
                        fontSize: normalize(14),
                        fontFamily: 'DMSans-Regular', //fontWeight: '600',
                        color: '333333',
                        //paddingLeft: wH / 120,
                      }}>
                     33rd block, 1st street, unit number 6,Singapore - 123456 
                    </Text>:<Text
                      style={{
                        marginTop: 7,
                        fontSize: normalize(14),
                        fontFamily: 'DMSans-Regular', //fontWeight: '600',
                        color: '333333',
                        //paddingLeft: wH / 120,
                      }}>
                     {dashBoardReducer.response.data[0].order_details[0].shipping_block_number} , {dashBoardReducer.response.data[0].order_details[0].shipping_street_drive_number} {dashBoardReducer.response.data[0].order_details[0].shipping_unit_number} - {dashBoardReducer.response.data[0].order_details[0].shipping_postal_code}
                    </Text>}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: wH / 45,
                    paddingHorizontal: wW / 30,
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Package_Black width={17} height={17} />
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular', //fontWeight: '600',
                        marginStart: wW / 55,
                        color: '#333333',
                      }}>
                      Order #1234
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Weight width={17} height={17} />
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular', //fontWeight: '600',
                        marginStart: wW / 55,
                        color: '#333333',
                      }}>
                      200 KG
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <KilometerIcon width={17} height={17} />
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular', //fontWeight: '600',
                        marginStart: wW / 55,
                        color: '#333333',
                      }}>
                      3.6 KMS
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{marginTop: wH / 25}}>
                <SwipeButton
                  containerStyles={{borderRadius: 5}}
                  swipeSuccessThreshold={90}
                  forceReset={ reset => {
                    forceResetLastButton = reset
                  }}
                  height={45}
                  title="Reached location"
                  titleFontSize={normalize(15)}
                  titleColor="#7D47EF"
                  titleStyles={{fontFamily: 'DMSans-Regular'}}
                  onSwipeSuccess={() => {
                    navigation.navigate('Delivered');
                    forceResetLastButton && forceResetLastButton();
                  }}
                  railFillBackgroundColor="transparent" //(Optional)
                  railStyles={{borderRadius: 5}}
                  railFillBorderColor="transparent" //(Optional)
                  thumbIconBackgroundColor="#7D47EF" //(Optional)
                  thumbIconStyles={{borderRadius: 5}}
                  thumbIconBorderColor="transparent" //(Optional)
                  thumbIconImageSource={arrowRight}
                  railBackgroundColor="white" //(Optional)
                  railBorderColor="white" //(Optional)
                />
              </View>
            </View>
          </View>
        </View>}
      </ScrollView>
    </View>
  );
};

export default RideDetails;

const styles = StyleSheet.create({});
