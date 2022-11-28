
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { FcAdvertising } from 'react-icons/fc'
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const MyProductsCard = ({ singleProduct, refetch }) => {

    const { _id, category_id, name, img, warranty, used, location, originalPrice, time, resalePrice, condition, description } = singleProduct;

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

    const { user } = useContext(AuthContext);
    const sellername = user?.displayName;
    const userEmail = user?.email;
    const handleAdvertising = () => {

        const addedProduct = {
            _id: _id,
            name: name,
            category_id: category_id,
            warranty: warranty,
            used: used,
            sellerName: sellername,
            location: location,
            condition: condition,
            originalPrice: originalPrice,
            resalePrice: resalePrice,
            img: img,
            description: description,
            email: userEmail
        };

        fetch('http://localhost:5000/advertisedItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Advertised Confirmed.');
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <Link className="grid rounded-lg p-4 shadow-sm shadow-indigo-100 w-screen">
                <img
                    alt=""
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

                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 text-xs">
                        <div className='my-3'>
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Time It Was Posted</p>
                                <p className="font-medium">{time}</p>
                            </div>
                        </div>

                        <div>
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">User For</p>
                                <p className="font-medium">{used} Years</p>
                            </div>
                        </div>
                        <div className='my-3'>
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Location</p>
                                <p className="font-medium">{location}</p>
                            </div>
                        </div>

                        <div className='my-3'>
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">original Price</p>
                                <p className="font-medium">{originalPrice}</p>
                            </div>
                        </div>

                        <div className='my-3'>
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Asking Price</p>
                                <p className="font-medium">{resalePrice}</p>
                            </div>
                        </div>
                        <div className='my-3'>
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">Product Condition</p>
                                <p className="font-medium">{condition}</p>
                            </div>
                        </div>

                        <div className='my-3'>
                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                <p className="text-gray-500">warranty</p>
                                <p className="font-medium">{warranty ? warranty + ' Years' : '0'}</p>
                            </div>
                        </div>


                        <div className='my-3'>
                            <button onClick={handleAdvertising} className="btn btn-outline">Advertise Item <FcAdvertising></FcAdvertising>
                            </button>
                        </div>

                        <div className='my-3'>
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