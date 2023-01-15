import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useBuyer from "../../Hooks/useBuyer/useBuyer";
import { MdReportProblem } from "react-icons/md";
import toast from "react-hot-toast";

const ProductCard = ({ setBooking, booking, product }) => {
  const {
    img,
    name,
    location,
    originalPrice,
    resalePrice,
    warranty,
    used,
    sellerName,
    time,
    description,
    condition,
  } = product;

  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);

  const handleWishlist = () => {
    const wishlistProduct = {
      productName: product.name,
      price: product.resalePrice,
      sellerName: product.sellerName,
      location,
      email: user?.email ? user.email : "Unknown",
    };
    fetch("https://wheels-on-tars-server-katibur.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Added To WishList");
        } else {
          toast.error(data.message);
        }
      });
  };

  const handleReport = () => {
    const wishlistProduct = {
      productName: product.name,
      price: product.resalePrice,
      sellerName: product.sellerName,
      location,
      email: user?.email ? user.email : "Unknown",
    };
    fetch("https://wheels-on-tars-server-katibur.vercel.app/reportedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Reported To Admin.");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 my-5">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <p
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {sellerName}
            </p>
            <span className="text-xs dark:text-gray-400">
              BDT {resalePrice}/=
            </span>
          </div>
        </div>
        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt={name}
                className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
              />
            </PhotoView>
          </PhotoProvider>
          <h2 className="mb-1 text-xl font-semibold">{name}</h2>
          <p className="text-sm dark:text-gray-400">{description}</p>
          <div className="flex justify-between my-3">
            <p>
              <span className="font-bold">Buying Price:</span> {originalPrice}
            </p>
            <p>
              <span className="font-bold">Condition:</span> {condition}
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              <span className="font-bold">Warranty:</span> {warranty}
            </p>
            <p>
              <span className="font-bold">Used:</span> {used}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap card-actions justify-between mx-auto lg:gap-10 sm:gap-5 text-white">
          {isBuyer && user?.email ? (
            <>
              <label
                onClick={() => setBooking(product)}
                htmlFor="booking-modal"
                className="btn btn-md btn-outline"
              >
                Buy
              </label>
              <label
                onClick={handleWishlist}
                className="btn btn-md btn-outline"
              >
                Add To WishList
              </label>
              <label
                className="btn btn-md btn-outline mx-auto"
                onClick={handleReport}
              >
                Report
                <MdReportProblem></MdReportProblem>
              </label>
            </>
          ) : (
            <>
              <label
                onClick={() => setBooking(product)}
                htmlFor="booking-modal"
                className="btn btn-md btn-outline"
              >
                Buy
              </label>
              <label
                onClick={handleWishlist}
                className="btn btn-md btn-outline"
              >
                Add To WishList
              </label>
              <label
                className="btn btn-md btn-outline mx-auto"
                onClick={handleReport}
              >
                Report
                <MdReportProblem></MdReportProblem>
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
