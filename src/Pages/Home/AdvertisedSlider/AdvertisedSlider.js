import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import AdvertisedSliderItems from './AdvertisedSliderItems';
import { useQuery } from '@tanstack/react-query';

const AdvertisedSlider = () => {
    const { user } = useContext(AuthContext);
    const url = `https://wheels-on-tars-server-katibur.vercel.app/advertisedItems`;

    const { data: advertisedProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['advertisedProducts', user?.email],
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
                advertisedProducts &&
                <h1 className='text-3xl font-bold text-center'>Advertised Items Appear Here.</h1>
            }
            <div className='flex flex-wrap justify-center gap-5 my-5'>
                {
                    advertisedProducts.map(singleAdvertisedProduct => <AdvertisedSliderItems
                        key={singleAdvertisedProduct._id}
                        singleAdvertisedProduct={singleAdvertisedProduct}
                        refetch={refetch}
                    ></AdvertisedSliderItems>)
                }

            </div>
        </div>
    );
};

export default AdvertisedSlider;