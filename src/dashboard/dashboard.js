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
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {FONTS} from '../themes/textfonts';
import Moment from 'moment';
import React, {useState, useEffect} from 'react';
import BreakTimer from '../assets/svg/breakTimer.svg';
import Clock from '../assets/svg/clock.svg';
import BlueblurEffect from '../assets/svg/BlueblurEffect.svg';
import {globalStyles, wH, wW, normalize} from '../styles/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwipeButton from 'rn-swipe-button';
import arrowRight from '../assets/arrowright.png';
import Notification from '../assets/svg/notification.svg';
import HanburgerMenu from '../assets/svg/hanburgerMenu.svg';
import 'react-native-gesture-handler';
import Selected from '../assets/svg/selected.svg';
import {useDispatch, useSelector} from 'react-redux';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScrollViewContext from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import {getTripDetails} from '../StateManagement/DashboardData/actions';
import {changeOrderStatus} from '../StateManagement/DeliveredData/actions';
const Dashboard = props => {
  const isFocused = useIsFocused();
  const [Isbreak, setIsBreak] = React.useState('false');
  const [token, setToken] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //const newDate = new Date("2016-01-04 10:34:23");
  const currentDate = new Date();
  const [newDate, setDate] = React.useState();
  const [newTime, setTime] = React.useState('');
  const loginData = useSelector(state => state.loginReducer);
  const dashBoardReducer = useSelector(state => state.DashBoardReducer);
  const [tripDetails, setTripDetails] = React.useState();
  let forceResetLastButton = null;
  useEffect(() => {
    /* console.error('RESPONSE +*+*+*+*+  '+JSON.stringify(dashBoardReducer.response?.data[0].order_details[0].order_status_name)); */
    (async function () {
      try {
        /* console.error('RESPONSE +*+*+*+*+  '+JSON.stringify(dashBoardReducer.response?.data[0].order_details[0].order_status_name)); */
        const isBreakValue = await AsyncStorage.getItem('IsBreak');
        setIsBreak(isBreakValue);
        const loginStatus = await AsyncStorage.getItem('bearerToken');
        setToken(loginStatus);
        dispatch(getTripDetails(loginStatus));
      } catch (e) {
        console.error('ERROR +*+*+*+*+  ' + e);
      }
    })();

    // dashBoardReducer.response?.data[0]?.order_details[0]?.order_status_name ===
    // 'Dispatch'
    //   ? setIsLoaded(false)
    //   : setIsLoaded(true);
  }, [props, isFocused]);

  const [maxChip, setMaxChip] = React.useState([
    {
      name: 'Customer1',
      number: '+65-987645312',
      address: '33rd block, 1st street, unit number 6,Singapore - 123456',
      isLoaded: false,
    },
    {
      name: 'Customer2',
      number: '+65-96574555',
      address: '76th block, 2nd street, unit number 7,Singapore - 654321',
      isLoaded: false,
    },
    {
      name: 'Customer3',
      number: '+65-96574555',
      address: '76th block, 2nd street, unit number 7,Singapore - 654321',
      isLoaded: false,
    },
  ]);

  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [emailError, setemailError] = React.useState(true);
  const [swipe, setSwipe] = React.useState(false);
  const [submitDisable, setSubmitDisable] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [packageName, onChangepackageName] = React.useState('');
  const [packingNumber, setPackingNumber] = React.useState();
  const [isLoaded, setIsLoaded] = React.useState('');
  const [isLoadedpage, setIsLoadedpage] = React.useState(false);

  const sendMail = async id => {
    navigation.navigate('orderDetails', {id});

    // setloading(true)
  };

  return (
    <View style={{backgroundColor: '#F9FAFC', flex: 1}}>
      <ScrollView>
        <Modal visible={isLoadedpage} animationType="slide" transparent={true}>
          <TouchableOpacity
            onPress={() => {
              setIsLoadedpage(false);

              // console.log('')
              //setIsLoaded(isLoaded);
            }}
            style={{
              //height: 50,
              borderRadius: 4,
            }}>
            <View
              style={{
                height: wH,
                width: wW,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <View
                style={{
                  height: wW / 2,
                  width: wW / 1.5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: wW / 75,
                }}>
                <View
                  style={{
                    height: '25%',
                    width: wW / 1.5,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: normalize(20),
                      fontWeight: '500',
                      color: '#333333',
                    }}>
                    Order Status
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#CCCCCC',
                      width: '100%',
                      height: '1%',
                    }}></View>
                </View>
                <View
                  style={{
                    height: '75%',
                    paddingVertical: wH / 25,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {
                      /* dashBoardReducer.response?.data[0]?.order_details[
                      packingNumber
                    ]?.order_status_name === 'Dispatch' */ isLoaded=== "Dispatch"? (
                        <Selected width={wW / 20} height={wW / 20} />
                      ) : (
                        <View style={{width: wW / 20}}></View>
                      )
                    }
                    <TouchableOpacity
                      onPress={() => {
                        setIsLoadedpage(false);
                        // setIsLoaded(false);
                        dispatch(
                          changeOrderStatus(
                            {
                              trip_id: dashBoardReducer.response.data[0].id,
                              customer_id:
                                dashBoardReducer.response.data[0].customer_id,
                              order_id:
                                dashBoardReducer.response.data[0].order_details[
                                  packingNumber
                                ].order_id,
                              order_status: 'Dispatch',
                            },
                            token,
                          ),
                        );
                      }}
                      style={{
                        //height: 50,
                        borderRadius: 4,
                        marginHorizontal: wW / 15,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#fff6e5',
                          //marginTop: 10,
                          borderRadius: wW / 25,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingHorizontal: wW / 45,
                          width: wW / 3,
                          height: wW / 13,
                        }}>
                        <Image
                          source={require('../assets/packageYellow.png')}
                          style={{width: wW / 20, height: wW / 20}}
                        />
                        <Text
                          style={{
                            fontFamily: 'DMSans-Regular',
                            fontSize: normalize(15),
                            //fontWeight: '600',
                            color: '#FFA500',
                            paddingLeft: wH / 155,
                          }}>
                          Packing
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {
                      /* dashBoardReducer.response?.data[0]?.order_details[
                      packingNumber
                    ]?.order_status_name === 'On-Transit' */ isLoaded=== "On-Transit" ? (
                        <Selected width={wW / 20} height={wW / 20} />
                      ) : (
                        <View style={{width: wW / 20}}></View>
                      )
                    }
                    <TouchableOpacity
                      onPress={() => {
                        setIsLoadedpage(false);
                        //setIsLoaded(true);
                        dispatch(
                          changeOrderStatus(
                            {
                              trip_id: dashBoardReducer.response.data[0].id,
                              customer_id:
                                dashBoardReducer.response.data[0].customer_id,
                              order_id:
                                dashBoardReducer.response.data[0].order_details[
                                  packingNumber
                                ].order_id,
                              order_status: 'On-Transit',
                            },
                            token,
                          ),
                        );
                        dispatch(getTripDetails(token));
                        //changePackageStatus(packageName, true);
                        // navigation.navigate(
                        //   'ResetPassword',
                        // );
                      }}
                      style={{
                        //height: 50,
                        borderRadius: 4,
                        marginHorizontal: wW / 15,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#f1fbf2',

                          borderRadius: wW / 25,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingHorizontal: wW / 45,
                          width: wW / 3,
                          height: wW / 13,
                        }}>
                        <Image
                          source={require('../assets/package.png')}
                          style={{width: wW / 20, height: wW / 20}}
                        />
                        <Text
                          style={{
                            fontFamily: 'DMSans-Regular',
                            fontSize: normalize(15),
                            //fontWeight: '600',
                            color: '#71D67A',
                            paddingLeft: wH / 155,
                          }}>
                          Loaded
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        {dashBoardReducer.response == '' ? (
          <View
            style={{
              height: '80%',
              width: wW,
              marginTop: wH / 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/loading.png')}
              style={{width: 150, height: 150, opacity: 0.3}}></Image>
            <Text
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: normalize(16),
                // fontWeight: '600',
                marginTop: wH / 55,
                color: '#8E8E8E',
              }}>
              Order in Progress
            </Text>
          </View>
        ) : (
          <View
            style={{
              //height: wH*2,
              //backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: wW / 1.15,
                //paddingHorizontal: wW / 18,
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: normalize(22),

                  color: 'black',
                  fontFamily: 'DMSans-Bold',
                }}>
                Welcome Driver
              </Text>
            </View>
            {dashBoardReducer.response.data === 'No Data Found' ? (
              <View
                style={{
                  height: wH / 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Bold',
                    fontSize: normalize(16),
                    // fontWeight: '600',
                    marginTop: wH / 55,
                    color: '#8E8E8E',
                  }}>
                  Order in Progress
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: wH / 5,
                  paddingHorizontal: wW / 1.5,
                  marginTop: wH / 85,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: wH / 6.5,
                    width: wW / 1.15,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    borderColor: '#CCCCCC',
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      height: wH / 8,
                      width: wW / 2.5,
                      backgroundColor: 'white',
                      justifyContent: 'space-between',
                      paddingLeft: wH / 60,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'DMSans-Regular',
                        fontSize: normalize(14),
                        //fontWeight: '600',
                        color: '#7D47EF',
                      }}>
                      Trip name
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'DMSans-Regular',
                        fontSize: normalize(15),
                        //fontWeight: '600',
                        color: 'black',
                        paddingLeft: wH / 120,
                      }}>
                      {/* singapore */}{' '}
                      {dashBoardReducer.response === ''
                        ? 'singapore'
                        : dashBoardReducer.response?.data[0]?.trip_name}
                    </Text>
                    <View style={{height: wH / 50}}></View>
                  </View>
                  <View
                    style={{
                      height: wH / 6.5,
                      width: 1,
                      backgroundColor: '#CCCCCC',
                    }}></View>

                  <View
                    style={{
                      height: wH / 8,
                      width: wW / 2.19,
                      backgroundColor: 'white',
                      justifyContent: 'space-between',
                      paddingLeft: wH / 60,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'DMSans-Regular',
                        fontSize: normalize(14),
                        //fontWeight: '600',
                        color: '#7D47EF',
                      }}>
                      Trip time
                    </Text>
                    <View style={{alignItems: 'center', marginTop: wH / 55}}>
                      <View
                        style={{
                          backgroundColor: '#f4f4f4',
                          borderRadius: 10,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingHorizontal: wW / 45,
                          width: wW / 3.5,
                          height: wW / 18,
                        }}>
                        <Image
                          source={require('../assets/calendar.png')}
                          style={{width: wW / 35, height: wW / 30}}
                        />
                        <Text
                          style={{
                            fontFamily: 'DMSans-Regular',
                            fontSize: normalize(13),
                            //fontWeight: '600',
                            color: 'black',
                            paddingLeft: wH / 120,
                          }}>
                          22-11-2022
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#f4f4f4',
                          marginTop: 10,
                          borderRadius: 10,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingHorizontal: wW / 45,
                          width: wW / 3,
                          height: wW / 18,
                        }}>
                        {/* <Image
                      source={require('../assets/clock.png')}
                      style={{width: wW / 40, height: wW / 35}}
                    /> */}
                        <Clock width={wW / 35} height={wW / 35} />
                        <Text
                          style={{
                            fontFamily: 'DMSans-Regular',
                            fontSize: normalize(13),
                            //fontWeight: '600',
                            color: 'black',
                            paddingLeft: wH / 155,
                          }}>
                          {dashBoardReducer.response === ''
                            ? '000'
                            : (dashBoardReducer.response?.data[0]?.from_time).substring(
                                0,
                                2,
                              )}{' '}
                          AM -{' '}
                          {dashBoardReducer.response === ''
                            ? '00'
                            : (dashBoardReducer.response?.data[0]?.from_time).substring(
                                0,
                                2,
                              )}{' '}
                          AM
                        </Text>
                      </View>
                    </View>
                    <View style={{height: wH / 50}}></View>
                  </View>
                </View>
              </View>
            )}

            <View
              style={{
                flexDirection: 'row',
                width: wW / 1.15,
                //paddingHorizontal: wW / 18,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: normalize(16),
                  fontWeight: '500',
                  color: 'black',
                }}>
                Assigned Trips -{' '}
                {dashBoardReducer.response.data != 'No Data Found'
                  ? dashBoardReducer.response.data[0].order_details.length
                  : '0'}
                {/* {maxChip.length} */}
              </Text>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: normalize(12),
                  // fontWeight: '600',
                  color: 'black',
                }}>
                Embark -{' '}
                {dashBoardReducer.response.data != 'No Data Found'
                  ? Moment(newDate).format('h:mm')
                  : '10:00 AM'}
              </Text>
            </View>

            <View style={{}}>
              {dashBoardReducer.response.data != 'No Data Found' ? (
                dashBoardReducer.response.data[0].order_details.map(
                  (item, i) => (
                    <View
                      key={item.key}
                      style={{
                        // height: wH / 5,
                        //paddingHorizontal: wW / 1.5,
                        marginTop: wH / 85,
                        width: wW /* opacity:true ? 5 : 0.2, */,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          height: wH / 4.2,
                          paddingVertical: wW / 85,
                          borderRadius: 8,
                          backgroundColor: 'white',
                          borderColor: '#CCCCCC',
                          borderWidth: 1,
                          //flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            //backgroundColor: 'white',
                            alignItems: 'center',
                            width: wW / 1.15,
                            paddingHorizontal: wW / 35,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{}}>
                            <Text
                              style={{
                                fontFamily: 'DMSans-Regular',
                                fontSize: normalize(14),
                                //fontWeight: '600',
                                color: '#7D47EF',
                                paddingVertical: wW / 55,
                                marginTop: wW / 55,
                              }}>
                              {item.customer_name}
                            </Text>
                            <Text
                              style={{
                                fontFamily: 'DMSans-Regular',
                                fontSize: normalize(12),
                                //fontWeight: '600',
                                color: '#8E8E8E',
                                //paddingLeft: wH / 120,
                              }}>
                              +65 {item.customer_contact_number}
                            </Text>
                          </View>
                          <View
                            style={{
                              // height: wH / 8,
                              width: wW / 2.5,
                              backgroundColor: 'white',
                              //justifyContent:'space-between',
                              paddingLeft: wH / 60,
                              alignItems: 'flex-end',
                            }}>
                            <View
                              style={{
                                backgroundColor: '#f4f4f4',
                                marginTop: 10,
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: wW / 45,
                                width: wW / 6,
                                height: wW / 18,
                              }}>
                              <Image
                                source={require('../assets/trip.png')}
                                style={{width: wW / 40, height: wW / 35}}
                              />
                              <Text
                                style={{
                                  fontFamily: 'DMSans-Regular',
                                  fontSize: normalize(13),
                                  //fontWeight: '600',
                                  color: 'black',
                                  paddingLeft: wH / 155,
                                }}>
                                Trip
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <TouchableOpacity
                                onPress={() => {
                                  // setIsLoaded(true);
                                  // navigation.navigate(
                                  //   'ResetPassword',
                                  // );
                                  setIsLoadedpage(true);
                                  onChangepackageName(item.name);
                                  setPackingNumber(i);
                                  setIsLoaded(
                                    dashBoardReducer.response?.data[0]
                                      ?.order_details[i]?.order_status_name,
                                  );
                                  console.log('order Id :: ' + i);
                                  //setIsLoaded(isLoaded);
                                }}
                                style={{
                                  //height: 50,
                                  borderRadius: 4,
                                }}>
                                {dashBoardReducer.response?.data[0]
                                  ?.order_details[i]?.order_status_name ===
                                'Dispatch' ? (
                                  <View
                                    style={{
                                      backgroundColor: '#f4f4f4',
                                      marginTop: 10,
                                      borderRadius: 10,
                                      flexDirection: 'row',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      paddingHorizontal: wW / 45,
                                      width: wW / 4.8,
                                      height: wW / 18,
                                    }}>
                                    <Image
                                      source={require('../assets/packageYellow.png')}
                                      style={{width: wW / 30, height: wW / 30}}
                                    />
                                    <Text
                                      style={{
                                        fontFamily: 'DMSans-Regular',
                                        fontSize: normalize(13),
                                        //fontWeight: '600',
                                        color: '#FFA500',
                                        paddingLeft: wH / 155,
                                      }}>
                                      Packing
                                    </Text>
                                  </View>
                                ) : (
                                  <View
                                    style={{
                                      backgroundColor: '#f4f4f4',
                                      marginTop: 10,
                                      borderRadius: 10,
                                      flexDirection: 'row',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      paddingHorizontal: wW / 45,
                                      width: wW / 4.8,
                                      height: wW / 18,
                                    }}>
                                    <Image
                                      source={require('../assets/package.png')}
                                      style={{width: wW / 30, height: wW / 30}}
                                    />
                                    <Text
                                      style={{
                                        fontFamily: 'DMSans-Regular',
                                        fontSize: normalize(13),
                                        //fontWeight: '600',
                                        color: '#71D67A',
                                        paddingLeft: wH / 155,
                                      }}>
                                      Loaded
                                    </Text>
                                  </View>
                                )}
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            width: wW / 1.15,
                            paddingHorizontal: wW / 18,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: wW / 1.24,
                              height: 1,
                              backgroundColor: '#CCCCCC',
                              marginVertical: wW / 40,
                            }}></View>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: wW / 1.15,
                            alignItems: 'center',
                            paddingHorizontal: wW / 35,
                          }}>
                          <View
                            style={{
                              height: wW / 5.3,
                              width: wW / 1.7,
                              borderWidth: 1,
                              borderColor: '#CCCCCC',
                              borderRadius: 5,
                              alignItems: 'flex-start',
                              paddingHorizontal: wW / 40,
                              justifyContent: 'center',
                            }}>
                            <View style={{width: '90%'}}>
                              <Text
                                style={{
                                  fontFamily: 'DMSans-Regular',
                                  fontSize: normalize(14),
                                  //fontWeight: '600',
                                  color: '#9CA4BD',
                                }}>
                                Address:
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontFamily: 'DMSans-Regular',
                                marginTop: 7,
                                fontSize: normalize(12),
                                fontWeight: '400',
                                color: '#333333',
                                //paddingLeft: wH / 120,
                              }}>
                              {item.shipping_block_number}{' '}
                              {item.shipping_street_drive_number}{' '}
                              {item.shipping_unit_number} -{' '}
                              {item.shipping_postal_code}
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => {
                              sendMail(i);
                              //navigation.navigate('orderDetails');
                            }}
                            style={{
                              //height: 50,
                              borderRadius: 4,
                            }}>
                            <View
                              style={{
                                backgroundColor: '#f4f4f4',
                                marginTop: 10,
                                borderRadius: wW / 25,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: wW / 45,
                                width: wW / 6,
                                height: wW / 16,
                              }}>
                              {/*  <Image
                    source={require('../assets/trip.png')}
                    style={{width: wW / 40, height: wW / 35}}
                  /> */}
                              <Text
                                style={{
                                  fontFamily: 'DMSans-Regular',
                                  fontSize: normalize(13),
                                  //fontWeight: '600',
                                  color: 'black',
                                  paddingLeft: wH / 155,
                                }}>
                                View
                              </Text>
                              <Text
                                style={{
                                  fontFamily: 'DMSans-Regular',
                                  fontSize: normalize(13),
                                  //fontWeight: '600',
                                  color: 'black',
                                  paddingLeft: wH / 155,
                                }}>
                                {'>'}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View></View>
                      </View>
                      {i + 1 == maxChip.length ? (
                        <View style={{height: wH / 5}}></View>
                      ) : (
                        <></>
                      )}
                    </View>
                  ),
                )
              ) : (
                <View
                  style={{
                    height: 150,
                    width: 150,
                    marginTop: wH / 8,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'DMSans-Bold',
                      fontSize: normalize(16),
                      // fontWeight: '600',
                      marginTop: wH / 45,
                      color: '#8E8E8E',
                    }}>
                    Order in Progress
                  </Text>
                </View>
              )}

              {Isbreak === 'true' ? (
                <View
                  style={{
                    height: wH / 1.5,
                    position: 'absolute',
                    width: wW,
                    justifyContent: 'center',
                    alignItems: 'center',
                    //backgroundColor:rgba(255, 0, 0, 0.2),
                    // shadowColor: '#02194D',
                    // shadowOffset: {width: 0, height: 12},
                    // shadowOpacity: 0.58,
                    // shadowRadius: 16.0,
                    // elevation: 500,
                  }}>
                  <BlurView
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                    blurType="light"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="red"
                  />
                  <BreakTimer width={wW / 3} height={wW / 3} />
                  <Text
                    style={{
                      marginTop: wH / 55,
                      fontFamily: 'DMSans-Bold',
                      fontSize: normalize(22),
                      // fontWeight: '700',
                      color: '#333333',
                      paddingLeft: wH / 155,
                    }}>
                    In-break
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        )}
      </ScrollView>
      <View
        style={{
          bottom: -4,
          width: wW,
          alignItems: 'center',
          position: 'absolute',
        }}>
        <SwipeButton
          // disabled={true}
          //forceReset={swipe}
          containerStyles={{borderRadius: 5}}
          //disable the button by doing true (Optional)
          swipeSuccessThreshold={90}
          height={45}
          forceReset={reset => {
            forceResetLastButton = reset;
          }}
          //height of the button (Optional)
          width={wW}
          //width of the button (Optional)
          title="Slide to start ride"
          titleFontSize={normalize(15)}
          titleColor="#7D47EF"
          titleStyles={{fontFamily: 'DMSans-Regular'}}
          //Text inside the button (Optional)
          //thumbIconImageSource={thumbIcon}
          //You can also set your own icon (Optional)
          disabledtitleColor="transparent"
          onSwipeSuccess={() => {
            // navigation.navigate('orderDetails')
            if (dashBoardReducer.response.data != 'No Data Found') {
              navigation.navigate('RideDetails');
            }

            forceResetLastButton && forceResetLastButton();
          }}
          //disabledRailBackgroundColor="transparent"
          disabledThumbIconBorderColor="transparent"
          //After the completion of swipe (Optional)
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
        {/* <View style={{width:wW,height:wW/8,backgroundColor:'white',flexDirection:'row',paddingHorizontal:wW/5,justifyContent:'space-between',alignItems:'center'}}><Image
                    source={require('../assets/home.png')}
                    style={{width: wW / 7, height: wW / 10}}
                  /><Image
                  source={require('../assets/notification.png')}
                  style={{width: wW / 17, height: wW / 17}}
                /></View> */}
      </View>
    </View>
  );
};
export default Dashboard;
const styles = StyleSheet.create({});
