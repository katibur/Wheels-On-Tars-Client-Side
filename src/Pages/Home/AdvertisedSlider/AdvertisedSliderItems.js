import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import useSeller from '../../../Hooks/isSeller/useSeller';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const AdvertisedSliderItems = ({ singleAdvertisedProduct, refetch }) => {

    const { _id, resalePrice, img, name, description } = singleAdvertisedProduct;

    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);

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
            <div className='flex'>
                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2><span className="text-3xl font-semibold tracking-wide">Product Name: </span>{name}</h2>
                            <h2 className="text-3xl font-semibold tracking-wide">Price: {resalePrice}</h2>
                            <div className='flex justify-between'>
                                <p className="dark:text-gray-100">Details: {description}</p>
                                {
                                    isSeller &&
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><AiFillDelete></AiFillDelete>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default AdvertisedSliderItems;