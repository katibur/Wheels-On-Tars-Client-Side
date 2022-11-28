import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import MyProductsCard from './MyProductsCard';




const MyProduct = () => {

    const { user } = useContext(AuthContext);

    const url = `https://wheels-on-tars-server-katibur.vercel.app/myProducts?email=${user?.email}`;

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(myProducts)

    return (
        <div className='grid grid:cols-1 gap-3 w-[1200px] mx-auto'>

            {
                myProducts.map(singleProduct =>
                    <MyProductsCard
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                        refetch={refetch}
                    ></MyProductsCard>)
            }
        </div>

    );
};

export default MyProduct;

