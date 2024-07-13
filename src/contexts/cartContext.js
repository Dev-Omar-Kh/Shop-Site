import axios from "axios";
import { createContext } from "react";

export const cartContext = createContext();

export default function CartContextProvider({children}) {

    const addToCard = async (proId) => {

        try{

            const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart' , {

                productId : proId

            } , {

                headers : {

                    token : localStorage.getItem('auth_token')

                }

            });

            return data ;

        }
        catch(err){

            console.log(err);

        }

    };

    return <cartContext.Provider value={{addToCard}}>

        {children}

    </cartContext.Provider>

}
