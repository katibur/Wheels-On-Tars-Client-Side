import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { AiFillDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';


const ReportedItems = () => {
    const { user } = useContext(AuthContext);

    const url = `https://wheels-on-tars-server-katibur.vercel.app/reportedItems?email=${user?.email}`;

    const { data: reportedItems = [], isLoading, refetch } = useQuery({
        queryKey: ['reportedItems', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        fetch(`https://wheels-on-tars-server-katibur.vercel.app/reportedItems/${id}`, {
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
            <h3 className='text-3xl mb-5'>My Orders</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Buyer</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportedItems &&
                            reportedItems?.map((wishlistItem, i) => <tr key={wishlistItem._id}>
                                <th>{i + 1}</th>
                                <td>{wishlistItem.productName}</td>
                                <td>{wishlistItem.sellerName}</td>
                                <td>{wishlistItem.email}</td>
                                <td>{wishlistItem.location}</td>
                                <td>{wishlistItem.price}</td>
                                <td><button className='btn btn-ghost' onClick={() => handleDelete(wishlistItem._id)}><AiFillDelete></AiFillDelete></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;