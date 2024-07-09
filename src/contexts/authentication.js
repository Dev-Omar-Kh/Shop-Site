import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext();

export default function AuthProvider({children}){

    const [token, setToken] = useState(null);

    useEffect(() => {

        if(localStorage.getItem('auth_token')){

            setToken(localStorage.getItem('auth_token'));

        }

    } , []);

    return <authContext.Provider value={{token , setToken}}>

        {children}

    </authContext.Provider>

}
