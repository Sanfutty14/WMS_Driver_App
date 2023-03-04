import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {normalize, wH, wW} from '../../styles/globalStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import BackArrow from '../../assets/svg/backArrow.svg';
import Person from '../../assets/svg/person.svg';
import Upload from '../../assets/svg/Upload.svg';
import Calander from '../../assets/svg/Calander.svg';
import {Dropdown} from 'react-native-element-dropdown';
import {FONTS} from '../../themes/textfonts';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  addExpenses,
  getExpensesType,
} from '../../StateManagement/ExpensesData/actions';
import * as ImagePicker from 'react-native-image-picker';
const AddExpenses = () => {
  const navigation = useNavigation();
  const [categoryValue, setCategoryValue] = React.useState(null);
  const [amount, setAmount] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [newDate, setDate] = React.useState(new Date());
  const loginData = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  const [pickerResponse, setPickerResponse] = React.useState([]);
  const [pickerImage, setPickerImage] = React.useState('');
  const formData = new FormData();
  const [categoryItems, setCategoryItems] = React.useState([]);
  const dashBoardReducer = useSelector(state => state.DashBoardReducer);
  //const expensesData = useSelector(state => state.ExpensesReducer);
  const expensesTypes = useSelector(state => state.ExpensesTypeReducer);
  const [addMediaModalVisible, setAddMediaModalVisible] = React.useState(false);
  const [categoryTypes, setCategoryTypes] = React.useState([
    {label: 'Fuel', value: '1'},
    {label: 'Parking Fee', value: '2'},
    {label: 'Food', value: '3'},
    {label: 'Others', value: '4'},
  ]);
  useEffect(() => {
    try {
      dispatch(getExpensesType(loginData.response.data.token));
      
     
    } catch (e) {
      console.error('ERROR +*+*+*+*+  ' + e);
    }
  }, []);
  useEffect(() => {
    if(expensesTypes.response.data)
    {
      console.log('Expensess type :: ',expensesTypes.response.data)
      setCategoryItems(expensesTypes.response.data);
      setCategories();
    }
    
  }, [expensesTypes]);

  const onImageLibraryPress = React.useCallback(async () => {
    setAddMediaModalVisible(false);

    const options = {
      //   selectionLimit: 1,
      //   mediaType: 'photo',
      title: 'Video Picker',
      mediaType: 'any',
      includeBase64: false,
    };
    try {
      ImagePicker.launchImageLibrary(options, response => {
        setPickerResponse([response.assets[0]]);
        console.log('Response ********* ', pickerResponse[0]);
      });
    } catch {
      setPickerResponse([...pickerResponse]);
    }
  });
  const setCategories = () => {
   
    let updateArray = categoryTypes;
    categoryItems.map((item, i) => {
      updateArray[i].label = categoryItems[i].expense_type;
      //console.log('Expenses TYPE getDetails  1' + JSON.stringify(categoryItems[i].expense_type));
      setCategoryTypes([...updateArray]);
    });
  
  };
  const sendMail1 = () => {
    // setloading(true)
    console.log('data responses :::*******:::' + pickerResponse[0]);
    formData.append('expense_amount', amount);
    formData.append('expense_type_id', 1);
    formData.append('expense_date', Moment(newDate).format('yyyy-MM-DD'));
    //formData.append('expense_receipt',pickerResponse[0]);
    formData.append('expense_receipt', {
      uri: pickerResponse[0].uri,
      type: pickerResponse[0].type,
      name: 'image1.jpg',
      filename: pickerResponse[0].fileName,
    });
    formData.append('driver_id', dashBoardReducer.response.data[0].driver_id);
    //console.log('===============> ', formData);
    try {
      dispatch(addExpenses(formData, loginData.response.data.token));
    } catch (error) {
      console.log('ERROR ===============> ', formData);
    }
  };

  return (
    <View style={{height: wH}}>
      {expensesTypes.response.data === 'No Data Found' ? (
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
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: wW,
              paddingHorizontal: wW / 18,
              marginTop: wH / 40,
              alignItems: 'center',
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
            <Text
              style={{
                fontSize: normalize(16),
                fontFamily: 'DMSans-Bold',

                color: '#64748B',
              }}>
              Add Expense
            </Text>
            <View style={{height: 30, width: 30}}></View>
          </View>

          <View style={{width: wW, paddingHorizontal: wW / 18}}>
            <Text
              style={{
                fontSize: normalize(16),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
                marginTop: wH / 35,
              }}>
              Amount
            </Text>
            <TouchableOpacity
              onPress={() => {
                //navigation.navigate('SignaturePad');
              }}
              setbalanceModel
              style={{
                //height: 50,
                borderRadius: 4,
              }}>
              <TextInput
                autoFocus={false}
                autoCapitalize="none"
                placeholder="Amount"
                placeholderTextColor={'#c2c6cc'}
                secureTextEntry={false}
                keyboardType="numeric"
                textAlign={'center'}
                onChangeText={value => setAmount(parseInt(value))}
                style={[
                  {
                    fontSize: normalize(32),
                    backgroundColor: '#FFFFFF',
                    alignContent: 'center',
                    height: wW / 4,
                    width: '100%',
                    borderColor: 'grey',
                    marginTop: 10,
                    borderRadius: wW / 45,
                    borderWidth: 1,
                  },
                ]}
                // onFocus={()=>{setKeys(1)}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: wW, paddingHorizontal: wW / 18}}>
            <Text
              style={{
                fontSize: normalize(14),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
                marginTop: wH / 35,
              }}>
              Category
            </Text>
            <View
              style={{
                paddingHorizontal: wW / 35,
                height: wH / 16,
                marginTop: 10,
                borderColor: '#8E8E8E',
                borderRadius: wW / 55,
                borderWidth: 1,
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
              }}>
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && {width: '100%', borderColor: 'blue'},
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={categoryTypes}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={categoryValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setCategoryValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View style={{width: wW, paddingHorizontal: wW / 18}}>
            <DatePicker
              modal
              open={open}
              date={newDate}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
                console.log('date::::::' + Moment(newDate).format('dd MMM'));
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Text
              style={{
                fontSize: normalize(14),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
                marginTop: wH / 35,
              }}>
              Date
            </Text>
            <TouchableOpacity
              onPress={() => {
                setOpen(true);
              }}
              style={{
                //height: 50,
                borderRadius: 4,
              }}>
              <View
                style={{
                  paddingHorizontal: wW / 35,
                  height: wH / 16,
                  marginTop: 10,
                  borderColor: '#8E8E8E',
                  borderRadius: wW / 55,
                  borderWidth: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: normalize(14),
                    fontFamily: 'DMSans-Regular',
                    //fontWeight: '600',
                    color: '#344054',
                  }}>
                  {'' + Moment(newDate).format('d/MMMM/yyyy')}
                </Text>
                <Calander width={25} height={25} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wW, paddingHorizontal: wW / 18}}>
            <Text
              style={{
                fontSize: normalize(14),
                fontFamily: 'DMSans-Regular',
                //fontWeight: '600',
                color: '#344054',
                marginTop: wH / 35,
              }}>
              Receipt Photo
            </Text>
            <View
              style={{
                paddingHorizontal: wW / 35,
                height: wH / 16,
                marginTop: 10,
                borderColor: '#8E8E8E',
                borderRadius: wW / 55,
                borderWidth: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: normalize(16),
                  fontFamily: 'DMSans-Regular',
                  //fontWeight: '600',
                  color: '#999fa9',
                }}>
                {pickerImage}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  onImageLibraryPress();
                }}
                style={{
                  //height: 50,
                  borderRadius: 4,
                }}>
                <Upload width={25} height={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View style={{position: 'absolute', bottom: wH / 30}}>
        <View style={{width: wW, height: wH / 12, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              sendMail1();
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
                alignItems: 'center',
                borderRadius: wW / 45,
              }}>
              <Text
                style={{
                  fontSize: normalize(14),
                  marginRight: wW / 25,

                  fontFamily: 'DMSans-Bold',
                  color: 'white',
                }}>
                Add
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({});
