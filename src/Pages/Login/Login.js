import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className="hero">
            <div className="hero-content mx-auto">

                <div className="card flex-shrink-0 w-94 max-w-sm shadow-2xl bg-base-100 px-8">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mb-12'>New Here?<Link to='/signup' className='text-primary'> Create New Account.</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;