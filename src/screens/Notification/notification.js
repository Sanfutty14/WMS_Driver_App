import {
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getExpenses} from '../../StateManagement/ExpensesData/actions';
import {useNavigation} from '@react-navigation/native';
import {normalize, wH, wW} from '../../styles/globalStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import BackArrow from '../../assets/svg/backArrow.svg';
import Person from '../../assets/svg/person.svg';
import DoneNotifi from '../../assets/svg/DoneNotifi.svg';
import Document from '../../assets/svg/document.svg';
import {useDispatch, useSelector} from 'react-redux';
import {FONTS} from '../../themes/textfonts';
import Moment from 'moment';
import Logo from '../../assets/svg/logo.svg';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {getNotification} from '../../StateManagement/NotificationData/actions';
import { filterProductDetails, getCategoryDetails } from '../../StateManagement/SampleApiData/actions';
const Notification = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.loginReducer);
  const expensesData = useSelector(state => state.ExpensesReducer);
  const [isResponse, setIsResponse] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const notificationData = useSelector(state => state.NotificationDataReducer);
  const [expensesDataResponse, setexpensesDataResponse] = React.useState([]);

  useEffect(() => {
    dispatch(getNotification({limit: '3'}, loginData.response.data.token));
    //dispatch(filterProductDetails());
    // expensesData.isLoading
    //   ? console.log('Expenses getDetails  1' + JSON.stringify(expensesData))
    //   : console.log('Expenses getDetails  2' + JSON.stringify(expensesData));
    // setexpensesDataResponse(expensesData);
  }, []);

  useEffect(() => {
    if (notificationData.response.data) {
      console.log(
        'NotificationData getDetails  2',
        notificationData.response.data.notification_list,
      );
      setMessages(notificationData.response.data.notification_list);
      setIsResponse(true);
    }

    // setexpensesDataResponse(expensesData);
  }, [notificationData]);

  //console.log('Expenses getDetails  '+JSON.stringify(expensesData));

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
    <View style={{height: wH,backgroundColor:'#F9FAFC'}}>
      <View style={{alignItems: 'center', height: wH}}>
        <ScrollView>
          {isResponse ? (
            <View style={{height: wH * 3.5}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: wW,
                  paddingHorizontal: wW / 18,
                  marginTop: wH / 40,
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
                <Logo width={42} height={42} />
                <View style={{height: 30, width: 30}}></View>
              </View>
              <View
                style={{
                  height: wH / 6,
                  width: wW,
                  //
                  marginTop: wH / 20,
                }}>
                <Text
                  style={{
                    fontSize: normalize(16),
                    fontFamily: 'DMSans-Bold',
                    paddingHorizontal: wW / 18,
                    //fontWeight: '600',
                    color: '#8E8E8E',
                  }}>
                  Notifications
                </Text>
                {messages.map((item, i) => (
                  <View
                    style={{
                      height: wH/8.5,
                      width: wW,
                      paddingHorizontal: wW / 18,
                      flexDirection:'row',alignItems:'center'
                    }}><View
                    style={{
                      height: wW/8.5,
                      width: wW/8.5,
                      backgroundColor: '#F4EBFF',
                      borderRadius:wW/3,marginRight:wW/55,alignItems:'center',justifyContent:'center'
                    }}><DoneNotifi width={20} height={20} /></View><View
                    style={{
                      height: '45%',
                      width: '70%',
                      
                     justifyContent:'space-between'
                    }}><Text
                    style={{
                      fontSize: normalize(16),
                      fontFamily: 'DMSans-Bold',
                      
                      //fontWeight: '600',
                      color: '#333333',
                    }}>
                    {item.creats_for}
                  </Text><Text
                  style={{
                    fontSize: normalize(16),
                    fontFamily: 'DMSans-Regular',
                    
                    //fontWeight: '600',
                    color: '#8E8E8E',
                  }}>
                  {item.description}
                </Text></View></View>
                ))}
              </View>
            </View>
          ) : (
            <Modal visible={true} animationType="slide" transparent={true}>
              <View
                style={{
                  height: wH,
                  width: wW,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <ActivityIndicator animating={true} color={'white'} />
              </View>
            </Modal>
          )}
        </ScrollView>
      </View>
      
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
