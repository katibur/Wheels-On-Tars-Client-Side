import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myProducts?email=${user?.email}`;

    const { data: myproducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myproducts', user?.email],
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

    return (
        <div>
            {
                myproducts.map(singleProduct =>
                    <MyProductsCard
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                        refetch={refetch}
                    ></MyProductsCard>)
            }
        </div>
    );
};

export default MyProducts;