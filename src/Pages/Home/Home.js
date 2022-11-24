import React, { useEffect, useState } from 'react';
import SiteDetails from './SiteDetails';
import Categories from './Categories';

const Home = () => {
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])


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
        </div>
    );
};

export default Home;