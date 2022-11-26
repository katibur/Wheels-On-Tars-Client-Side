import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { Login, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);


    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        Login(data.email, data.password)
            .then(Result => {
                const user = Result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(err => {
                setLoginError(err.message)
                console.error(err.message)
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
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const userEmail = data.email;
                setLoginUserEmail(userEmail);
            })
    }

    return (
        <div className='h-[550px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2 border-indigo-500 rounded-lg'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email"
                            className="input input-bordered w-full"
                            {...register("email", { required: "Email Address is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password Is Too Short!!' }
                            })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                        <label className="label"><span className="label-text-alt">Forgot Password?</span></label>
                    </div>

                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p>New Here?<Link to='/signup' className='text-primary'>Create A New Account.</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full btn-primary'><FcGoogle></FcGoogle> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;