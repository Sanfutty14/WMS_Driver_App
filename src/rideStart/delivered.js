import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  View,KeyboardAvoidingView
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {normalize, wH, wW} from '../styles/globalStyle';
import BackArrow from '../assets/svg/backArrow.svg';
import Logo from '../assets/svg/logo.svg';
import Map1 from '../assets/svg/map1.svg';
import Person from '../assets/svg/person.svg';
import Phone from '../assets/svg/phone.svg';
import Doller from '../assets/svg/doller.svg';
import EditBlack from '../assets/svg/editBlack.svg';
import ArrowRight from '../assets/svg/arrowRight.svg';
import DollerBlack from '../assets/svg/dollerBlack.svg';
import Done from '../assets/svg/Done.svg';
import Weight from '../assets/svg/weight.svg';
import KilometerIcon from '../assets/svg/kilometerIcon.svg';
import SwipeButton from 'rn-swipe-button';
import {FONTS} from '../themes/textfonts';
import arrowRight from '../assets/arrowright.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackArrow2 from '../assets/svg/backArrow2';
import {useDispatch,useSelector} from 'react-redux';
import { changeOrderStatus } from '../StateManagement/DeliveredData/actions';
import { resetTripDetails } from '../StateManagement/DashboardData/actions';

const Delivered = ({navigation}) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
  const [balanceModel, setbalanceModel] = React.useState(false);
  const [collectedCash, setCollectedCash] = React.useState(0);
  const [driverToken, setDriverToken] = React.useState();
  const [isVerifySigned, setVerifySigned] = React.useState('false');
  const dashBoardReducer = useSelector(state => state.DashBoardReducer);
  const driverLogin = useSelector(state => state.loginReducer);
  const deliveredReducer = useSelector(state => state.DeliveredReducer);
  
  useEffect(() => {
    (async function() {
        try {
          const signatureimg = await AsyncStorage.getItem('verifySigned');
          const loginStatus = await AsyncStorage.getItem('bearerToken');
          setVerifySigned(signatureimg);
          setDriverToken(loginStatus);
        } catch (e) {
            console.error('ERROR +*+*+*+*+  '+e);
        }
    })();
}, []); 
 
  // useState(async () => {
    
  //   console.log("trip_id "+JSON.stringify(dashBoardReducer.response.data[0].id));
  //   console.log("customer_id "+JSON.stringify(dashBoardReducer.response.data[0].customer_id));
  //   console.log("order_id "+JSON.stringify(dashBoardReducer.response.data[0].order_details[0].order_id));
  //   console.log("order_status Delivered"+deliveredReducer);
  // }, []);
  const dispatch = useDispatch();
    const deliveredCompleted = () => {
      dispatch(changeOrderStatus({ "trip_id": dashBoardReducer.response.data[0].id, 'customer_id': dashBoardReducer.response.data[0].customer_id,'order_id': dashBoardReducer.response.data[0].order_details[0].order_id,'order_status': "Delivered" },driverToken))
      console.log("ORDER STATUS :: "+JSON.stringify(deliveredReducer));
      // dispatch(resetTripDetails());
    };
  return (
    <View style={{flex: 1, height: wH, alignItems: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={balanceModel}
        style={{height:wH}}>
          <View style={{height:'100%',opacity:0.2,backgroundColor:'black'}}></View>
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            width: wW,
            height: '87%',
            alignItems: 'center',
            padding: wW / 20,
            borderRadius: 25,
          }}>
          <View
            style={{
              width: wW,
              paddingHorizontal: wW / 20,
              paddingVertical: wW / 45,
            }}>
            <Text
              style={{
                fontSize: normalize(20),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
              }}>
              Credit balance
            </Text>
          </View>
          <View
            style={{
              height: wW / 5.2,
              width: '100%',
              borderWidth: 1,
              borderColor: '#8E8E8E',
              borderRadius: 5,
              padding: wW / 55,
              marginTop: wH / 85,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
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
              <Text
                style={{
                  fontSize: normalize(14),
                  fontFamily: 'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#71D67A',
                }}>
                Credit amount : $5.99
              </Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: normalize(12),
                  fontFamily: 'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#9CA4BD',
                }}>
                Collected
              </Text>
              <View
                    style={{
                      width: wW / 6,
                      height: wW / 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: wW / 45,
                      borderColor: 'grey',
                      borderWidth: 1,
                      flexDirection: 'row',
                      marginTop: wW / 120,
                      backgroundColor: '#FFFFFF',
                      paddingHorizontal:wW/120,
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular',
                       
                        color: '#9CA4BD',
                      }}>
                      $
                    </Text>
                    
                    <TextInput
                      maxLength={4}
                      style={{
                        height: '100%',
                        width:'77%',
                        fontSize: normalize(14),
                        fontFamily: 'DMSans-Regular',
                        color: '#000000',
                      }}
                    />
                  </View>
            </View>
          </View>
          <View
            style={{
              height: wW / 5.2,
              width: '100%',
              borderWidth: 1,
              borderColor: '#8E8E8E',
              borderRadius: 5,
              padding: wW / 55,
              marginTop: wH / 85,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
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
              <Text
                style={{
                  fontSize: normalize(14),
                  fontFamily: 'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#71D67A',
                }}>
                Credit amount : $5.99
              </Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: normalize(12),
                  fontFamily: 'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#9CA4BD',
                }}>
                Collected
              </Text>
              <View
                    style={{
                      width: wW / 6,
                      height: wW / 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: wW / 45,
                      borderColor: 'grey',
                      borderWidth: 1,
                      flexDirection: 'row',
                      marginTop: wW / 120,
                      backgroundColor: '#FFFFFF',
                      paddingHorizontal:wW/120,
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular',
                       
                        color: '#9CA4BD',
                      }}>
                      $
                    </Text>

                    <TextInput
                      maxLength={4}
                      style={{
                        height: '100%',
                        width:'77%',
                        fontSize: normalize(14),
                        fontFamily: 'DMSans-Regular',
                        color: '#000000',
                      }}
                    />
                  </View>
            </View>
          </View>
          <View style={{position: 'absolute', bottom: wH / 55}}>
            <TouchableOpacity
              onPress={() => {
                //  navigation.navigate('RideDetails');
                setbalanceModel(false);
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
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
        style={{width: wW, paddingHorizontal: wW / 18, flexDirection: 'row'}}>
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

      <View
        style={{
          height: wH / 1.19,
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
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wW / 30,
              padding: wH / 70,
            }}>
            {/* <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                //height: 50,
                borderRadius: 4,
              }}>
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
                <BackArrow2 width={15} height={15} />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: normalize(17),
                fontFamily:'DMSans-Bold',
                fontWeight: '500',
                color: '#344054',
                marginStart: wW / 25,
                //paddingHorizontal: wW / 30,
              }}>
              Back to map
            </Text> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              paddingHorizontal: wW / 30,
              //marginTop: wW / 55,
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
              <View>
                <Text
                  style={{
                    fontSize: normalize(15),
                    fontFamily: 'DMSans-Regular',
                    fontWeight: '500',
                    color: '#7D47EF',
                    //paddingHorizontal: wW / 30,
                  }}>
                  {dashBoardReducer.response.data[0].order_details.length == 0
                    ? 'Customer'
                    : dashBoardReducer.response.data[0].order_details[0]
                        .customer_name}
                </Text>
                <Text
                  style={{
                    fontSize: normalize(13),
                    fontFamily: 'DMSans-Regular',
                    //fontWeight: '500',
                    color: '#8E8E8E',
                    //paddingHorizontal: wW / 30,
                  }}>
                  +65{' '}
                  {dashBoardReducer.response.data[0].order_details.length == 0
                    ? '8978458975'
                    : dashBoardReducer.response.data[0].order_details[0]
                        .customer_contact_number}
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
                width: '100%',
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
              {dashBoardReducer.response.data[0].order_details.length == 0 ? (
                <Text
                  style={{
                    marginTop: 7,
                    fontSize: normalize(14),
                    fontFamily: 'DMSans-Regular', //fontWeight: '600',
                    color: '#333333',
                    //paddingLeft: wH / 120,
                  }}>
                  33rd block, 1st street, unit number 6,Singapore - 123456
                </Text>
              ) : (
                <Text
                  style={{
                    marginTop: 7,
                    fontSize: normalize(14),
                    fontFamily: 'DMSans-Regular', //fontWeight: '600',
                    color: '#333333',
                    //paddingLeft: wH / 120,
                  }}>
                  {
                    dashBoardReducer.response.data[0].order_details[0]
                      .shipping_block_number
                  }{' '}
                  ,{' '}
                  {
                    dashBoardReducer.response.data[0].order_details[0]
                      .shipping_street_drive_number
                  }{' '}
                  {
                    dashBoardReducer.response.data[0].order_details[0]
                      .shipping_unit_number
                  }{' '}
                  -{' '}
                  {
                    dashBoardReducer.response.data[0].order_details[0]
                      .shipping_postal_code
                  }
                </Text>
              )}
            </View>
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
                backgroundColor: '#f1fbf2',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Doller width={wW / 8} height={wW / 8} />
                <View style={{marginLeft: wW / 45}}>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#71D67A',
                    }}>
                    Collect cash: ${collectedCash}
                  </Text>
                  <Text
                    style={{
                      fontSize: normalize(14),
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
                <Text
                  style={{
                    fontSize: normalize(12),
                    fontFamily: 'DMSans-Regular',
                    //fontWeight: '600',
                    color: '#9CA4BD',
                  }}>
                  Collected
                </Text>
                {isVerifySigned === 'true' ? (
                  <View
                    style={{
                      width: wW / 7,
                      height: wW / 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: wW / 45,
                      borderColor: 'grey',
                      borderWidth: 1,
                      flexDirection: 'row',
                      marginTop: wW / 120,
                      backgroundColor: '#D0D5DD',
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular',
                        //fontWeight: '600',
                        color: '#9CA4BD',
                      }}>
                      $
                    </Text>

                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular',
                        //fontWeight: '600',
                        color: '#9CA4BD',
                      }}>
                      {'  512'}
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{
                      width: wW / 6,
                      height: wW / 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: wW / 45,
                      borderColor: 'grey',
                      borderWidth: 1,
                      flexDirection: 'row',
                      marginTop: wW / 120,
                      backgroundColor: '#FFFFFF',
                      paddingHorizontal:wW/120,
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular',
                       
                        color: '#9CA4BD',
                      }}>
                      $
                    </Text>
                    
                    <TextInput
                      maxLength={4}
                      style={{
                        height: '100%',
                        width:'77%',
                        fontSize: normalize(14),
                        fontFamily: 'DMSans-Regular',
                        color: '#000000',
                      }}
                      onChangeText={text => setCollectedCash(text)}
                      
      
        keyboardType="numeric"
                    />
                  </View>
                )}
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
                <DollerBlack
                  width={wW / 8}
                  height={wW / 8}
                  backgroundColor={'#344054'}
                />
                <View style={{marginLeft: wW / 45}}>
                  <Text
                    style={{
                      fontSize: normalize(15),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#344054',
                    }}>
                    Credit balance
                  </Text>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#8E8E8E',
                    }}>
                    2 Orders
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  //navigation.goBack();
                  setbalanceModel(true);
                }}
                style={{
                  //height: 50,
                  borderRadius: 4,
                }}>
                <View
                  style={{
                    width: wW / 5,
                    height: wW / 12,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    borderRadius: wW / 45,
                    borderColor: 'grey',
                    borderWidth: 1,
                    flexDirection: 'row',
                    marginTop: wW / 120,
                  }}>
                  <Text
                    style={{
                      fontSize: normalize(14),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#000000',
                    }}>
                    Settle
                  </Text>
                  <ArrowRight
                    width={wW / 35}
                    height={wW / 35}
                    backgroundColor={'#344054'}
                  />
                </View>
              </TouchableOpacity>
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
                <EditBlack width={wW / 8} height={wW / 8} />
                <View style={{marginLeft: wW / 45}}>
                  <Text
                    style={{
                      fontSize: normalize(15),
                      fontFamily: 'DMSans-Regular',
                      //fontWeight: '600',
                      color: '#344054',
                    }}>
                    E-Signature*
                  </Text>
                </View>
              </View>

              {isVerifySigned === 'true' ? (
                <View
                  setbalanceModel
                  style={{
                    //height: 50,
                    borderRadius: 4,
                  }}>
                  <View
                    style={{
                      width: wW / 6,
                      height: wW / 12,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      borderRadius: wW / 45,
                      borderColor: 'grey',
                      borderWidth: 1,
                      flexDirection: 'row',
                      marginTop: wW / 120,
                    }}>
                    <Done width={'30%'} height={'30%'} />
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular',
                        //fontWeight: '600',
                        color: '#71D67A',
                      }}>
                      Done
                    </Text>
                  </View>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('GetSignature');
                  }}
                  setbalanceModel
                  style={{
                    //height: 50,
                    borderRadius: 4,
                  }}>
                  <View
                    style={{
                      width: wW / 8,
                      height: wW / 12,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      borderRadius: wW / 45,
                      borderColor: 'grey',
                      borderWidth: 1,
                      flexDirection: 'row',
                      marginTop: wW / 120,
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(14),
                        fontFamily: 'DMSans-Regular',
                        //fontWeight: '600',
                        color: '#000000',
                      }}>
                      Get
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <View style={{}}>
          <View style={{position: 'absolute', bottom: wH / 20}}>
            <View
              style={{
                height: 1.1,
                width: wW / 1.1,

                backgroundColor: 'black',
              }}></View>
            <View style={{padding: wW / 15}}>
              <Text
                style={{
                  fontSize: normalize(16),
                  fontFamily: 'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#64748B',
                }}>
                Having problems?
              </Text>
              <View
                style={{
                  marginTop: wH / 45,
                  height: wH / 20,
                  width: wW / 2,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  borderColor: '#D0D5DD',
                  flexDirection: 'row',
                  borderWidth: 1.5,
                  borderRadius: wW / 45,
                }}>
                <Phone width={20} height={20} />
                <Text
                  style={{
                    fontSize: normalize(16),
                    fontFamily: 'DMSans-Regular',
                    fontWeight: '600',
                    color: '#64748B',
                  }}>
                  Contact admin
                </Text>
              </View>
            </View>
          </View>
          <SwipeButton
            containerStyles={{borderRadius: 5}}
            swipeSuccessThreshold={90}
            height={45}
            title="Order delivered"
            titleFontSize={normalize(15)}
            titleColor="#7D47EF"
            titleStyles={{fontFamily: 'DMSans-Regular'}}
            onSwipeSuccess={() => {
              deliveredCompleted();
              navigation.navigate('SuccessPage',);
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
  );
};

export default Delivered;

const styles = StyleSheet.create({});
