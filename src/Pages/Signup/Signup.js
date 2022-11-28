import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

import { FcGoogle } from 'react-icons/fc';


const Signup = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [signupError, setSignupError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }

    const signupHandler = (data) => {
        // console.log(data);
        setSignupError('');

        createUser(data.email, data.password, data.role)
            .then(Result => {
                const user = Result.user;
                console.log(user);
                toast.success('Successfully Created.')
                const userInfo = {
                    displayName: data.name
                };
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.email, data.name, data.role);
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                setSignupError(err);
                console.error(err);
            })
    }

    const saveUser = (email, name, role) => {
        const user = {
            email,
            name,
            role
        }
        // console.log(user);
        fetch('https://wheels-on-tars-server-katibur.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
                const userEmail = user.email;
                const name = user.displayName;
                saveSocialUser(userEmail, name);
            })
            .catch(err => console.error(err))
    }

    const saveSocialUser = (email, name) => {
        const user = {
            email,
            name,
            role: 'buyer'
        }
        fetch('https://wheels-on-tars-server-katibur.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const userEmail = data.email;
                setCreatedUserEmail(userEmail);
            })
    }




    return (
        <div className='h-[650px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2 border-indigo-600 rounded-lg'>
                <h2 className='text-xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(signupHandler)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full"
                            {...register("name", {
                                required: 'Name is required.'
                            })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: 'Email is required.'
                            })}
                        />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: 'Password is required.',
                                minLength: { value: 6, message: 'Password is too short.' },
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, message: 'Password is weak.Must Have (lowercase,uppercase,special-character)' }
                            })}
                        />
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Role</span>
                        </label>
                        <select
                            className="input input-bordered w-full"
                            {...register("role")}
                        >
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                        </select>
                    </div>

                    <input className='btn btn-primary w-full mt-3' value='Signup' type="submit" />
                </form>

                {signupError && <p className='text-red-500'>{signupError}</p>}

                <p>Already Have An Account?<Link to='/Login' className='text-primary'>Login Here.</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full btn-primary'><FcGoogle></FcGoogle> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;