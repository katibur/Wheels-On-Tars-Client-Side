import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import AdvertisedSliderItems from "./AdvertisedSliderItems";
import { useQuery } from "@tanstack/react-query";

const AdvertisedSlider = () => {
  const { user } = useContext(AuthContext);
  const url = `https://wheels-on-tars-server-katibur.vercel.app/advertisedItems`;

  const {
    data: advertisedProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisedProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {advertisedProducts ? (
        <div className="grid sm:grid-cols-1 lg:grid-cols-3">
          {advertisedProducts.map((singleAdvertisedProduct) => (
            <AdvertisedSliderItems
              key={singleAdvertisedProduct._id}
              singleAdvertisedProduct={singleAdvertisedProduct}
              refetch={refetch}
            ></AdvertisedSliderItems>
          ))}
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-center">No Advertised Items.</h1>
      )}
    </div>
  );
};

export default AdvertisedSlider;
