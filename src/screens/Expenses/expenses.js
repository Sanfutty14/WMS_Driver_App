import {StyleSheet, TouchableOpacity,Modal,ScrollView, Image, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {getExpenses} from '../../StateManagement/ExpensesData/actions';
import {useNavigation} from '@react-navigation/native';
import {normalize, wH, wW} from '../../styles/globalStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import BackArrow from '../../assets/svg/backArrow.svg';
import Person from '../../assets/svg/person.svg';
import Phone from '../../assets/svg/phone.svg';
import Document from '../../assets/svg/document.svg';
import {useDispatch, useSelector} from 'react-redux';
import {FONTS} from '../../themes/textfonts';
import Moment from 'moment';
import { ActivityIndicator, MD2Colors } from 'react-native-paper'
const Expenses = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.loginReducer);
  const expensesData = useSelector(state => state.ExpensesReducer);
  const [isResponse, setIsResponse] = React.useState(false);
  const [expensesDataResponse, setexpensesDataResponse] = React.useState([]);
  
  useEffect(() => {
    
    dispatch(
      getExpenses(
        loginData.response.data.token,
      ),
    );
    
   
    // setexpensesDataResponse(expensesData);
    
  }, []);
  useEffect(() => {
    
    expensesData.isLoading ? console.log('Expenses getDetails  1'+JSON.stringify(expensesData)):console.log('Expenses getDetails  2'+JSON.stringify(expensesData));
    setIsResponse(true);
    // setexpensesDataResponse(expensesData);
    
  }, [expensesData]);
  
  console.log('Expenses getDetails :::::::::::::::::::::::  '+JSON.stringify(expensesData));
  
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
      
      <View style={{alignItems: 'center',height: wH}}>
      
      <ScrollView>
        {isResponse ?
        <View style={{height:wH*3.5}}>
        
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
            $ {expensesData.response?.data?.total_driver_expense_amount}
          </Text>
          <View
            style={{
              marginTop:wH/40,
              height: 2,
              width: '100%',
              backgroundColor: '#8E8E8E',
            }}></View>
          {isResponse  ? (<View>{expensesData.response?.data?.driver_expense_details?.map((item, i) => (
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
                    justifyContent: 'space-evenly',
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
                      {Moment(item.expense_date).format('MMM')}
                    </Text>
                    <Text
                      style={{
                        fontSize: normalize(16),
                        fontFamily: 'DMSans-Regular',
                        color: '#344054',
                      }}>
                      {Moment(item.expense_date).format('DD')}
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
                      {item.expense_type}
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
                  ${item.expense_amount}
                </Text>
              </View>
            </View>
          ))}</View>):(<></>)}
        </View>
        </View>:
        <Modal visible={true } animationType="slide" transparent={true}>
          <View
            style={{
              height: wH,
              width: wW,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}><ActivityIndicator animating={true} color={'white'} /></View></Modal>
        }
        </ScrollView>
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
