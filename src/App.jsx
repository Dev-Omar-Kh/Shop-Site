import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Brands from './components/brands/Brands';
import Error from './components/error/Error';

const router = createBrowserRouter([

    {path : '/' , element : <Layout /> , children : [

        {index : true , element : <h1>Home</h1>},
        {path : '/products' , element : <Products />},
        {path : '/cate' , element : <Categories />},
        {path : '/brands' , element : <Brands />},
        {path : '/login' , element : <Login />},
        {path : '/register' , element : <Register />},

        {path : '*' , element : <Error />},

    ]}

])

export default function App() {
    return <React.Fragment>

        <RouterProvider router={router} />

    </React.Fragment>
}
