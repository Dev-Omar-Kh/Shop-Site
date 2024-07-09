import React from 'react';

import productsCss from './products.module.css';
import ProCard from '../pro-card/ProCard';
import axios from 'axios';
import Loading from '../loading/Loading';
import { useQuery } from 'react-query';

export default function Products() {

    const getAllProducts = () => {

        return axios.get('https://ecommerce.routemisr.com/api/v1/products');

    }

    const {data , isLoading} = useQuery('allProducts' , getAllProducts , {

        refetchOnMount : false

    });

    // const [allProducts, setAllProducts] = useState(null)

    // async function getAllProducts(){

    //     try{

    //         const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products');

    //         // console.log(data.data);
    //         setAllProducts(data.data);

    //     }
    //     catch(err){

    //         console.log(err.message);

    //     }

    // }

    // useEffect(() => {

    //     getAllProducts()

    // } , []);

    if(isLoading){

        return <Loading />

    }

    return <React.Fragment>

        <section className={productsCss.container}>

            <div className={productsCss.title}>

                <p>Products</p>

                <span>Order it for you or for your beloved ones </span>

            </div>

            {/* ====== cards ====== */}

            <div className={productsCss.cards_cont}>

                {data?.data.data.map((product , idx) => { return <ProCard key={idx} data={product} />})}

            </div>

        </section> 

    </React.Fragment>
}
