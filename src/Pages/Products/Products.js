import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard';


const Products = () => {
    const products = useLoaderData();
    console.log(products);

    const [booking, setBooking] = useState(null);

    return (
        <div>
            <div className='flex flex-row flex-wrap justify-center gap-6 my-12'>
                {
                    products &&
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></ProductCard>)
                }
            </div>
            {
                products &&
                products.map(product => <BookingModal
                    key={product._id}
                    booking={booking}
                    product={product}
                ></BookingModal>)
            }

        </div>
    );
};

export default Products;