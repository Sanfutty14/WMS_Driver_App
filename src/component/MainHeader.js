import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MenuIcon from '../assets/icons/menu.svg';
import AppLogoImg from '../assets/images/appLogo.png';
import NotificationIcon from '../assets/icons/notification_black.svg';
import {DrawerActions} from '@react-navigation/drawer';
import {COLORS} from '../themes/colors';
import { wW } from '../styles/globalStyle';

const MainHeader = ({props, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: wW/18,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <MenuIcon width={24} height={24} />
      </TouchableOpacity>
      <View
        style={{
          width: '85%',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
        }}>
        <Image source={AppLogoImg} style={{width: 50, height: 50}} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notification');
        }}>
        <NotificationIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
