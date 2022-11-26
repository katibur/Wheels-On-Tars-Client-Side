import React from 'react';
import { Link } from 'react-router-dom';

const MyProductsCard = ({ singleProduct }) => {

    const { name, img, warranty, used, location, originalPrice, time, resalePrice } = singleProduct;
    console.log(singleProduct);
    return (
        <div>
            <Link className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Home"
                    src={img}
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>
                            <dd className="text-sm text-gray-500">{resalePrice} BDT/=</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Name</dt>
                            <dd className="font-medium">{name}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Time It Was Posted</p>
                                <p className="font-medium">{time}</p>
                            </div>
                        </div>


                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">User For</p>
                                <p className="font-medium">{used} Years</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Location</p>
                                <p className="font-medium">{location}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">original Price</p>

                                <p className="font-medium">{originalPrice}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">warranty</p>
                                <p className="font-medium">{warranty ? warranty + ' Years' : '0'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default MyProductsCard;