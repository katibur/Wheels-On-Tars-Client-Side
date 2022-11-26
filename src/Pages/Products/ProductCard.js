import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ProductCard = ({ setBooking, booking, product }) => {
    const { img, name, location, originalPrice, resalePrice, warranty, used, sellerName } = product;
    const { user } = useContext(AuthContext);


    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                data.map(user => setSingleUser(user))
            })
    }, [])



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body my-6">
                <h2 className="card-title font-bold mx-auto mb-4">{name}</h2>
                <p><span className='font-bold'>Place: </span>{location}</p>
                <p><span className='font-bold'>Original Price:</span> {originalPrice} BDT/=</p>
                <p><span className='font-bold'>Resale Price:</span> {resalePrice} BDT/=</p>
                <p><span className='font-bold'>Warranty Left:</span> {warranty}</p>
                <p><span className='font-bold'>Used For:</span> {used}</p>
                <p><span className='font-bold'>Seller Name:</span> {sellerName}</p>
                <div className="card-actions justify-end">
                    {
                        user?.accessToken ?
                            <label
                                onClick={() => setBooking(product)}
                                htmlFor="booking-modal"
                                className="btn btn-primary"
                            >Book Now</label>
                            :
                            <p className='text-red-500 font-bold text-2xl'>Please Login As Buyer To Book</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductCard;