import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

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
import Profile from './components/profile/Profile';
import ProtectedRoutes from './components/protect-routes/ProtectedRoutes';
import ProductDetails from './components/product-det/ProductDetails';
import Cart from './components/cart/Cart';
import CartContextProvider from './contexts/cartContext';
import CheckOut from './components/check-out/CheckOut';
import AllOrders from './components/all-orders/AllOrders';
import OrderContextProvider from './contexts/orderContext';
import { Offline, Online } from 'react-detect-offline';
import OffLine from './components/offline/OffLine';

const router = createBrowserRouter([

    {path : '/' , element : <Layout /> , children : [

        {index : true , element : <Home />},
        {path : 'products' , element : <Products />},
        {path : 'cate' , element : <Categories />},
        {path : 'brands' , element : <Brands />},
        {path : 'auth' , element : <Auth /> , children : [

            {path : '/auth/' , element : <Register />},
            {path : '/auth/login' , element : <Login />},

        ]},

        {path : 'profile' , element : <ProtectedRoutes> <Profile /> </ProtectedRoutes>},
        {path : 'cart' , element : <ProtectedRoutes> <Cart /> </ProtectedRoutes>},
        {path : '/proDet/:id' , element : <ProductDetails />},
        {path : 'checkOut' , element : <CheckOut />},
        {path : 'allorders' , element : <AllOrders />},

        {path : '*' , element : <Error />},

    ]}

])

export default function App() {

    let clientQuery = new QueryClient();

    return <React.Fragment>

        <Online>

            <QueryClientProvider client={clientQuery}>
                <CartContextProvider>
                    <AuthProvider>
                        <OrderContextProvider>
                            <RouterProvider router={router} />
                        </OrderContextProvider>
                    </AuthProvider>
                </CartContextProvider>
            </QueryClientProvider>

        </Online>

        <Offline>

            <OffLine />

        </Offline>

    </React.Fragment>
}
