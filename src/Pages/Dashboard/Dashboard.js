import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [user?.email])

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.productName}</td>
                                <td>{booking.customerName}</td>
                                <td>{booking.location}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking?.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary btn-sm'>Pay Now</button>
                                        </Link>
                                    }
                                    {
                                        booking?.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;