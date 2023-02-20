import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
  BackHandler,
  Alert,
} from 'react-native';

import React, {useEffect} from 'react';
import HomeActive from "../assets/svg/HomeActive.svg";
import HomeOff from "../assets/svg/HomeDesable.svg";
import NotificationOn from "../assets/svg/notificationOn.svg";
import NotificationOff from "../assets/svg/notificationOff.svg";
import {
  globalStyles,
  wH,
  wW,
  normalize,
  commonBlue,
} from '../styles/globalStyle';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dashboard from '../dashboard/dashboard';
import Notification from '../screens/Notification/notification';

const BottomNavBar = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      // Alert.alert("Hold on!", "Are you sure you want to go back?", [
      //   {
      //     text: "Cancel",
      //     onPress: () => null,
      //     style: "cancel"
      //   },
      //   { text: "YES", onPress: () => BackHandler.exitApp() }
      // ]);
      setModalVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
      //setModalVisible(true)
    );

    return () => backHandler.remove();
  }, []);
  // const backAction = () => {
  //   Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel"
  //     },
  //     { text: "YES", onPress: () => BackHandler.exitApp() }
  //   ]);
  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", backAction);

  //   return () =>
  //     BackHandler.removeEventListener("hardwareBackPress", backAction);
  // }, []);

  //const dispatch = useDispatch();

  const [focused, setFocused] = React.useState('Message');
  const [AccessPopup, setAccessPopup] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  function renderData(value) {
    const callback = () => {
      setAccessPopup(AccessPopup == null ? 'AccessModal' : null);
    };

    //  const  logOutHamdle = () => {
    //   dispatch(token(null))
    //   navigation.navigate('LoginEntryScreen2')

    //  }

    // console.log(value)
    switch (value) {
      case 'Message':
        return (
            <Dashboard onClick={callback} />
        );
      case 'Access':
        return <View></View>;
      case 'Account':
        return (
          <Notification secondData={AccessPopup} onClick={callback}/>
        );
      default:
        return (
          //<Home1  secondData={AccessPopup} onClick={callback} />
          <Dashboard secondData={AccessPopup}onClick={callback} />
        );
    }
  }

  const handleAccess = () => {
    //     const body = {
    //       "invitations_id":134,
    //       "user_id": 9,
    //      "access_type" : "Visitor type A"

    // }
    //     console.log("modal")

    //     axios({

    //       method: 'post',
    //       url: API+'/public/api/signupTurnstile',
    //       params: body

    //     })

    //     .then(function (response) {

    //   console.log("response Qrcode" ,response)

    //     })
    //     .catch(function (error) {

    //     console.log(error)

    //     });
    setAccessPopup(AccessPopup == null ? 'AccessModal' : null);
  };

  return (
    <View style={{flex: 1, height: '100%'}}>
      {/* {AccessModal()} */}

      
        {renderData(focused)}
     

      <View style={{height: 0, alignItems: 'center'}}>
        
        <View
          style={{
            bottom: wH / 16,
           // width: wW / 1.5,
            height: wH / 14,
            //borderRadius: wW / 10,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: wW / 25,
          }}>
          <TouchableOpacity
            //disabled={true}
            style={{justifyContent: 'center', alignItems: 'center', flex: 2}}
            onPress={() => {
              focused === 'Message' ? setFocused(null) : setFocused('Message');
            }}>
            {focused === 'Message' ? (
            
              <HomeActive width={40} height={40} />
            ) : (
              <HomeOff width={24} height={24} />
            )}
            <Text
              style={{color: 'white', fontSize: wW / 34, lineHeight: wW / 24}}>
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            //disabled={false}
            style={{justifyContent: 'center', alignItems: 'center', flex: 2}}
            onPress={() => {
              focused === 'Account' ? setFocused(null) : setFocused('Account');
            }}>
            {focused === 'Account' ? (
                <NotificationOn width={40} height={40} />
              
            ) : (
                <NotificationOff width={25} height={25} />
            )}
            <Text
              style={{color: 'white', fontSize: wW / 34, lineHeight: wW / 24}}>
              Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({});
