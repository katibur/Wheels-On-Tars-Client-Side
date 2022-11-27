import React from 'react';

const AdvertisedSliderItems = ({ singleAdvertisedProduct, refetch }) => {

    const { img, name, description } = singleAdvertisedProduct;

    return (
        <div>
            <div className='flex'>
                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                            <p className="dark:text-gray-100">{description}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default AdvertisedSliderItems;