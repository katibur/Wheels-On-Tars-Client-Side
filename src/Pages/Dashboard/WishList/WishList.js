import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../../Products/BookingModal/BookingModal';

const WishList = () => {
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState([]);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`;

    const { data: wishlistItems = [], isLoading } = useQuery({
        queryKey: ['wishlistItems', user?.email],
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

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Orders</h3>
            {wishlistItems &&
                wishlistItems?.map(wishlistItem => <BookingModal
                    key={wishlistItem._id}
                    booking={booking}
                ></BookingModal>)
            }
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>

                        {wishlistItems &&
                            wishlistItems?.map((wishlistItem, i) => <tr key={wishlistItem._id}>
                                <th>{i + 1}</th>
                                <td>{wishlistItem.productName}</td>
                                <td>{wishlistItem.sellerName}</td>
                                <td>{wishlistItem.location}</td>
                                <td>{wishlistItem.price}</td>
                                <td><label className='btn btn-ghost'
                                    htmlFor="booking-modal"
                                    onClick={() => setBooking(wishlistItem)}
                                >Book Now</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;