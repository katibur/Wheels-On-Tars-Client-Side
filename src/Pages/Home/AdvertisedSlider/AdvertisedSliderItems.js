import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import useSeller from "../../../Hooks/isSeller/useSeller";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AdvertisedSliderItems = ({ singleAdvertisedProduct, refetch }) => {
  const { resalePrice, img, name, description } = singleAdvertisedProduct;

  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);

  const handleDelete = (id) => {
    fetch(
      `https://wheels-on-tars-server-katibur.vercel.app/advertisedItems/${id}`,
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

  return (
    <div>
      <div className="mb-8 mx-10">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <div className="flex justify-between">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-cyan-400">
                Price: {resalePrice}
              </span>
              {isSeller && (
                <div className="sm:inline-flex sm:shrink-0 sm:items-center -mt-3">
                  <button
                    onClick={() => handleDelete(singleAdvertisedProduct._id)}
                    className="btn btn-ghost"
                  >
                    <AiFillDelete></AiFillDelete>
                  </button>
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          </div>
          <p className="dark:text-gray-100">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedSliderItems;
