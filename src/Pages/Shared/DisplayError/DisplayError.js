import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const { Logout } = useContext(AuthContext);
    const handleLogout = () => {
        Logout()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-red-500'>Something Went Wrong</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4 className='text-4xl'>Please <button onClick={handleLogout}>Logout</button > and log back in.</h4>
        </div>
    );
};

export default DisplayError;