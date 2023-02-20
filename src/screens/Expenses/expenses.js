import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {normalize, wH, wW} from '../../styles/globalStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import BackArrow from '../../assets/svg/backArrow.svg';
import Person from '../../assets/svg/person.svg';
import Phone from '../../assets/svg/phone.svg';
import Document from '../../assets/svg/document.svg';
import {FONTS} from '../../themes/textfonts';
const Expenses = () => {
  const navigation = useNavigation();
  const [maxChip, setMaxChip] = React.useState([
    {
      name: 'Parking Fee',
      month: 'Jan',
      date: '01',
      expenses: '10',
    },
    {
      name: 'Fuel',
      month: 'Jan',
      date: '05',
      expenses: '5.95',
    },
    {
      name: 'Others',
      month: 'Jan',
      date: '06',
      expenses: '5',
    },
  ]);
  return (
    <View style={{height: wH}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: wW,
            paddingHorizontal: wW / 18,
            marginTop: wH / 40,
            justifyContent: 'space-between',alignItems:'center',
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
          <Text
            style={{
              fontSize: normalize(16),
              fontFamily: 'DMSans-Bold',
              fontWeight: '600',
              color: '#64748B',
            }}>
             Expenses
          </Text>
          <View style={{height: 30, width: 30}}></View>
        </View>
        <View
          style={{
            height: wH / 6,
            width: wW,
            paddingHorizontal: wW / 18,
            marginTop: wH / 20,
          }}>
          <Text
            style={{
              fontSize: normalize(16),
              fontFamily: 'DMSans-Regular',
              //fontWeight: '600',
              color: '#8E8E8E',
            }}>
            Total Expenses
          </Text>
          <Text
            style={{
              fontSize: normalize(36),
              fontFamily: 'DMSans-Regular',
              marginTop: wW / 85,
              fontWeight: '700',
              color: '#344054',
            }}>
            $20.95
          </Text>
          <View
            style={{
              marginTop:wH/40,
              height: 2,
              width: '100%',
              backgroundColor: '#8E8E8E',
            }}></View>
          {maxChip.map((item, i) => (
            <View
              style={{
                width: '100%',
                height: wH / 11,
                borderWidth: 1,
                borderRadius: wW / 85,
                marginTop: wH / 55,
                borderColor: '#CCCCCC',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: wH / 11,
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '65%', height: '100%',alignItems:'center',
                    justifyContent: 'space-evenly',/* backgroundColor:'red' */
                  }}>
                  <View
                    style={{
                      height: wH / 14.5,
                      width: wH / 14.5,
                      borderWidth: 1,
                      borderRadius: wW / 12,
                      borderColor: '#CCCCCC',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(12),
                        fontFamily: 'DMSans-Regular',
                        color: '#344054',
                      }}>
                      {item.month}
                    </Text>
                    <Text
                      style={{
                        fontSize: normalize(16),
                        fontFamily: 'DMSans-Regular',
                        color: '#344054',
                      }}>
                      {item.date}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 1,
                      height: wH / 14.5,
                      backgroundColor: '#8E8E8E',
                    }}></View>
                  <View
                    style={{
                      height: wH / 14.5,
                      height: wH / 13,
                      justifyContent: 'space-between',paddingVertical:wW/85
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(16),
                        
                        fontFamily: 'DMSans-Bold',
                        color: '#344054',
                      }}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        height: '55%',
                        width: wW / 4.1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderColor: '#D0D5DD',
                        flexDirection: 'row',
                        borderWidth: 1.5,
                        borderRadius: wW / 35,
                      }}>
                      <Document width={15} height={15} />
                      <Text
                        style={{
                          fontSize: normalize(12),
                          fontFamily: 'DMSans-Bold',
                         
                          color: '#64748B',
                        }}>
                        Download
                      </Text>
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: normalize(20),
                    marginRight: wW / 25,
                    fontWeight: '500',
                    fontFamily: 'DMSans-Bold',
                    color: '#344054',
                  }}>
                  ${item.expenses}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={{position: 'absolute', bottom: wH / 30}}>
        <View style={{width: wW, height: wH / 12, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddExpenses');
            }}
            style={{
              //height: 50,
              
              borderRadius: 4,
            }}>
            <View
              style={{
                width: wW / 1.4,
                height: wH / 18,
                backgroundColor: '#7D47EF',
                justifyContent: 'center',
                alignItems: 'center',borderRadius:wW/45
              }}>
              <Text
                style={{
                  fontSize: normalize(14),
                 
                 
                  fontFamily: 'DMSans-Bold',
                  color: 'white',
                }}>
                Add Expense
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
