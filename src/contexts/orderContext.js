import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const orderContext = createContext()

export default function OrderContextProvider({children}) {

    const [ordersCount, setOrdersCount] = useState(0)

    const getAllOrders = async(id) => {

        try {

            const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);

            setOrdersCount(data.length);

            return data;

        } catch (error) {

            return error

        }

    };

    useEffect(() => {

        if(localStorage.getItem('auth_token')){

            const {id} = jwtDecode(localStorage.getItem('auth_token'));
            getAllOrders(id);
        }

    })

    return <orderContext.Provider value={{getAllOrders , ordersCount}}>

        {children}

    </orderContext.Provider>

}
