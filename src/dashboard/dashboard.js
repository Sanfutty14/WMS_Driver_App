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
import {useNavigation} from '@react-navigation/native';
import {FONTS} from '../themes/textfonts';
import React, {useState} from 'react';
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
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScrollViewContext from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
const Dashboard = ({}) => {
  const [Isbreak, setIsBreak] = React.useState('false');
  const navigation = useNavigation();
  useState(async () => {
    //let signatureimg = await AsyncStorage.getItem("IsBreak");
    setIsBreak(await AsyncStorage.getItem('IsBreak'));
    //console.log("helloo "+signature);
  }, []);
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
  const [passwordError, setPasswordError] = React.useState(true);
  const [submitDisable, setSubmitDisable] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [packageName, onChangepackageName] = React.useState('');
  const [packingNumber, setPackingNumber] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isLoadedpage, setIsLoadedpage] = React.useState(false);
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
  const changePackageStatus = (id, status) => {
    console.log(id);
    let updateArray = maxChip;
    let index = maxChip.findIndex(item => item.name === id);
    updateArray[index].isLoaded = status;
    setMaxChip([...updateArray]);
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
      navigation.navigate('orderDetails');
    }

    // setloading(true)
  };
  return (
    <View style={{backgroundColor: '#F9FAFC'}}>
      <ScrollView>
        <Modal visible={isLoadedpage} animationType="slide" transparent={true}>
          <View
            style={{
              height: wH,
              width: wW,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
            <View
              style={{
                height: wW / 2,
                width: wW / 1.5,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-between',borderRadius:wW/75
              }}><View style={{height:'25%',
              width: wW / 1.5, alignItems: 'center',justifyContent:'space-around'}}>
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
                }}></View></View>
              <View style={{height:'75%',paddingVertical:wH/25,justifyContent:'space-between',}}><View style={{flexDirection: 'row', alignItems: 'center'}}>
                {!isLoaded ? (
                  <Selected width={wW / 20} height={wW / 20} />
                ) : (
                  <View style={{width: wW / 20}}></View>
                )}
                <TouchableOpacity
                  onPress={() => {
                    setIsLoadedpage(false);
                    setIsLoaded(false);
                    changePackageStatus(packageName, false);
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
              <View style={{flexDirection: 'row', alignItems: 'center',}}>
                {isLoaded ? (
                  <Selected width={wW / 20} height={wW / 20} />
                ) : (
                  <View style={{width: wW / 20}}></View>
                )}
                <TouchableOpacity
                  onPress={() => {
                    setIsLoadedpage(false);
                    setIsLoaded(true);
                    changePackageStatus(packageName, true);
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
              </View></View>
              
            </View>
          </View>
        </Modal>
        <View
          style={{
            height: '100%',
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
                  Singapore west
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
                      10 AM - 11 AM
                    </Text>
                  </View>
                </View>
                <View style={{height: wH / 50}}></View>
              </View>
            </View>
          </View>

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
              Assigned Trips - {maxChip.length}
            </Text>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: normalize(12),
                // fontWeight: '600',
                color: 'black',
              }}>
              Embark - 10:00 AM
            </Text>
          </View>

          <View style={{}}>
            {maxChip.map((item, i) => (
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
                    height: wH / 4.5,
                    paddingVertical:wW/85,
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
                    <View>
                      <Text
                        style={{
                          fontFamily: 'DMSans-Regular',
                          fontSize: normalize(14),
                          //fontWeight: '600',
                          color: '#7D47EF',
                          marginTop: wW / 55,
                        }}>
                        Customer {i + 1}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'DMSans-Regular',
                          fontSize: normalize(12),
                          //fontWeight: '600',
                          color: '#8E8E8E',
                          //paddingLeft: wH / 120,
                        }}>
                        {item.number}
                      </Text>
                    </View>
                    <View
                      style={{
                        // height: wH / 8,
                        width: wW / 2.5,
                        backgroundColor: 'white',
                        //justifyContent: 'space-between',
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
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                          onPress={() => {
                            // setIsLoaded(true);
                            // navigation.navigate(
                            //   'ResetPassword',
                            // );
                            setIsLoadedpage(true);
                            onChangepackageName(item.name);
                            setIsLoaded(item.isLoaded);
                          }}
                          style={{
                            //height: 50,
                            borderRadius: 4,
                          }}>
                          {item.isLoaded ? (
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
                        height: 1.5,
                        backgroundColor: '#CCCCCC',
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
                          color: 'black',
                          //paddingLeft: wH / 120,
                        }}>
                        {item.address}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('orderDetails');
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
            ))}

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
      </ScrollView>
      <View style={{bottom: wH / 55, position: 'absolute'}}>
        <SwipeButton
          //disabled={false}
          containerStyles={{borderRadius: 5}}
          //disable the button by doing true (Optional)
          swipeSuccessThreshold={90}
          height={45}
          //height of the button (Optional)
          width={wW}
          //width of the button (Optional)
          title="Slide to start ride"
          titleFontSize={normalize(15)}
          titleColor='#7D47EF'
          titleStyles={{fontFamily:'DMSans-Regular'}}
          //Text inside the button (Optional)
          //thumbIconImageSource={thumbIcon}
          //You can also set your own icon (Optional)
          onSwipeSuccess={() => {
            // navigation.navigate('orderDetails')
            navigation.navigate('RideDetails');
          }}
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
