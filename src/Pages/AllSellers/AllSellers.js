import React from 'react';
import { useQuery } from '@tanstack/react-query';


const AllSellers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    });


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

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    {
                                        user?.role === 'seller' &&
                                        <>
                                            <th>{i + '0'}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td></>
                                    }
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;