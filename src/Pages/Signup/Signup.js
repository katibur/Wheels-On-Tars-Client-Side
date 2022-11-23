import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero">
            <div className="hero-content mx-auto">

                <div className="card flex-shrink-0 w-94 shadow-2xl bg-base-100 px-8">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                    <p className='mb-12'>Already Have An Account?<Link to='/login' className='text-primary'> Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;