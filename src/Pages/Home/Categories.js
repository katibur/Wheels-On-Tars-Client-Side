import React from 'react';
import { Link } from 'react-router-dom';


import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Categories = ({ category }) => {
    const { name, categories_id, photo } = category;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-60">
                <PhotoProvider>
                    <PhotoView src={photo}>
                        <img src={photo} alt={name} className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Buy your dream bike in a reasonable price and sell if you need to.</p>
                <div className="card-actions">
                    <Link to={`/categories/${categories_id}`}><button className="btn btn-primary">See Similar Products</button></Link>
                </div>
            </div>
        </div>


    );
};

export default Categories;