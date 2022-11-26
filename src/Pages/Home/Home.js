import React from 'react';
import SiteDetails from './SiteDetails';
import Categories from './Categories';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import Reviews from './Reviews/Reviews';

const Home = () => {
    const url = 'http://localhost:5000/categories';

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(url, {
            })
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-auto'>
            <h1 className='text-center text-4xl font-bold'>Buy & Sell AT WHEELS ON TARS</h1>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 my-12'>
                {categories &&
                    categories.map(category => <Categories
                        key={category._id}
                        category={category}
                    ></Categories>)
                }
            </div>

            <SiteDetails></SiteDetails>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;