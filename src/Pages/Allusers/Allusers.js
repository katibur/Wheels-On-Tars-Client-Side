import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    toast.success('Deleted successfully');
                    refetch();
                }
            })
    };

    // const handleVerify = (userId) => {
    //     fetch(`http://localhost:5000/users/admin/${userId}`, {
    //         method: "PUT",
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 toast.success("Verified Successful");
    //                 refetch();
    //             }
    //         });
    // };

    return (
        <div>
            <h3 className='text-3xl'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            {/* <th>Status</th>
                            <th>Verify</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    {/* <td>{user.status}</td>
                                    <td>
                                        {
                                            user?.role !== 'admin' &&
                                            <button
                                                onClick={() => handleVerify(user._id)}
                                                className="btn btn-xs btn-secondary"
                                            >
                                                Verify
                                            </button>
                                        }
                                    </td> */}
                                    <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;