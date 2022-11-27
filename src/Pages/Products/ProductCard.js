import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useBuyer from '../../Hooks/useBuyer/useBuyer';

const ProductCard = ({ setBooking, booking, product }) => {
    const { img, name, location, originalPrice, resalePrice, warranty, used, sellerName, time, description, condition } = product;
    const { user } = useContext(AuthContext);

    const [isBuyer] = useBuyer(user?.email);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt={name} />
                </PhotoView>
            </PhotoProvider>

            <div className="card-body my-6">
                <h2 className="card-title font-bold mx-auto mb-4">{name}</h2>
                <p><span className='font-bold'>Place: </span>{location}</p>
                <p><span className='font-bold'>Original Price:</span> {originalPrice} BDT/=</p>
                <p><span className='font-bold'>Resale Price:</span> {resalePrice} BDT/=</p>
                <p><span className='font-bold'>Warranty Left:</span> {warranty}</p>
                <p><span className='font-bold'>Used For:</span> {used}</p>
                <p><span className='font-bold'>Seller Name:</span> {sellerName}</p>
                <p><span className='font-bold'>Conditon:</span> {condition}</p>
                <p><span className='font-bold'>Details:</span> {description}</p>
                <p><span className='font-bold'>Posted On:</span> {time ? time : '2 Weeks Ago'}</p>
                <div className="card-actions justify-end">
                    {
                        isBuyer ?
                            <label
                                onClick={() => setBooking(product)}
                                htmlFor="booking-modal"
                                className="btn btn-primary"
                            >Book Now</label>
                            :
                            <p className='text-red-500 font-bold text-2xl'>Please Login As Buyer To Buy</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductCard;