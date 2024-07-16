import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export default function CartContextProvider({children}) {

    const [cardItems, setCardItems] = useState(0);
    const [cartTotalCount, setCartTotalCount] = useState(0);
    const [cartProducts, setCartProducts] = useState(null);
    const [cartId, setCartId] = useState(null);

    const addToCard = async (proId) => {

        try{

            const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart' , {

                productId : proId

            } , {

                headers : {

                    token : localStorage.getItem('auth_token')

                }

            });

            // setCardItems(data.numOfCartItems);
            // setCartTotalCount(data.data.totalCartPrice);

            getUserCard();

            return data ;

        }
        catch(err){

            return err;

        }

    };

    const getUserCard = async () => {

        try {

            const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart' , {

                headers : {

                    token : localStorage.getItem('auth_token')

                }

            })

            setCardItems(data.numOfCartItems);
            setCartTotalCount(data.data.totalCartPrice);
            setCartProducts(data.data.products);
            setCartId(data.data._id);

            return data ;

        } 
        catch (err) {

            return err;

        }

    };

    const deleteProduct = async(proId) => {

        try {

            const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${proId}` , {

                headers : {token : localStorage.getItem('auth_token')}

            });

            setCardItems(data.numOfCartItems);
            setCartTotalCount(data.data.totalCartPrice);
            setCartProducts(data.data.products);

            return data;

        } catch (err) {

            console.log(err);

        }

    }

        const deleteAllProduct = async () => {

        try {

            const {data} = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart' , {

                headers : {

                    token : localStorage.getItem('auth_token')

                }

            })

            setCardItems(0);
            setCartTotalCount(0);
            setCartProducts([]);

            return data;

        } 
        catch (err) {

            return err;

        }

    };

    const updateProduct = async(proId , count) => {

        try {

            const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${proId}` , {

                "count" : count

            } , {

                headers : {token : localStorage.getItem('auth_token')}

            });

            setCardItems(data.numOfCartItems);
            setCartTotalCount(data.data.totalCartPrice);
            setCartProducts(data.data.products);

            return data;

        } catch (error) {
            
            console.log(error);

        }

    }

    useEffect(() => {

        getUserCard();

    });

    return <cartContext.Provider value={{addToCard , cardItems , cartProducts , cartId , setCartProducts , setCartTotalCount , setCardItems , cartTotalCount , getUserCard , deleteProduct , updateProduct , deleteAllProduct}}>

        {children}

    </cartContext.Provider>

}
