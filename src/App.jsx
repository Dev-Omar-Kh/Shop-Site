import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Brands from './components/brands/Brands';
import Error from './components/error/Error';
import Auth from './components/auth/Auth';
import AuthProvider from './contexts/authentication';
import Home from './components/home/Home';

const router = createBrowserRouter([

    {path : '/' , element : <Layout /> , children : [

        {index : true , element : <Home />},
        {path : '/products' , element : <Products />},
        {path : '/cate' , element : <Categories />},
        {path : '/brands' , element : <Brands />},
        {path : '/auth' , element : <Auth /> , children : [

            {path : '/auth/' , element : <Register />},
            {path : '/auth/login' , element : <Login />},

        ]},

        {path : '*' , element : <Error />},

    ]}

])

export default function App() {
    return <React.Fragment>

        <AuthProvider>

            <RouterProvider router={router} />

        </AuthProvider>

    </React.Fragment>
}
