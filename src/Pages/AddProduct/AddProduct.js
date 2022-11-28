import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();

    const time = new Date();
    const showTime = time.getHours()
        + ':' + time.getMinutes()
        + ":" + time.getSeconds();

    const handleAddproduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?key=${'3c02ebae27809e5199bba6cfb5fc3b1e'}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const addedProduct = {
                        name: data.productName,
                        category_id: data.category,
                        warranty: data.warranty,
                        used: data.used,
                        sellerName: data.sellerName,
                        location: data.location,
                        condition: data.condition,
                        originalPrice: parseInt(data.originalprice),
                        resalePrice: parseInt(data.resaleprice),
                        img: imgData.data.url,
                        description: data.message,
                        email: user.email,
                        time: showTime
                    };
                    console.log(addedProduct);
                    fetch("http://localhost:5000/addProduct", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addedProduct),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            toast.success("Product added successfully");
                            if (data.acknowledged === true) {
                                navigate('/dashboard/myProducts', { replace: true });
                            }
                        });
                }
            });
    };
    return (
        <div className="max-w-4xl p-6 mx-auto bg-gray-700 rounded-md shadow-md mt-12 mb-12">
            <form onSubmit={handleSubmit(handleAddproduct)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">

                    <div>
                        <label htmlFor="productName" className="block">
                            Product Name
                        </label>
                        <input
                            {...register("productName", {
                                required: "productName Is Required",
                            })}
                            type="text"
                            name="productName"
                            id="productName"
                            placeholder="productName"
                            className="w-full px-4 py-3 text-black rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>
                    {errors.productName && (
                        <p className="text-red-600">{errors.productName?.message}</p>
                    )}

                    <div>
                        <label htmlFor="category" className="block mt-6">
                            Category
                        </label>
                        <select
                            {...register("category", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="1">Scooters</option>
                            <option value="2">Standard For Dual Purpose</option>
                            <option value="3">Sport</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="warranty" className="block">
                            Warranty
                        </label>
                        <input
                            {...register("warranty")}
                            type='number'
                            name="warranty"
                            id="warranty"
                            placeholder="Warranty"
                            className="w-full px-4 py-3  text-black rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="used" className="block">
                            Used For
                        </label>
                        <input
                            {...register("used")}
                            type='number'
                            name="used"
                            id="used"
                            placeholder="Used For Years"
                            className="w-full  text-black px-4 py-3 rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="sellerName" className="block">
                            Seller Name
                        </label>
                        <input
                            {...register("sellerName")}
                            type="text"
                            name="sellerName"
                            id="sellerName"
                            defaultValue={user?.displayName}
                            disabled
                            className="w-full px-4 py-3  text-black rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>
                    {errors.sellerName && (
                        <p className="text-red-600">{errors.sellerName?.message}</p>
                    )}

                    <div>
                        <label htmlFor="location" className="block">
                            location
                        </label>
                        <input
                            {...register("location", { required: "location is Required" })}
                            type="text"
                            name="location"
                            id="location"
                            placeholder="location"
                            className="w-full  text-black px-4 py-3 rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="condition"
                            className="block dark:text-gray-400 mt-6"
                        >
                            Condition
                        </label>
                        <select
                            {...register("condition", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option>excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="originalprice" className="block">
                            originalprice
                        </label>
                        <input
                            {...register("originalprice", {
                                required: "originalprice is Required",
                            })}
                            type="number"
                            name="originalprice"
                            id="originalprice"
                            placeholder="Original Price"
                            className="w-full  text-black px-4 py-3 rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-600">{errors.originalprice?.message}</p>
                    )}

                    <div>
                        <label htmlFor="resaleprice" className="block">
                            resaleprice
                        </label>
                        <input
                            {...register("resaleprice", {
                                required: "resaleprice is Required",
                            })}
                            type="number"
                            name="resaleprice"
                            id="resaleprice"
                            placeholder="resaleprice"
                            className="w-full text-black px-4 py-3 rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-600">{errors.resaleprice?.message}</p>
                    )}

                    <div>
                        <label htmlFor="img" className="block">
                            Product Image
                        </label>
                        <input
                            {...register("image", {
                                required: true,
                            })}
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            placeholder="Insert Your Product's Image."
                            className="w-full text-black px-4 py-3 rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block dark:text-gray-400">
                            Message
                        </label>
                        <textarea
                            {...register("message", { required: "message is Required" })}
                            name="message"
                            placeholder="Product Details & Usage"
                            className="w-full text-black px-4 py-3 rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            name="email"
                            id="email"
                            defaultValue={user?.email}
                            disabled
                            className="w-full px-4 py-3  text-black rounded-md border-2 border-gray-300  dark:text-black focus:dark:border-violet-300"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-600">{errors.email?.message}</p>
                    )}

                    <input
                        className="btn btn-secondary w-full rounded-none py-2 px-8 mt-6 text-gray-100"
                        value="Add a Product"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;

