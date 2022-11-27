import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';

const MyProductsCard = ({ singleProduct, refetch }) => {

    const { _id, name, img, warranty, used, location, originalPrice, time, resalePrice, condition, description } = singleProduct;





    const handleDelete = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Deleted successfully');
                    refetch();
                }
            })
    };





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
                            <dt className="sr-only">Name</dt>
                            <dd className="font-medium">{name}</dd>
                        </div>
                        <div>
                            <dt className="sr-only">Details</dt>
                            <dd className="font-medium">{description}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex flex-wrap items-center gap-8 text-xs">
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
                                <p className="text-gray-500">Asking Price</p>
                                <p className="font-medium">{resalePrice}</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Product Condition</p>
                                <p className="font-medium">{condition}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">warranty</p>
                                <p className="font-medium">{warranty ? warranty + ' Years' : '0'}</p>
                            </div>
                        </div>


                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <button className="btn btn-outline rounded relative px-8 py-4 ml-4 overflow-hidden font-semibold dark:bg-gray-100 dark:text-gray-900">Advertise Item
                            </button>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                            <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><AiFillDelete></AiFillDelete>
                            </button>
                        </div>

                    </div>
                </div>
            </Link>

        </div>
    );
};

export default MyProductsCard;