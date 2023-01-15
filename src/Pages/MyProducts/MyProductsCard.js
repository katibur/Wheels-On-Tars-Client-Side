import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FcAdvertising } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyProductsCard = ({ singleProduct, refetch }) => {
  const {
    _id,
    category_id,
    name,
    img,
    warranty,
    used,
    location,
    originalPrice,
    time,
    resalePrice,
    condition,
    description,
  } = singleProduct;

  const handleDelete = (id) => {
    fetch(
      `https://wheels-on-tars-server-katibur.vercel.app/users/seller/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully");
          refetch();
        }
      });
  };

  const { user } = useContext(AuthContext);
  const sellername = user?.displayName;
  const userEmail = user?.email;
  const handleAdvertising = () => {
    const addedProduct = {
      _id: _id,
      name: name,
      category_id: category_id,
      warranty: warranty,
      used: used,
      sellerName: sellername,
      location: location,
      condition: condition,
      originalPrice: originalPrice,
      resalePrice: resalePrice,
      img: img,
      description: description,
      email: userEmail,
    };

    fetch("https://wheels-on-tars-server-katibur.vercel.app/advertisedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Advertised Confirmed.");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="my-12">
      <div className="card lg:card-side bg-base-100 shadow-2xl">
        <figure>
          <img src={img} alt="bike" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="text-gray-400">Posted On: {time}</p>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div>
              <div className="my-3">
                <p className="text-gray-100">Buying Price</p>
                <p className="font-medium">{originalPrice}</p>
              </div>

              <div className="my-3">
                <p className="text-gray-100">Asking Price</p>
                <p className="font-medium">{resalePrice}</p>
              </div>

              <div>
                <p className="text-gray-100">Used</p>
                <p className="font-medium">{used} Years</p>
              </div>
            </div>
            <div>
              <div className="my-3">
                <p className="text-gray-100">Location</p>
                <p className="font-medium">{location}</p>
              </div>

              <div className="my-3">
                <p className="text-gray-100">Product Condition</p>
                <p className="font-medium">{condition}</p>
              </div>

              <div className="my-3">
                <p className="text-gray-100">warranty</p>
                <p className="font-medium">
                  {warranty ? warranty + " Years" : "0"}
                </p>
              </div>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button onClick={handleAdvertising} className="btn btn-outline">
              Advertise Item <FcAdvertising></FcAdvertising>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline"
            >
              Delete <AiFillDelete></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductsCard;
