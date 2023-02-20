import React from 'react';
import CreateAccount from '../authentication/createAccount';
import Login from '../authentication/login';
import ResetPassword from '../authentication/resetpassword';
import SuccessPage from '../authentication/successPage';
import Dashboard from '../dashboard/dashboard';
import OrderDetails from '../innerPages/orderDetails';
import Delivered from '../rideStart/delivered';
import GetSignature from '../rideStart/getSignature';
import RideDetails from '../rideStart/rideDetails';

import DrawerPage from "../screens/DrawerPage/drawerPage";
import AddExpenses from '../screens/Expenses/addExpenses';
import Expenses from '../screens/Expenses/expenses';
import MapRoute from '../screens/MapRouts/mapRoute';
import Notification from '../screens/Notification/notification';
import SignaturePad from '../screens/SignaturePad/signaturePad';
import BottomNavBar from './bottomNav';

export default function (Stack) {
    return (
        <>
        
            <Stack.Screen
                name="Home"
                component={DrawerPage}
            />
            {/* <Stack.Screen name="dashboard" component={Dashboard} />
            <Stack.Screen name="Login" component={Login} />
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
            <Stack.Screen name="DrawerPage" component={DrawerPage} />
            <Stack.Screen name="Expenses" component={Expenses} />
            <Stack.Screen name="AddExpenses" component={AddExpenses} />
            <Stack.Screen name="MapRoute" component={MapRoute} /> */}
        
        </>
    )
}