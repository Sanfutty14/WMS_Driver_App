import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {normalize, wH, wW} from '../styles/globalStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import BackArrow from '../assets/svg/backArrow.svg';
import Person from '../assets/svg/person.svg';
import Phone from '../assets/svg/phone.svg';
import {FONTS} from '../themes/textfonts';
const OrderDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: wH}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: wW,
            paddingHorizontal: wW / 18,
            marginTop: wH / 40,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              
              navigation.goBack()
            }}
            style={{
              //height: 50,
              borderRadius: 4,
            }}>
            {<BackArrow width={30} height={30} />}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: normalize(20),
              fontFamily:'DMSans-Bold',
              fontWeight: '500',
              color: '#64748B',
            }}>
            Order detail
          </Text>
          <View style={{height: 30, width: 30}}></View>
        </View>
        <View
          style={{
            width: '90%',
            marginTop: wH / 55,
            height: wH / 20,
            borderWidth: 1,
            borderRadius: wW / 85,
            marginTop: wH / 25,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            borderColor: '#CCCCCC',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wW / 55,
          }}>
          <Text
            style={{
              fontSize: normalize(14),
              fontFamily:'DMSans-Regular',
              fontWeight: '500',
              color: '#7D47EF',
            }}>
            Invoice number
          </Text>
          <Text
            style={{
              fontSize: normalize(16),
              fontFamily:'DMSans-Bold',
              fontWeight: '500',
              color: '#333333',
            }}>
            Order #1234
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            marginTop: wH / 55,
            height: wH / 3.5,
            borderWidth: 1,
            borderRadius: wW / 85,
            marginTop: wH / 25,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            borderColor: '#CCCCCC',
            flexDirection: 'row',
            justifyContent: 'space-between' /* paddingHorizontal:wW/55 */,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              height: wH / 3.5,
              width: '50%',
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                width: '100%',
                //paddingHorizontal: wW / 30,
                /* backgroundColor:'red', */ alignItems: 'flex-start',
                paddingHorizontal: wW / 30,
              }}>
              <Text
                style={{
                  fontSize: normalize(15),
                  fontFamily:'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#7D47EF',
                  marginBottom: wH / 75,
                  marginTop: wH / 75,
                }}>
                Delivery address
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: wH / 55,
                  width: '88%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Person width={40} height={40} />
                <View>
                  <Text
                    style={{
                      fontSize: normalize(15),
                      fontFamily:'DMSans-Regular',
                      fontWeight: '500',
                      color: '#7D47EF',
                      //paddingHorizontal: wW / 30,
                    }}>
                    Customer 2
                  </Text>
                  <Text
                    style={{
                      fontSize: normalize(13),
                      fontFamily:'DMSans-Regular',
                      //fontWeight: '500',
                      color: '#8E8E8E',
                      //paddingHorizontal: wW / 30,
                    }}>
                    +65 987645312
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  width: wW / 1.119,
                  top: wH / 6.5,
                  backgroundColor: '#CCCCCC',
                  position: 'absolute',
                }}></View>
            </View>
            <View
              style={{
                width: '80%',
                paddingHorizontal: wW / 30,
                height: wH / 8,
                /* backgroundColor:'red', */ alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: normalize(15),
                  fontFamily:'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#7D47EF',
                  marginBottom: wH / 75,
                  marginTop: wH / 75,
                }}>
                Order status
              </Text>
              <View
                style={{
                  backgroundColor: '#f4f4f4',
                  marginTop: 10,
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  //paddingHorizontal: wW / 45,
                  width: wW / 4.8,
                  height: wW / 18,
                  marginStart: wW / 45,
                }}>
                <Image
                  source={require('../assets/package.png')}
                  style={{width: wW / 30, height: wW / 30}}
                />
                <Text
                  style={{
                    fontSize: normalize(13),
                    fontFamily:'DMSans-Regular',
                    fontWeight: '500',
                    color: '#71D67A',
                    paddingLeft: wH / 155,
                  }}>
                  Loaded
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: wH / 3.5,
              width: 1,
              backgroundColor: '#CCCCCC',
            }}></View>
          <View
            style={{
              justifyContent: 'space-between',
              height: wH / 3.5,
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                width: '80%',
                paddingHorizontal: wW / 30,
                /* backgroundColor:'red', */ alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: normalize(15),
                  fontFamily:'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#7D47EF',
                  marginBottom: wH / 75,
                  marginTop: wH / 75,
                }}>
                Delivery address
              </Text>
              <View style={{width: '90%'}}>
                <Text
                  style={{
                    fontSize: normalize(14),
                    fontFamily:'DMSans-Regular',
                    /* fontWeight: '600', */
                    color: '#333333',
                  }}>
                  33rd block, 1st street, unit number 6, Singapore - 123456
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '80%',
                paddingHorizontal: wW / 30,
                height: wH / 8,
                /* backgroundColor:'red', */ alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: normalize(15),
                  fontFamily:'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#7D47EF',
                  marginBottom: wH / 75,
                  marginTop: wH / 75,
                }}>
                Gross weight
              </Text>
              <View style={{width: '90%'}}>
                <Text
                  style={{
                    fontSize: normalize(20),
                    fontFamily:'DMSans-Bold',
                    fontWeight: '600',
                    color: '#333333',
                  }}>
                  160 Kgs
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            marginTop: wH / 55,
            height: wH / 5,
            borderWidth: 1,
            borderRadius: wW / 85,
            marginTop: wH / 25,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            borderColor: '#CCCCCC',

            justifyContent: 'space-between',
            padding: wW / 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wW / 55,
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: normalize(16),
                fontFamily:'DMSans-Regular',
                //fontWeight: '600',
                color: '#7D47EF',
              }}>
              Order items
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wW / 55,
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily:'DMSans-Regular',
                //fontWeight: '600',
                color: '#333333',
              }}>
              Product 1
            </Text>
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily:'DMSans-Regular',
                //fontWeight: '600',
                color: '#333333',
              }}>
              80 KG
            </Text>
          </View>
          <View
            style={{
              height: 1.1,
              width: wW / 1.27,

              backgroundColor: '#EDEDED',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wW / 55,
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily:'DMSans-Regular',
                //fontWeight: '600',
                color: '#333333',
              }}>
              Product 2
            </Text>
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily:'DMSans-Regular',
                //fontWeight: '600',
                color: '#333333',
              }}>
              80 KG
            </Text>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: wH / 20,height:wH/7,}}>
        <View
          style={{
            height: 1.1,
            width: wW,

            backgroundColor: '#8E8E8E',
          }}></View>
          <View style={{padding:wW/15}}><Text
            style={{
              fontSize: normalize(16),
              fontFamily:'DMSans-Regular',
              //fontWeight: '600',
              color: '#64748B',
            }}>
            Having problems?
          </Text>
          <View style={{marginTop:wH/75,height:wH/20,width:wW/2 ,justifyContent:'space-evenly',alignItems:'center',borderColor:'#D0D5DD',flexDirection:'row',borderWidth:1.5,borderRadius:wW/45}}>
          <Phone width={20} height={20} /><Text
            style={{
              fontSize: normalize(16),
              fontFamily:'DMSans-Regular',
              fontWeight: '600',
              color: '#64748B',
            }}>
            Contact admin
          </Text>
          </View>
          </View>
         
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
