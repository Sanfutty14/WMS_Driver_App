// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Logo from '../../assets/svg/logo.svg';
import Logout from '../../assets/svg/Logout.svg';
import History from '../../assets/svg/History.svg';
import Details from '../../assets/svg/Details.svg';
import DriverAvatar from '../../assets/svg/DriverAvatar.svg';
import Expensess from '../../assets/svg/Expensess.svg';
import {COLORS} from '../../themes/colors';
import {FONTS} from '../../themes/textfonts';
import {Button, View, Text, StyleSheet,TouchableOpacity, SafeAreaView} from 'react-native';
import Dashboard from '../../dashboard/dashboard';
import MainHeader from '../../component/MainHeader';
import {normalize, wH, wW} from '../../styles/globalStyle';
import {useNavigation} from '@react-navigation/native';
// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const DrawerPage = (navigation) => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView
        contentContainerStyle={{ height:wH,backgroundColor: '#F9FAFC'}}>
        <View
          style={{
            height: wH/6,
            marginTop: wH/35,
            marginLeft: wW/40,
          }}>
          <Logo width={42} height={42} />
          <View style={[styles.customerDetails]}>
            <DriverAvatar width={46} height={46} />
            <View style={{marginLeft:wW/45,}}>
              <Text style={styles.customer}>Driver 1</Text>
              <View style={styles.details}>
              <Text style={styles.customerMail}>driver01</Text></View>
            </View>
          </View>

          {/* <View
            style={{
              height: 0.5,
              backgroundColor: COLORS.borderGrey,
              marginHorizontal: 10,
            }}></View> */}
        </View>
        <DrawerItemList {...props} />
        <View style={{width:'100%',alignItems:'center'}}><View style={{width:'90%', height:0.5,backgroundColor:'#8E8E8E'}}></View></View>
        <DrawerItem
          icon={() => <Expensess width={46} height={46} />}
          style={{height: wH/10,
            width: '100%',justifyContent:'center',
            fontFamily: 'DMSans-Bold',
            
            
          //    backgroundColor: COLORS.white,
          }}
          label={() => (
            <Text
              style={styles.DrawerOption}>
              Expenses
              
            </Text>
          )}
          onPress={() => {
            props.navigation.toggleDrawer(),
            props.navigation.navigate('Expenses');
            //navigation.navigate('Expenses');ImagePicker
          }}
        />
        <View style={{width:'100%',alignItems:'center'}}><View style={{width:'85%', height:0.5,backgroundColor:'#8E8E8E'}}></View></View>
        <DrawerItem
          icon={() => <History width={46} height={46} />}
          style={{height: wH/10,
            width: '90%',justifyContent:'center',
            fontFamily: FONTS.DMSansMedium,
            
            
          //    backgroundColor: COLORS.white,
          }}
          label={() => (
            <Text
              style={styles.DrawerOption}>
              History
            </Text>
          )}
          onPress={() => {
           // props.navigation.toggleDrawer(),
           
              navigation.navigate('Expenses');
          }}
        />
        <View style={{width:'100%',alignItems:'center'}}><View style={{width:'85%', height:0.5,backgroundColor:'#8E8E8E'}}></View></View>
        <DrawerItem
          icon={() => <Details width={46} height={46} />}
          style={{height: wH/10,justifyContent:'center',
            width: '90%',
            fontFamily: FONTS.DMSansMedium,
            
            
          //    backgroundColor: COLORS.white,
          }}
          label={() => (
            <Text
              style={styles.DrawerOption}>
              Details
              
            </Text>
          )}
          onPress={() => {
            props.navigation.toggleDrawer(),
              props.navigation.navigate('CreditScreen');
          }}
        />
        
        <View
          style={{
            height: wH/6,
            marginTop: wH/35,
            marginLeft: wW/40,position:'absolute',bottom:0,marginLeft:wW/20
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}
            >
          <View style={[styles.customerDetails]}>
            <Logout width={46} height={46} />
            <View style={{marginLeft:wW/80,}}>
              <Text style={[styles.customer,{fontSize:normalize(16)}]}>Logout</Text>
              
            </View>
          </View></TouchableOpacity>

          {/* <View
            style={{
              height: 0.5,
              backgroundColor: COLORS.borderGrey,
              marginHorizontal: 10,
            }}></View> */}
        </View>
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100,
        },
        drawerPosition: 'left',
      }}
      drawerContent={DrawerHeaderContent}>
      <Drawer.Screen
        name="FirstPage"
        options={{
          drawerItemStyle: {height: 0},
          header: ({navigation, route, options}) => (
            <MainHeader navigation={navigation} />
          ),
        }}
        component={FirstScreenStack}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  customer: {
    color: COLORS.textColor,
    
    fontSize: normalize(20),
    fontFamily: 'DMSans-Bold',
    
  },
  customerDetails: {
    
    flexDirection: 'row', alignItems: 'center',
    fontSize: 18,
    
    marginTop: wH/45,



    
  },
  DrawerOption: {
    
//  paddingLeft:0,
 marginLeft:-25,
    color: COLORS.textColor, fontFamily: 'DMSans-Bold',
   
  },
  details: {
    width:wW/6.5,
    height:wW/20,
    borderRadius: wW / 25,
    backgroundColor: '#eeeff1',marginTop:wW/120,
    justifyContent:'center',alignItems:'center',
  },
  customerMail: {
    
    
    color: '#8E8E8E',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontFamily: 'DMSans-Regular',
    fontWeight:'500',
    fontSize: normalize(12),
    
  },
 
});
export default DrawerPage;
