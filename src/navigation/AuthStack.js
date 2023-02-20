import React from 'react';

import  Login  from '../authentication/login'

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={Login}
            />
           
        </>
    )
}