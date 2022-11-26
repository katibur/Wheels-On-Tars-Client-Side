import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


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
                    const product = {
                        name: data.productName,
                        category_id: data.category,
                        warranty: data.warranty,
                        used: data.used,
                        sellerName: data.sellerName,
                        location: data.location,
                        originalPrice: data.originalprice,
                        resalePrice: data.resaleprice,
                        img: imgData.data.url,
                        time: new Date()
                    };
                    console.log(product);
                    fetch("http://localhost:5000/addProduct", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            toast.success("Product added successfully");

                        });
                }
            });
    };
    return (
        <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-100 mt-12 mb-12">
            <form onSubmit={handleSubmit(handleAddproduct)}>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">
                    <div>
                        <label htmlFor="productName" className="block dark:text-gray-400">
                            Product Name
                        </label>
                        <input
                            {...register("productName", {
                                required: "productName Is Required",
                                minLength: {
                                    value: 4,
                                    message: "productName Must Be 4 Characters Or Long",
                                },
                            })}
                            type="text"
                            name="productName"
                            id="productName"
                            placeholder="Product Name"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="sellerName" className="block dark:text-gray-400">
                            Seller Name
                        </label>
                        <input
                            {...register("sellerName", {
                                required: "sellerName Is Required",
                                minLength: {
                                    value: 4,
                                    message: "sellerName Must Be 4 Characters Or Long",
                                },
                            })}
                            type="text"
                            defaultValue={user?.displayName}
                            name="sellerName"
                            id="sellerName"
                            placeholder="Seller Name"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                            disabled
                        />
                    </div>
                    {errors.name && (
                        <p className="text-red-600">{errors.name?.message}</p>
                    )}
                    <div>
                        <label htmlFor="image" className="block dark:text-gray-400">
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
                            placeholder="Enter Your img"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="originalprice" className="block dark:text-gray-400">
                            Original Price
                        </label>
                        <input
                            {...register("originalprice", {
                                required: "originalprice is Required",
                            })}
                            type="text"
                            name="originalprice"
                            id="originalprice"
                            placeholder="originalprice"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-600">{errors.originalprice?.message}</p>
                    )}

                    <div>
                        <label htmlFor="resaleprice" className="block dark:text-gray-400">
                            Resale Price
                        </label>
                        <input
                            {...register("resaleprice", {
                                required: "resaleprice is Required",
                            })}
                            type="text"
                            name="resaleprice"
                            id="resaleprice"
                            placeholder="resaleprice"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-600">{errors.resaleprice?.message}</p>
                    )}
                    <div>
                        <label htmlFor="location" className="block dark:text-gray-400">
                            location
                        </label>
                        <input
                            {...register("location", { required: "location is Required" })}
                            type="text"
                            name="location"
                            id="location"
                            placeholder="location"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                        />
                    </div>


                    <div>
                        <label htmlFor="warranty" className="block dark:text-gray-400">
                            Warranty
                        </label>
                        <input
                            {...register("warranty")}
                            type="text"
                            name="warranty"
                            id="warranty"
                            placeholder="warranty"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="used" className="block dark:text-gray-400">
                            Years Of Use
                        </label>
                        <input
                            {...register("used")}
                            type="text"
                            name="used"
                            id="used"
                            placeholder="used"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                        />
                    </div>


                    <div>
                        <label htmlFor="category" className="block dark:text-gray-400 mt-6">
                            category
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
