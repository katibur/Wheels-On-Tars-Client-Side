import React from 'react';

const ProductCard = ({ product }) => {
    const { img, name, location, originalPrice, resalePrice, warranty, used, sellerName } = product;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body my-6">
                <h2 className="card-title font-bold mx-auto mb-4">{name}</h2>
                <p><span className='font-bold'>Place: </span>{location}</p>
                <p><span className='font-bold'>Original Price:</span> {originalPrice}</p>
                <p><span className='font-bold'>Resale Price:</span> {resalePrice}</p>
                <p><span className='font-bold'>Warranty Left:</span> {warranty}</p>
                <p><span className='font-bold'>Used For:</span> {used}</p>
                <p><span className='font-bold'>Seller Name:</span> {sellerName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;