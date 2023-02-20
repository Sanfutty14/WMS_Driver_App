
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import dashboard from "../dashboard/dashboard";
import ResetPassword from "../authentication/resetpassword";
import Login from "../authentication/login";
import CreateAccount from "../authentication/createAccount";
import SuccessPage from "../authentication/successPage";
import orderDetails from "../innerPages/orderDetails";
import BottomNavBar from "./bottomNav";
import RideDetails from "../rideStart/rideDetails";
import Delivered from "../rideStart/delivered";
import successPage from "../rideStart/successPage";
import Notification from "../screens/Notification/notification";
import GetSignature from "../rideStart/getSignature";
import SignaturePad from "../screens/SignaturePad/signaturePad";
import DrawerPage from "../screens/DrawerPage/drawerPage";
import Expenses from "../screens/Expenses/expenses";
import AddExpenses from "../screens/Expenses/addExpenses";
import { useSelector } from 'react-redux';
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import MapRoute from "../screens/MapRouts/mapRoute";
import OrderDetails from "../innerPages/orderDetails";
import ImagePickerPage from "../screens/Expenses/imagePicker";
const Stack = createNativeStackNavigator();

function FlashRouter() {
    const userData = useSelector((state)=> state.loginReducer);
    console.log('userData :::::::',userData.response);
   // console.log("=================> Testing For Data", LoginData)
    // console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    return (
        <NavigationContainer>

            {/* <Stack.Navigator initialRouteName='LoginEntryPage' screenOptions={{ headerShown: false }}> */}
            {/* <Stack.Navigator initialRouteName='Expenses'screenOptions={{ headerShown: false }}>
            <Stack.Screen name="dashboard" component={dashboard} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="SuccessPage" component={SuccessPage} />
            <Stack.Screen name="orderDetails" component={OrderDetails} />
            <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
            <Stack.Screen name="RideDetails" component={RideDetails} />
            <Stack.Screen name="Delivered" component={Delivered} />
            <Stack.Screen name="successPage" component={successPage} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="GetSignature" component={GetSignature} />
            <Stack.Screen name="SignaturePad" component={SignaturePad} />
            <Stack.Screen name="DrawerPage" component={DrawerPage} />
            <Stack.Screen name="Expenses" component={Expenses} />
            <Stack.Screen name="AddExpenses" component={AddExpenses} />
            <Stack.Screen name="MapRoute" component={MapRoute} />
            </Stack.Navigator> */}
            <Stack.Navigator /* initialRouteName='AddExpenses' */ /* initialRouteName={userData.response.message==='Login Successfully' ?'DrawerPage':'Login' } */ screenOptions={{ headerShown: false }}>
                {userData.response.message==='Login Successfully' ? MainStack(Stack)
                    : AuthStack(Stack)
                }
                <Stack.Screen name="dashboard" component={dashboard} />
            
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="SuccessPage" component={SuccessPage} />
            <Stack.Screen name="orderDetails" component={OrderDetails} />
            <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
            <Stack.Screen name="RideDetails" component={RideDetails} />
            <Stack.Screen name="Delivered" component={Delivered} />
            
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="GetSignature" component={GetSignature} />
            <Stack.Screen name="SignaturePad" component={SignaturePad} />
            <Stack.Screen name="ImagePickerPage" component={ImagePickerPage} />
            <Stack.Screen name="Expenses" component={Expenses} />
            <Stack.Screen name="AddExpenses" component={AddExpenses} />
            <Stack.Screen name="MapRoute" component={MapRoute} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default FlashRouter;
