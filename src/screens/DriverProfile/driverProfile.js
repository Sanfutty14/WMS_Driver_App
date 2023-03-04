import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackArrow from '../../assets/svg/backArrow.svg';
import LicenceDownload from '../../assets/svg/LicenceDownload.svg';
import DriverAvatar from '../../assets/svg/DriverAvatar.svg';
import React, {useEffect} from 'react';
import {normalize, wH, wW} from '../../styles/globalStyle';
import {COLORS} from '../../themes/colors';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDriverDetails} from '../../StateManagement/DriverData/actions';
import {useNavigation} from '@react-navigation/native';

const DriverProfile = ({navigation}) => {
  //const navigation = useNavigation();
  const driverDataReducer = useSelector(state => state.DriverDataReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        const loginStatus = await AsyncStorage.getItem('bearerToken');
        //setDriverLoginStatus(loginStatus);
        dispatch(getDriverDetails(loginStatus));
        console.log(
          'Driver Details :::: ' +
            JSON.stringify(driverDataReducer.response.data.driver_name),
        );
      } catch (e) {
        console.error('ERROR +*+*+*+*+  ' + e);
      }
    })();
  }, []);
  return (
    <View style={{flex: 1, height: wH, alignItems: 'flex-start'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: wW,
          padding: wW / 18,
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

        <View style={{height: 30, width: 30}}></View>
      </View>
      {driverDataReducer.response.data === 'No Data Found' ? (
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
            height: wH / 6,
          }}>
          <TouchableOpacity
            style={{paddingHorizontal: wW / 18}}
            onPress={() => {
              props.navigation.toggleDrawer(),
                props.navigation.navigate('DriverProfile');
            }}>
            <View style={[styles.customerDetails]}>
              <DriverAvatar width={46} height={46} />
              <View style={{marginLeft: wW / 45}}>
                <Text style={styles.customer2}>
                  {driverDataReducer.response?.data?.driver_name}
                </Text>
                <View style={styles.details}>
                  <Text style={styles.customerMail}>driver01</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              width: wW,
              backgroundColor: COLORS.borderGrey,
            }}></View>
          <View style={{paddingHorizontal: wW / 18}}>
            <View style={styles.customerDetailContainer}>
              <Text style={styles.customerDetails1}>NRIC/FIN No</Text>
              <Text style={styles.customer}>
                {driverDataReducer.response?.data?.nric_fic_number}
              </Text>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: COLORS.borderGrey,
                }}></View>
            </View>
            <View style={styles.customerDetailContainer}>
              <Text style={styles.customerDetails1}>Type</Text>
              <Text style={styles.customer}>Class IV</Text>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: COLORS.borderGrey,
                }}></View>
            </View>
            <View style={styles.customerDetailContainer}>
              <Text style={styles.customerDetails1}>Driver type</Text>
              <Text style={styles.customer}>Full-time</Text>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: COLORS.borderGrey,
                }}></View>
            </View>
            <View style={styles.customerDetailContainer}>
              <Text style={styles.customerDetails1}>Valid upto</Text>
              <Text style={styles.customer}>
                {driverDataReducer.response?.data?.licence_end_date}
              </Text>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: COLORS.borderGrey,
                }}></View>
            </View>
            <View style={styles.customerDetailContainer}>
              <Text style={styles.customerDetails1}>Download Licence</Text>

              <View
                style={{
                  height: wW / 10,
                  marginTop:wH/85,
                  width: wW / 3.7,
                  borderRadius: 8,
                  borderWidth: 2,
                  borderColor: '#D0D5DD',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent:'space-between',paddingHorizontal:wW/30
                }}>
                <LicenceDownload width={wW / 20} height={wW / 20} />
                <Text style={styles.downloadData}>Licence</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: wW,
              backgroundColor: COLORS.borderGrey,
            }}></View>
        </View>
      )}
    </View>
  );
};

export default DriverProfile;

const styles = StyleSheet.create({
  customer: {
    color: COLORS.textColor,

    fontSize: normalize(20),
    fontFamily: 'DMSans-Bold',
    marginTop: wH / 120,
    marginBottom: wH / 35,
  },
  customer2: {
    color: COLORS.textColor,

    fontSize: normalize(20),
    fontFamily: 'DMSans-Bold',
    marginTop: wH / 120,
  },
  downloadData: {
    color: COLORS.textColor,

    fontSize: normalize(14),
    fontFamily: 'DMSans-Regular',
  },
  customerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    marginBottom: wH / 55,
    marginTop: wH / 45,
  },
  DrawerOption: {
    //  paddingLeft:0,
    marginLeft: -25,
    color: COLORS.textColor,
    fontFamily: 'DMSans-Bold',
  },
  details: {
    width: wW / 6.5,
    height: wW / 20,
    borderRadius: wW / 25,
    backgroundColor: '#eeeff1',
    marginTop: wW / 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerMail: {
    color: '#8E8E8E',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontFamily: 'DMSans-Regular',
    fontWeight: '500',
    fontSize: normalize(12),
  },
  customerDetails1: {
    color: '#8E8E8E',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontFamily: 'DMSans-Regular',
    fontWeight: '500',
    fontSize: normalize(14),
  },
  customerDetailContainer: {
    marginVertical: wH / 60,
  },
});
