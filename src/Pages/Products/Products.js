import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';


const Products = () => {

    const products = useLoaderData();

    console.log(products);

    return (
        <div className='flex flex-row flex-wrap justify-center gap-6 my-12'>
            {
                products &&
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Products;