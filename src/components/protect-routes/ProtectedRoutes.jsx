import React, { useContext } from 'react';
import { authContext } from '../../contexts/authentication';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}){

    const {token} = useContext(authContext);


    if(token === null){

        return <Navigate to='/auth' />

    }

    return <>

        {children}

    </>

}
